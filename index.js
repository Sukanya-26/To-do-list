import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
const post=[];
const postw=[];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){
    //res.render("index.ejs",);
    res.render("index.ejs",{ nitem :post ,
    });
});
app.post("/",function(req,res){
    console.log(req.body);
    post.push(req.body.newItem);
    res.redirect("/");
});
app.get("/work",function(req,res){
    res.render("work.ejs",{ witem :postw ,
    });
});
app.post("/work",function(req,res){
    console.log(req.body);
    postw.push(req.body.workItem);
    res.redirect("/work");
});
app.listen(port,function(){
    console.log(`Listening to port ${port}`);
});

// var d = new Date()
// var day=d.getDay();
// var dayname="";
//         switch(day){
//             case 1:
//                 dayname="Monday"
//             break;
//             case 2:
//                 dayname="Tuesday"
//             break;
//             case 3:
//                 dayname="Wednesday"
//             break;
//             case 4:
//                 dayname="Thursday"
//             break;
//             case 5:
//                 dayname="Friday"
//             break;
//             case 6:
//                 dayname="Saturday"
//             break;
//             case 0:
//                 dayname="Sunday"
//             break;
//         }
//         const res=dayname+" , "+d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear();
//         console.log(res);
        