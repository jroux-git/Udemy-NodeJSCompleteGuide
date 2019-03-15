const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head>");
    res.write("<title>Index</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h2>Hello from Index page</h2>");
    res.write('<form action="/create-user" method="POST" >');
    res.write('<input type="text" name="username" />');
    res.write('<button type="submit" value="Send">Send</button>');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head>");
    res.write("<title>Users</title>");
    res.write("</head>");
    res.write("<ul>");
    res.write("<h2>Users: </h2>");
    res.write("<ul><li>User 1</li><li>User 2</li></ul>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", chunk => {
      body.push(chunk);
    });

    req.on("end", chunk => {
      const parambody = Buffer.concat(body).toString();
      console.log(parambody.split("=")[1]);
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
});

server.listen(3000);
