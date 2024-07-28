import express from 'express';
import cors from 'cors';
import fs from 'fs' //file system, default package
import { format } from 'path';

const app = express()
app.use(cors()) // which domain, port
const PORT=4000 // .env


//API generate   // '/'-> endpoints
app.get('/',(req,res)=>{
    //res.status(200).json({message:"welcome to backend worldb "})
    res.status(200).send(
        `<div style="background-color:blue ; color : white">
         <h1> using html, hello </h1>
         </div>`
    )
 })

app.get('/writereadfile', (req, res)=>{
    let today = format(new Date(), 'dd-MM-yyyy-HH-mm-ss') //28-07-2024-19-44-15
    console.log(today);
    const filepath = `TimeStamp/${today}`

    fs.writeFileSync(filepath, `${today}`,'utf8');
    
    let data = fs.readFileSync(filepath, 'utf8')
    try {
        res.status(200).send(data)
    } catch (error) {
        console.log(error);

    }
}) 