const currentUser = await usersCollection.findOne({
  username: username,
})
