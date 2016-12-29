rabbitRoutes.route('/score', {
    name: "score",
    action: function (params, queryParams) {
        if(Roles.userIsInRole(Meteor.userId(),['Setting'])){
            BlazeLayout.render('mainLayout', {content: "score"});
        }
        else {
            FlowRouter.go('home');
        }
    },
    breadcrumb: {
        title: 'Score',
        parent:'home'
    }
});
rabbitRoutes.route('/scoreInsert', {
    name: "scoreInsert",
    action: function (params, queryParams) {
        if(Roles.userIsInRole(Meteor.userId(),['Setting'])){
            BlazeLayout.render('mainLayout', {content: "scoreInsert"});
        }
        else {
            FlowRouter.go('home');
        }
    },
    breadcrumb: {
        title: 'Score Insert',
        parent:'score'
    },
});
rabbitRoutes.route('/scoreUpdate/:id', {
    name: "scoreUpdate",
    action: function (params, queryParams) {
        if(Roles.userIsInRole(Meteor.userId(),['Setting'])){
            BlazeLayout.render('mainLayout', {content: "scoreUpdate"});
        }
        else {
            FlowRouter.go('home');
        }
    },
    breadcrumb: {
        title: 'Score Update',
        parent:'score'
    }
});

