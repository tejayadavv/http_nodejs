var https = require('https');

https.createServer(function (req, res) {
 
  res.write(`
    <!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>`);
  res.end();
}).listen(8080);