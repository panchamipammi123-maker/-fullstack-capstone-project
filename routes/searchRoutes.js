router.get('/api/search', async (req, res) => {
  const { query, category } = req.query;

  const filter = {};
  if (query) filter.name = { $regex: query, $options: "i" };
  if (category) filter.category = category;   // ← filtering by category

  const results = await db.collection('items').find(filter).toArray();
  res.json(results);
});
