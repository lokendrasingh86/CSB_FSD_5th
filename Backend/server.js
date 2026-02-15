import http from "http";

const server = http.createServer((req, res) =>  {
  const url = req.url;
  if(url == "/"){
    res.write("Home Page");
  }
  else if(url == "/about"){
    res.write("About Page");
  }
  else if(url == "/contact"){
    res.write("Contact Page");
  }
  else{
    res.write("Error");
  }
  res.end();
})

server.listen(4001, () => {
  console.log("Server Running at http://localhost:4001");
})

// node --watch server.js
// javascript ke objects ko json me convert krne ke liye hota h json.stringify()
// json code ko javascript me convert krte h by json.parse()