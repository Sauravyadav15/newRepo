const express= require("express");
const app= express();
 
let port = 8080;

const path= require("path");
const methodOvveride= require("method-override");
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname, "public")));///
app.use(methodOvveride("_method"));



let fruits =[{ id: 1, fruit:"mango",color:"yellow"},
    { id:2,fruit: "guava", color: "green"},
    {id:3,fruit: "watermelon", color:"darkgreen"},
    { id:4,fruit: "apple", color:"red"    },
    {id:5,fruit: "pineapple", color:"yellowishgreen"},
    {id:6,fruit: "orange", color:"orange"}
];


app.get("/practice",(req,res)=>{
    res.render("home.ejs",{fruits});
    
})
 app.get("/practice/neweform",(req,res)=>{
    res.render("form.ejs");
 })

 app.get("/practice/:id/edit",(req,res)=>{
    let {id}=req.params;
    let fruit= fruits.find((p)=> id===p.id);
    res.render("edit.ejs");
    res.redirect("/practice");
 })
 app.post("/practice",(req,res)=>{
   
    let {fruit,color}= req.body;
    fruits.push({fruit,color});
   res.redirect("/practice");
      
 })
app.listen(port,()=>{
    console.log("listening to port 8080");
})