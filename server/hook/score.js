Collection.Score.before.insert((userId, doc) => {
    doc._id = idGenerator.gen(Collection.Score, 3);
});