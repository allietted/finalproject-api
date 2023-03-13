import {DbConnect} from '../DbConnect.js';
import { ObjectId } from 'mongodb';





export async function get_LadiesNight (req,res){
    const db= DbConnect();
    const collection = await db.collection("ladies-night")
    .find({}).sort({ events: -1}).limit(0).toArray()
    .catch(err => {
        res.status(500).send(err);
        return
    });
    
    console.log("Get:All Events ");
    console.log(collection);
    res.send(collection);
}

export async function post_LadiesNight(req,res){
    const newDoc = req.body
    const db = DbConnect();
    const collection = await db.collection("ladies-night")
    .insertOne(newDoc)
    .catch(err => {
        res.status(500).send(err)
         return
    })
    console.log("Post:All Events")
    console.log(collection)
    res.send(collection)
    
}

// const { title, info, rating, review, image } = req.body
//   if ((title.length < 1 || info.length < 1 || rating.length < 1 || review.length < 1 || image.length < 1)) {
//     res.status(500).json({ message: "Input Fields are empty or too short!" })
//     return
//   }
//   const newAnime = { title, info, rating, review, image, createdAt: new Date() }

// export async function update_LadiesNight(req,res){
//     const {docName} =req.params;
//     const newDoc = req.body;
//     const DB = DbConnect();
//     const collection = await DB.Collection("ladies-night")
//     .updateOne({_id:ObjectId(id)})
//     .catch(err => {
//         res.status(500).send(err)
//          return
//     })
//     console.log("Update:All Event")
//     console.log(collection)
//     res.send(collection)
// }


export async function delete_LadiesNight(req, res){
    const {_id} = req.params
    const db = DbConnect();
    const collection = await db.collection("ladies-night")
    .findOneAndDelete( {_id: new ObjectId(_id)})
    .then(()=>get_LadiesNight(res,res))
    .catch(err => {
        res.status(500).send(err);
        return
    });
    
    console.log("Delete: Delete All Events")
    console.log(collection);
    res.send(collection);

}