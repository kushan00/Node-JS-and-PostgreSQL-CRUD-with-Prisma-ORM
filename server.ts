import express from "express";
import bodyParser from 'body-parser';

// Routes imports
var todoRoutes = require("./routes/todoRoutes");
var userRoutes = require("./routes/userRoutes");


const app = express();

// Parse JSON bodies for this application
app.use(bodyParser.json());


//Todos routes
app.use("/api/todo", todoRoutes);

//User routes
app.use("/api/user", userRoutes);


app.listen(5000,()=>{
    console.log("SERVER IS RUNNING ON PORT 5000");
});

