import functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';
import { get_FamilyEvents, post_FamilyEvents, delete_FamilyEvents } from './src/familyevents/familyevents.js';
import { delete_LadiesNight, get_LadiesNight, post_LadiesNight } from './src/ladiesnight/ladiesnight.js';
import { delete_DayParty, get_DayParty, post_DayParty } from './src/dayparty/dayparty.js';



const app = express();
app.use(express.json());
app.use(cors());


app.get('/', (req,res) => {
    res.send('I am root.');
    console.log('I am root.')
});

app.get('/familyevents', get_FamilyEvents);
app.post('/addfamilyevents', post_FamilyEvents);
// //app.patch('/familyevents/:eventName', updateAllEvents);
 app.delete('/familyevents/:eventName',delete_FamilyEvents)

app.get('/ladiesnight', get_LadiesNight);
 app.post('/addladiesnight', post_LadiesNight);
// //app.patch('/ladiesnight/:eventName', updateAllEvents);
 app.delete('/ladiesnight/:eventName',delete_LadiesNight)

app.get('/dayparty', get_DayParty);
app.post('/adddayparty', post_DayParty);
// //app.patch('/dayparty/:eventName', updateAllEvents);
app.delete('/dayparty/:eventName',delete_DayParty)


//https://final-project-api-ad.web.app
export const api = functions.https.onRequest(app)

