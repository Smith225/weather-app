const express= require("express");
const connectToMongo= require("./db");
const cors= require("cors");

const app= express();
const port= 5000;

connectToMongo();

//Available Routes
app.use(cors());
app.use("/api/", require("./routes/cities"));

app.listen(port, ()=>{
    console.log("Successfully started connection at port 5000.");
});