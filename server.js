const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/config");
const userRoute = require("./routes/userRoute")
var http = require('http');

dotenv.config();
//connecting to mongodb database
connectDb();
const app = express();


var http = require('http').Server(app);

//dotenv config
// app.get("/", (req, res) => {
//   res.send("<h1>Welcome to Node Server</h1>");
// });

app.use("/api/users",userRoute);

app.use((req,res,next)=>{
    res.status(200).json(
        {
            message : 'app is running at localhost: 5000'
        }
    )
})

app.listen(process.env.PORT , () => {
  console.log(
    `Server Running on Port ${process.env.PORT}`
  );
});
