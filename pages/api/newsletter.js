import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes('@')) {
      res.status(422).json({ message: 'Invalid email address.' });
      return;
    }

    // Store it in a database
    const client = await MongoClient.connect(
      'mongodb+srv://jeandrev14:Password21@cluster-nextjs.0z2aj6o.mongodb.net/events?retryWrites=true&w=majority'
    );
    const db = client.db();
    const newsletterCollection = db.collection('newsletter');
    await newsletterCollection.insertOne({ email: userEmail });

    client.close();
    console.log(userEmail);

    res.status(201).json({ message: 'Signed up!' });
  }
}

export default handler;
