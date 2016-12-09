// Generate
Template.attendanceRpt.onCreated(function () {
    this.subscribe('company');
    // this.subscribe('subjects');
});
Template.attendanceRptGen.onCreated(function () {
    this.subscribe('company');
});
Template.attendanceRpt.helpers({
    // subject: function () {
    //     var data = Collection.Subject.find();
    //     var list = [
    //         {label: 'All', value: ''}
    //     ];
    //
    //     data.forEach(function (obj) {
    //         list.push({label: obj._id + ' : ' + obj.name, value: obj._id});
    //     });
    //     return list;
    // },
    // day: function () {
    //     return [
    //         {label: 'All', value: ''},
    //         {label: "Monday-Friday", value: 'mondayFriday'},
    //         {label: "Saturday-Sunday", value: 'saturdaySunday'}
    //     ];
    // }
});
Template.attendanceRptGen.helpers({
    attendanceRptDoc(){
        let fromDate = FlowRouter.getQueryParam('fromDate');
        let toDate = FlowRouter.getQueryParam('toDate');
        // let subject = FlowRouter.getQueryParam('subject');
        // let day = FlowRouter.getQueryParam('day');
        Meteor.call('attendanceRpt', fromDate, toDate, function (error, result) {
            if (!error) {
                //console.log(result.content);
                Session.set('attendanceRptResult', result);
            }
        });
        // debugger
        return Session.get('attendanceRptResult');
    },
    company(){
        return Collection.Company.find();
    },
    no(index) {
        console.log(index);
        return index + 1;
    }
});

//hook
AutoForm.hooks({
        attendanceRpt: {
            onSubmit(insertDoc, updateDoc, currentDoc){
                this.done(null, insertDoc);
                return false;
            },
            onSuccess(formType, result){
                let query = result;
                let path = FlowRouter.path('attendanceRptGen', {}, query);

                window.open(path, '_blank');
            },
            onError(formType, error){
                alertify.error(error.message);
            }
        }
    }
);
