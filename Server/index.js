import express from "express";
import bodyParser from "body-parser";
import {connectToDb, getDb} from "./db.js";
import { ObjectId } from "mongodb";
import cors from "cors";


const app = express();
const port = 3001;
app.use(express.static("public"));
app.use(express.json());
app.use(cors());
let db;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

//item
app.get("/items", async (req, res) => {
 let items=[];
 db.collection('items')
 .find().sort({date:-1}).forEach(item =>items.push(item))
 .then(()=>{
    res.status(200).json(items);
 })
 .catch(()=>{
    res.status(500).json({ error: 'Can not get' });
 })
});

   //orders
app.post("/orders", async (req, res) => {
    let order=req.body;

    db.collection('orders')
    .insertOne(order)
    .then((r)=>{
       res.status(201).json(r);
    })
    .catch((err)=>{
       res.status(500).json({ error: err });
    })
   });
   
   app.get("/search/:searchterm", async (req, res) => {
      const items = [];
      const term = req.params.searchterm;
  
      try {
          const cursor = await db.collection('items').find({
              "content.Tags": { $regex: new RegExp(`\\b${term}\\b`, 'i') }
          });
  
          await cursor.forEach(item => {
              items.push(item); 
          });
  
          res.status(200).json(items);
      } catch (error) {
          console.error("Error fetching items:", error);
          res.status(500).json({ error: 'Internal Server Error' });
      }
  });
  
   
//new 
app.get("/items/:id", async (req, res) => {
    let id=req.params.id;
    db.collection('items')
    .findOne({_id: new ObjectId(id)})
    .then((data)=>{
       res.status(200).json(data);
    })
    .catch(()=>{
       res.status(500).json({ error: 'Can not get' });
    })
   });

 app.get("/orders/:id", async (req, res) => {
    let id=req.params.id;
    db.collection('orders')
    .findOne({_id: new ObjectId(id)})
    .then((data)=>{
       res.status(200).json(data);
    })
    .catch(()=>{
       res.status(500).json({ error: 'Can not get' });
    })
 });


connectToDb ((err)=>{
    if(!err){
        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
          })
          db=getDb();
    }
})