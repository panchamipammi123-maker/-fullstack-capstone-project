const express = require('express');
const router = express.Router();

const { connectToDatabase } = require('../db');  // calls connectToDatabase()

router.get('/api/gifts', async (req, res) => {
  const db = await connectToDatabase();
  const gifts = await db.collection('gifts').find({}).toArray();
  res.json(gifts);
});

router.get('/api/gifts/:id', async (req, res) => {
  const db = await connectToDatabase();
  const gift = await db.collection('gifts').findOne({ _id: new ObjectId(req.params.id) });
  if (!gift) return res.status(404).json({ message: 'Gift not found' });
  res.json(gift);
});

module.exports = router;
