import {DbConnect} from '../DbConnect.js';
import { ObjectId } from 'mongodb';





export async function get_DayParty(req,res){
    const db= DbConnect();
    const collection = await db.collection("day-party")
    .find({}).sort({ events: -1}).limit(0).toArray()
    .catch(err => {
        res.status(500).send(err);
        return
    });
    
    console.log("Get:All Events ");
    console.log(collection);
    res.send(collection);
}

export async function post_DayParty(req,res){
    const newDoc = req.body
    const db = DbConnect();
    const collection = await db.collection("day-party")
    .insertOne(newDoc)
    .catch(err => {
        res.status(500).send(err)
         return
    })
    console.log("Post:All Events")
    console.log(collection)
    res.send(collection)
    
}

// export async function update_DayParty(req,res){
//     const {docName} =req.params;
//     const newDoc = req.body;
//     const DB = DbConnect();
//     const collection = await DB.Collection("day-party")
//     .updateOne({_id:ObjectId(id)})
//     .catch(err => {
//         res.status(500).send(err)
//          return
//     })
//     console.log("Update:All Event")
//     console.log(collection)
//     res.send(collection)
// }


export async function delete_DayParty(req, res){
    const {_id} = req.params
    const db = DbConnect();
    const collection = await db.collection("day-party")
    .findOneAndDelete( {_id: new ObjectId(_id)})
    .then(()=>get_DayParty(res,res))
    .catch(err => {
        res.status(500).send(err);
        return
    });
    
    console.log("Delete: Delete All Events")
    console.log(collection);
    res.send(collection);

}