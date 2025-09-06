// Simple HTTPS reverse proxy for Next.js dev server
// - Listens on HTTPS :8443 and proxies to http://localhost:3000
// - Requires certs at certs/dev-cert.pem and certs/dev-key.pem (mkcert recommended)
// - Detects local IPv4 for quick URL hint

const fs = require('fs');
const path = require('path');
const os = require('os');
const https = require('https');
const http = require('http');

const CERT_PATH = process.env.DEV_SSL_CERT || path.join(process.cwd(), 'certs/dev-cert.pem');
const KEY_PATH = process.env.DEV_SSL_KEY || path.join(process.cwd(), 'certs/dev-key.pem');
const TARGET_HOST = process.env.DEV_TARGET_HOST || 'localhost';
const TARGET_PORT = Number(process.env.DEV_TARGET_PORT || 3000);
const LISTEN_PORT = Number(process.env.DEV_SSL_PORT || 8443);

function getLanIPv4() {
  const ifaces = os.networkInterfaces();
  for (const name of Object.keys(ifaces)) {
    for (const info of ifaces[name] || []) {
      if (info.family === 'IPv4' && !info.internal) {
        return info.address;
      }
    }
  }
  return '127.0.0.1';
}

function ensureCerts() {
  if (!fs.existsSync(CERT_PATH) || !fs.existsSync(KEY_PATH)) {
    console.error('[dev:https] Missing TLS cert or key.');
    console.error(`[dev:https] Expected cert: ${CERT_PATH}`);
    console.error(`[dev:https] Expected key : ${KEY_PATH}`);
    console.error('[dev:https] Create them with mkcert, for example:');
    console.error('  mkdir -p certs');
    console.error('  mkcert -install');
    console.error('  mkcert -cert-file certs/dev-cert.pem -key-file certs/dev-key.pem 127.0.0.1 ::1 localhost ' + getLanIPv4());
    process.exit(1);
  }
}

ensureCerts();

const options = {
  cert: fs.readFileSync(CERT_PATH),
  key: fs.readFileSync(KEY_PATH),
};

const server = https.createServer(options, (req, res) => {
  const opts = {
    hostname: TARGET_HOST,
    port: TARGET_PORT,
    path: req.url,
    method: req.method,
    headers: { ...req.headers },
  };

  // Remove H2-specific headers that may confuse upstream
  delete opts.headers[':authority'];
  delete opts.headers[':method'];
  delete opts.headers[':path'];
  delete opts.headers[':scheme'];

  const proxyReq = http.request(opts, (proxyRes) => {
    res.writeHead(proxyRes.statusCode || 500, proxyRes.headers);
    proxyRes.pipe(res, { end: true });
  });

  proxyReq.on('error', (err) => {
    console.error('[dev:https] Proxy error:', err.message);
    res.statusCode = 502;
    res.end('Proxy error');
  });

  req.pipe(proxyReq, { end: true });
});

server.listen(LISTEN_PORT, () => {
  const ip = getLanIPv4();
  console.log(`[dev:https] Listening on https://${ip}:${LISTEN_PORT}`);
  console.log(`[dev:https] Proxying to http://${TARGET_HOST}:${TARGET_PORT}`);
});

