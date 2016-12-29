//static
Meteor.publish('score', function (id) {
    //waiting
    Meteor._sleepForMs(1000);

    let data = Collection.Score.find({_id: id});
    return data;
});
//Global
Meteor.publish('scores', ()=>{
    let data=Collection.Score.find();
    return data;
});