 const express = require("express");
 const app = express();
 app.set('view engine','ejs');
 app.set('views','./views');
 app.use(express.static("public"));
/* app.get('/',function(req,res,next){
    res.render('home');
 });*/
 app.get('/',(req,res)=> res.render('home'));
 /*app.listen(3000,function(){
     console.log("server start");
 })*/
 app.listen(process.env.PORT||3000,()=>console.log('server start'));
