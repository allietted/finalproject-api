// import {DbConnect} from './DbConnect.js';
// import { MongoCredentials } from '../secrets.js';




// export async function getAllEvents (req,res){
//     const db= DbConnect();
//     const collection = await db.collection(MongoCredentials.Collection)
//     .find({}).sort({ events: -1}).limit(5).toArray()
//     .catch(err => {
//         res.status(500).send(err);
//         return
//     });
    
//     console.log("Get:All Events ");
//     console.log(collection);
//     res.send(collection);
// }

// export async function postAllEvents(req,res){
//     const newDoc = req.body
//     const db = DbConnect();
//     const collection = await db.collection(MongoCredentials.Collection)
//     .insertOne(newDoc)
//     .catch(err => {
//         res.status(500).send(err)
//          return
//     })
//     console.log("Post:All Events")
//     console.log(collection)
//     res.send(collection)
    
// }

// export async function updateAllEvent(req,res){
//     const {docName} =req.params;
//     const newDoc = req.body;
//     const DB = DbConnect();
//     const collection = await DB.Collection(MongoCredentials.Collection)
//     .updateOne({_id:ObjectId(id)})
//     .catch(err => {
//         res.status(500).send(err)
//          return
//     })
//     console.log("Update:All Event")
//     console.log(collection)
//     res.send(collection)
// }


// export async function deleteAllEvents(req, res){
//     const {docName} = req.params
//     const db = DbConnect();
//     const collection = await db.collection(MongoCredentials.Collection)
//     .deleteOne( {id:Number(docName)})
//     .catch(err => {
//         res.status(500).send(err);
//         return
//     });
    
//     console.log("Delete: Delete All Events")
//     console.log(collection);
//     res.send(collection);

// }

