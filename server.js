const http = require("http");
const PORT = process.env.PORT || 3000;

http
    .createServer((req, res) => {
        if (req.url === "/health") {
            res.writeHead(200, { "Content-Type": "text/plain" });
            return res.end("ok");
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`<h1>Naija Cloud test app</h1><p>Deployed and live. Host: ${req.headers.host}</p>`);
    })
    .listen(PORT, () => console.log(`listening on ${PORT}`));

// TGL-169: PR preview placement check (2026-10-03)
