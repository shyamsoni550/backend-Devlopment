require('dotenv').config()
console.log("chai aur code");
const express = require("express");
const app = express();
const port = 4000;


const githubdata={
  "message": "Not Found",
  "documentation_url": "https://docs.github.com/rest/users/users#get-a-user"
}
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send(" shyam.com!");
});

app.get("/login", (req, res) => {
  res.send("<h1>please login at chai aur code </h1>");
});

app.get("/YOUTUBE", (req, res) => {
  res.send("<h2>CHAI AUR CODE  </h2>");
});

app.listen(process.env.PORT, () => { 
  console.log(`Example app listening on port ${port}`);
});

app.get('/github', (req,res)=>{ 
  req.json(githubdata);
})
