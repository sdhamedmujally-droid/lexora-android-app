// Vercel Serverless Audio Proxy (api/audio.js)
// Enables 100% CORS-free audio downloading & permanent IndexedDB offline caching on mobile phones, tablets, and laptops!
export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  const targetUrl = req.query.url;
  if (!targetUrl || typeof targetUrl !== "string") {
    return res.status(400).send("Missing url parameter");
  }
  try {
    const response = await fetch(targetUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        "Accept": "audio/mpeg,audio/*;q=0.9,*/*;q=0.8"
      }
    });
    if (!response.ok) {
      return res.status(response.status).send("Upstream error");
    }
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    return res.status(200).send(buffer);
  } catch (err) {
    return res.status(500).send("Proxy error");
  }
}
