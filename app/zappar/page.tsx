export default function ZapparPage() {
  return (
    <main style={{ height: "100dvh", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: 12 }}>
        <h1 style={{ fontSize: 18, fontWeight: 600 }}>Zappar + A‑Frame サンプル</h1>
        <p style={{ opacity: 0.7, marginTop: 4 }}>
          端末カメラ上に画像を表示するデモです。下のリンクまたは埋め込みから開けます。
        </p>
        <p style={{ marginTop: 8 }}>
          <a href="/zappar-aframe.html" style={{ color: "#2563eb" }}>フルページで開く（/zappar-aframe.html）</a>
        </p>
      </div>
      <div style={{ flex: 1, borderTop: "1px solid #e5e7eb" }}>
        <iframe
          title="Zappar + A‑Frame"
          src="/zappar-aframe.html"
          style={{ width: "100%", height: "100%", border: 0 }}
          allow="camera; gyroscope; accelerometer; magnetometer"
        />
      </div>
    </main>
  );
}

