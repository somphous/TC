Collection.Score = new Mongo.Collection('score');
Schema.Score = new SimpleSchema({
    scoreDate: {
        type: Date,
        label: 'Score Date',
        defaultValue: moment().toDate(),
        autoform: {
            type: "bootstrap-datetimepicker",
            afFieldInput: {
                dateTimePickerOptions: {
                    format: 'DD/MM/YYYY',
                    pickTime: false
                }
            }
        }
    },
    studentId: {
        type: String,
        label: 'Student Name',
        autoform: {
            type: 'select2',

        }
    },
    score: {
        type: Number,
        label: 'Absent'
        // optional: true
    },
    _student: {
        type: Object,
        optional: true,
        blackbox: true
    }
});
Collection.Score.attachSchema(Schema.Score);