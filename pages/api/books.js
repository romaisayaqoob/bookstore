import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const { db } = await connectToDatabase();
        const books = await db.collection('books').find({}).toArray();
        res.status(200).json(books);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
