const express = require('express');
const { templates, partials } = require('handlebars');
const app = express();
const path = require('path');
const hbs = require('hbs');
// public static path
const static_path= path.join(__dirname,"./public");
const template_path= path.join(__dirname,"./templates/views");
const partials_path= path.join(__dirname,"./templates/partials");

// Template Engine
app.set('view engine','hbs');
app.set('views',template_path)
app.use(express.static(static_path));
hbs.registerPartials(partials_path);

// routing
app.get("",(req,res)=>{
    res.render('index')
})

app.get("/about",(req,res)=>{
    res.render('about')
})

app.get("/weather",(req,res)=>{
    res.render('weather')
})

app.get("*",(req,res)=>{
    res.render('404erroer')
})



app.listen(3000,()=>{
    console.log("LIStening")
})