import { DbConnect } from "../DbConnect.js";


export async function get_FamilyEvents (req,res){
    const db= DbConnect();
    const collection = await db.collection("family-events")
    .find({}).sort({ events: -1}).limit(5).toArray()
    .catch(err => {
        res.status(500).send(err);
        return
    });
    
    console.log("Get:All Events ");
    console.log(collection);
    res.send(collection);
}

export async function post_FamilyEvents(req,res){
    const newDoc = req.body
    const db = DbConnect();
    const collection = await db.collection("family-events")
    .insertOne(newDoc)
    .catch(err => {
        res.status(500).send(err)
         return
    })
    console.log("Post:All Events")
    console.log(collection)
    res.send(collection)
    
}

// export async function update_FamilyEvent(req,res){
//     const {docName} =req.params;
//     const newDoc = req.body;
//     const DB = DbConnect();
//     const collection = await DB.Collection("family-events")
//     .updateOne({_id:ObjectId(id)})
//     .catch(err => {
//         res.status(500).send(err)
//          return
//     })
//     console.log("Update:All Event")
//     console.log(collection)
//     res.send(collection)
// }


export async function delete_FamilyEvents(req, res){
    const {docName} = req.params
    const db = DbConnect();
    const collection = await db.collection("family-events")
    .deleteOne( {id:Number(docName)})
    .catch(err => {
        res.status(500).send(err);
        return
    });
    
    console.log("Delete: Delete All Events")
    console.log(collection);
    res.send(collection);

}