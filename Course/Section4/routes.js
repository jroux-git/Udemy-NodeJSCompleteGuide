const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  let arr = [1, 2, 3, 4];
  console.table(arr);
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head>");
    res.write("<title>Enter message</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h2>Enter message</h2>");
    res.write('<form action="/message" method="POST" >');
    res.write('<input type="text" name="message" />');
    res.write('<button type="submit" value="Send">Send</button>');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];

    req.on("data", chunk => {
      console.log(chunk);
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      fs.writeFile("message.txt", parsedBody.split("=")[0], err => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.statusCode = 404;
  res.stasusMessage = "Page not found!";
  res.setHeader("Location", "/");
  return res.end();
};

module.exports = requestHandler;
