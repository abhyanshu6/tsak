const mongoose=require("mongoose");

const RecSchema=new mongoose.Schema({
    rec:{
        type:String,
        required:true,
    }
});

module.exports=new mongoose.model("rec",RecSchema);