import { connectToDatabase } from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
    const { id } = req.query;
    if (req.method === 'GET') {
        const { db } = await connectToDatabase();
        const book = await db.collection('books').findOne({ _id: ObjectId(id) });
        res.status(200).json(book);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
