function createCourseRoutes(app){  
app.post("/course/purchase", function(req,res){
    res.json({
        message:"yoo signupppppppppp"
    })
})
app.get("/courses", function(req,res){
    res.json({
        message:"yoo signupppppppppp"
        })
    })
}
module.exports={
    createCourseRoutes : createCourseRoutes
}