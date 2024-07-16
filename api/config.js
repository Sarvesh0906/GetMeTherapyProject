import dotenv from 'dotenv';
dotenv.config();

import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

async function connectToMongoDB() {
    try {
        const client = new MongoClient(uri, {
            tls: true,
        });

        await client.connect();
        console.log('Connected to MongoDB');
        return client;
    } catch (err) {
        console.error('Error connecting to MongoDB', err);
        throw err;
    }
}

export { connectToMongoDB };

