1. 開発サーバ（HTTPS）起動前に証明書を作る

- mkcertインストール後に以下を実行
    - mkdir -p certs
    - mkcert -install
    - mkcert -cert-file certs/dev-cert.pem -key-file certs/dev-key.pem 127.0.0.1 ::1 localhost <あなたのMacのLAN IP>
    - 例: `mkcert -cert-file certs/dev-cert.pem -key-file certs/dev-key.pem 127.0.0.1 ::1 localhost 192.168.0.25`

2. HTTPSで起動

- npm run dev:https
- ログに https://<LAN IP>:8443 が出るので、iPhoneからそのURLを開く
