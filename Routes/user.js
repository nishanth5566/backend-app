const {Router}= require("express");
const userRouter = Router();
const {userModel}= require("../db")
userRouter.post("/signup", function(req,res){
    res.json({
        message:"yoo signupppppppppp"
    })
})
userRouter.get("/sigin", function(req,res) {
    res.json({
        message:"yoo signinnnnnn"
    })
})
userRouter.get("/purchases", function(req,res){
    res.json({
        message:"yoo signupppppppppp"
     })
})

module.exports={
   userRouter: userRouter
}