import {MongoClient} from 'mongodb';
import {MongoCredentials} from '../secrets.js';

export function DbConnect(){
    const client = new MongoClient(MongoCredentials.URI);
    return client.db(MongoCredentials.DB)
}