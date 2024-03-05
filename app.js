const express = require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const categorie = require("./models/categorie")
const categorieRouter=require("./routes/categorie.route")

const scategorieRouter= require("./routes/scategorie.route")

const articleRouter= require("./routes/article.route")



dotenv.config()
const app=express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("bienvenue dans notre site")

})

mongoose.connect(process.env.DATABASECLOUD)
.then(()=>console.log("connexion a la base de données réussie"))
.catch(err=>{console.log("erreur de connexion a la base de données", err)
process.exit()
})
app.use("/api/categories",categorieRouter)
app.use("/api/scategories",scategorieRouter)
app.use("/api/articles", articleRouter)
app.listen(process.env.PORT,()=>{
    console.log(`serveur is listen on port ${process.env.PORT}`)
})
module.exports = app;





