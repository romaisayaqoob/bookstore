import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);
const dbName = 'lms';

export async function connectToDatabase() {
    if (!client.isConnected) await client.connect();
    const db = client.db(dbName);
    return { db, client };
}
