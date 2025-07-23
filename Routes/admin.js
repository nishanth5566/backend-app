const {Router} = require("express");
const adminrouter = Router();
const {adminModel}= require("../db")

adminrouter.post("/signup", function(req,res){
    res.json({
        message:"yoo signupppppppppp"
    })
})
adminrouter.get("/sigin", function(req,res) {
    res.json({
        message:"yoo signinnnnnn"
    })
})
adminrouter.post("/create", function(req,res) {
    res.json({
        message:"yoo signinnnnnn"
    })
})
adminrouter.put("/courses", function(req,res) {
    res.json({
        message:"yoo signinnnnnn"
    })
})
adminrouter.get ("/course/bulk", function(req,res) {
    res.json({
        message:"yoo signinnnnnn"
    })
})

module.exports= {
    adminrouter: adminrouter
}