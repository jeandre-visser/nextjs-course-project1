import { MongoClient } from 'mongodb';

async function handler(req, res) {
  const eventId = req.query.eventId;

  const client = await MongoClient.connect(
    'mongodb+srv://jeandrev14:Password21@cluster-nextjs.0z2aj6o.mongodb.net/events?retryWrites=true&w=majority'
  );

  if (req.method === 'POST') {
    const { email, name, text } = req.body;

    if (
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !text ||
      text.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    const db = client.db();
    const commentsCollection = db.collection('comments');
    const result = await commentsCollection.insertOne(newComment);

    console.log(result);

    newComment.id = result.insertedId;

    res.status(201).json({ message: 'Added comment.', comment: newComment });
  }
  if (req.method === 'GET') {
    const db = client.db();
    const commentsCollection = db.collection('comments');
    const comments = await commentsCollection.find().toArray();

    res.status(200).json({ comments });
  }

  client.close();
}

export default handler;
