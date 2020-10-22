var express =require("express");
let bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 5000

//app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//-----/API/first  
app.get("/", (req, res) => {
 //console.log(req.query.query)
   res.send('WORKING!!');
 });
 

//-----/API/first  
app.get("/api/first", (req, res) => {
 console.log(req.query.query)
  res.send(JSON.stringify(req.query.query));
});

//-----/API/second  
app.get("/api/second", (req, res) => {
  console.log(req.query.query)
   res.send('Second Successfull');
 });
 //-----/API/third  
app.get("/api/third", (req, res) => {
  console.log(req.query.query)
   res.send('Third Successfull');
 });
 //-----/API/fourth  
app.get("/api/fourth", (req, res) => {
  console.log(req.query.query)
  
   res.send('Fourth Successfull');
 });


app.listen(PORT, () => { console.log('server started at'+PORT)})

