const http = require("node:http");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // Приводимо URL до єдиного вигляду, видаляємо
  // рядок запиту, необов'язкого косу риску
  // в кінці рядка й переводимо в нижній регістр.
  const path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
  switch (path) {
    case "":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Homepage");
      break;

    case "/about":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("About");
      break;

    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
      break;
  }
});

server.listen(port, () =>
  console.log(
    `сервер запущений на порті ${port}; ` +
      "натисніть Ctrl+C для завершення... "
  )
);
