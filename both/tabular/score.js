TabularTables.Score = new Tabular.Table({
    name: "Score",
    collection: Collection.Score,
    autowidth: false,
    columnDefs:[
        {
            'width': '1px',
            'targets': 0
        }
    ],
    columns: [
        {
            title: "Action",
            tmpl: Meteor.isClient && Template.scoreAction
        },
        {data: "_id", title: "ID"},
        {
            data: "scoreDate",
            title: "Score Date",
            render: function (val, type, doc) {
                if (val instanceof Date) {
                    return moment(val).format('YYYY/MM/DD');
                } else {
                    return "Never";
                }
            }
        },
        {
            data: "_student",
            title: "Name",
            render(val){
                if (!_.isUndefined(val)) {
                    return val.khmerName;
                }
                return '';
            }
        },

        {data: "score", title: "Score"},
    ]
});