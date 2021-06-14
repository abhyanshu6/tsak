const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require("body-parser");

const app=express();

// connection to mongodb
mongoose.connect('mongodb+srv://admin:apocalypse712@cluster0.2dfke.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})


// middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");

// routes
app.use(require("./routes/index"));

// server configurations
app.listen(process.env.PORT || 3000, ()=> console.log("Server started listening on port: 3000"));
