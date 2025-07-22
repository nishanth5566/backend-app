const {Router}= require("express");
const userRouter = Router();
userRouter.post("/user/signup", function(req,res){
    res.json({
        message:"yoo signupppppppppp"
    })
})
userRouter.get("/user/sigin", function(req,res) {
    res.json({
        message:"yoo signinnnnnn"
    })
})
userRouter.get("/user/purchases", function(req,res){
    res.json({
        message:"yoo signupppppppppp"
     })
    })

module.exports={
   userRouter: userRouter
}