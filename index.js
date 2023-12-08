const express=require("express");
require("dotenv").config()
const database=require("./models/index")
const Prouter=require("./router/pRouter")
const Urouter=require("./router/uRouter")
const app=express();
app.use(express.json())
 
app.use("/api",Prouter)
app.use("/userapi",Urouter)

database.sequelize.sync().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running at ${process.env.PORT}`)
    }); 
});
