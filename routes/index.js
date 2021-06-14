const router=require('express').Router();
const Rec=require('../models/rec');

// routes
router.get("/hello-world",(req,res)=>{
    res.send("Hello World");
});

router.get("/",async(req,res)=>{
    const allRec=await Rec.find();
    res.render("index",{rec:allRec});
});

router.post("/add",(req,res)=>{
    const {rec}=req.body;
    const newRec=new Rec({rec});
    newRec.save().then(()=>{
        console.log('Successfully added Record');
        res.redirect('/');
    })
    .catch((err)=>console.log(err));
});

router.get("/delete/:_id",(req,res)=>{
    const {_id}=req.params;
    Rec.deleteOne({_id}).then(()=>{
        console.log('Successfully deleted Record');
        res.redirect('/');
    })
    .catch((err)=>console.log(err));
});

module.exports=router;