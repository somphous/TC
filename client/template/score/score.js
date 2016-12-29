//Alertify
Template.score.onRendered(function () {
    // Create new  alertify
    createNewAlertify('score'); //score is name of alertify

});

//insert
Template.score.events({
    'click #js-insert': function (error, result) {

        alertify.score(renderTemplate(Template.scoreInsert))
            .set({
                title: fa('plus', ' Score')
            })
            .maximize();
    }
});

Template.scoreAction.events({
    'click #js-update': function (error, result) {
        Meteor.call('findOne', 'Collection.Score', {_id: this._id}, {}, function (error, score) {
            if (error) {
                Bert.alert(error.message, 'danger', 'growl-bottom-right');
            }
            else {
                alertify.score(renderTemplate(Template.scoreUpdate, score))
                    .set({
                        title: fa('edit', ' Score')
                    })
                    .maximize();
            }
        });
    },
    'click .jsRemove': function () {
        var self = this;
        alertify.confirm("Are you sure want to delete?",
            function () {
                Collection.Score.remove({_id: self._id}); /// remove by _id?
                alertify.success('Deleted');
            },
            function () {
                alertify.error('Cancel');
            });
    },
    'click #js-show': function () {
        Meteor.call('findOne', 'Collection.Score', {_id: this._id}, {}, function (error, score) {
            if (error) {
                Bert.alert(error.message, 'danger', 'growl-bottom-right');
            }
            else {
                alertify.score(renderTemplate(Template.scoreShow, score))
                    .set({
                        title: fa('eye', ' Score')
                    });
            }
        });
    }
});

//Insert
Template.scoreInsert.helpers({
    studentId: function () {
        var list = [];
        // list.push({label: "(Select All)", value: ""});
        Collection.Student.find()
            .forEach(function (obj) {
                list.push({label: obj._id + " | " + obj.latinName + ' | ' + obj.khmerName, value: obj._id});
            });

        return list;

    }
});

Template.scoreUpdate.onRendered(function () {
    // $('#register-id').val(this.data.registerId);
});

//Update
Template.scoreUpdate.helpers({
    // score: function () {
    //     return [
    //         {label: 'Active', value: 'Active'},
    //         {label: 'Close', value: 'Close'},
    //         {label: 'Suspend', value: 'Suspend'},
    //         {label: 'Cancel', value: 'Cancel'}
    //     ]
    // }
});

Template.scoreInsert.onCreated(function () {
    this.subscribe('students');
    this.subscribe('scores');
    // this.subscribe('registers');
});

//hook
AutoForm.hooks({
        scoreInsert: {//id autoform
            onSuccess(formType, id){
                //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
                alertify.success('Successfully Added');
                // FlowRouter.go('score');
            },
            onError(formType, error){
                alertify.error(error.message);
                //Bert.alert(error.message, 'danger', 'growl-top-right');
            }
        },
        scoreUpdate: {//id autoform
            // before:{
            //     update(doc){
            //         return doc;
            //     }
            //
            // },
            onSuccess(formType, id){
                //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
                alertify.success('Successfully Added');
                alertify.score().close();
            },
            onError(formType, error){
                alertify.error(error.message);
                //Bert.alert(error.message, 'danger', 'growl-top-right');
            }
        }
    }
);
