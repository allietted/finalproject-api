import functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';
import {getAllEvents, postAllEvents, deleteAllEvents} from './src/functions.js'



const app = express();
app.use(express.json());
app.use(cors());


app.get('/', (req,res) => {
    res.send('I am root.');
    console.log('I am root.')
});

app.get('/events', getAllEvents);
app.post('/events', postAllEvents);
// app.patch('/events/:eventName', updateAllEvents);
app.delete('/events/:eventName',deleteAllEvents)


// https://final-project-api-ad.web.app/events
// http://127.0.0.1:5001/final-project-api-ad/us-central1/api/events
export const api = functions.https.onRequest(app)

