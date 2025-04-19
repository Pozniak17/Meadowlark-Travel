const http = require("node:http");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.end("<h1>Hello World!</h1>");
});

server.listen(port, () =>
  console.log(
    `сервер запущений на порті ${port}; ` + "натисніть Ctrl+C для завершення..."
  )
);
