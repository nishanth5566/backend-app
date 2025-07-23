const {Router}= require("express");
const courseRouter = Router();
const {courseModel}= require("../db")

courseRouter.post("/course/purchase", function(req,res){
    res.json({
        message:"signup endpoint"
    })
})
courseRouter.get("/courses/preview", function(req,res){
    res.json({
        message:"signup endpoint"
        })
    })

module.exports={
     courseRouter : courseRouter
}