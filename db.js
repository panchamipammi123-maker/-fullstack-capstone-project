const { MongoClient } = require('mongodb');

const client = new MongoClient(uri);

async function connectDB() {
  await client.connect();     // ← this line must be present
  console.log('Connected to MongoDB');
}

module.exports = { client, connectDB };
