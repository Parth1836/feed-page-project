const express = require("express");
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3002;

const path = require("path");
const app = express();

// support parsing of application/json type post data
app.use(bodyParser.json());


const routes = require("./src/server/routes");
app.use("/api", routes);

app.use(express.static(`${__dirname}/public`));

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
