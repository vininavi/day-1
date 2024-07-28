import express from 'express';
import cors from 'cors';

const app = express()
app.use(cors()) // which domain, port
const PORT=4000 // .env


//API generate   // '/'-> endpoints
app.get('/first',(req,res)=>{
    res.status(200).json({message:"welcome to backend worldb "})
    
})

//url : http://localhost:4000   / first


app.listen(PORT ,()=>{
    console.log("App is listening in the port:",PORT);
}) // port : 4000 req 
