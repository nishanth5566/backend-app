const express = require('express');
const app = express();

app.post("/user/signup", function(req,res){
    res.json({
        message:"yoo signupppppppppp"
    })
})
app.post("/user/sigin", function(req,res) {
    res.json({
        message:"yoo signinnnnnn"
    })
})
app.get("/user/purchases", function(req,res){
    res.json({
        message:"yoo signupppppppppp"
    })
})
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

app.listen(3000);









