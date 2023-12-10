const express = require("express");
const connectMongo = require("./database/index");
const {PORT} = require("./config/index");
const router = require("./routes/index");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(express.json());

connectMongo();

app.get("/",(req,res)=>{
    res.json({msg:"hello world"})
})

app.use(router);

app.use(errorHandler);


app.listen(PORT,console.log(`server started on ${PORT}`))
