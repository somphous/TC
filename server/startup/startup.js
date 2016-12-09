Meteor.startup(function () {
    if (Meteor.users.find().count() <= 0) {
        let superId = Accounts.createUser({
            username: 'super',
            email: 'super@learn.com',
            password: 'kai123'
        });
        Roles.addUsersToRoles(superId, ['Setting', 'Data', 'Report', 'super'])
    }
    if(Collection.Company.find().count() <=0){
        Collection.Company.insert({
            khName: 'មជ្ឈមណ្ឌលបណ្តុះបណ្តាល',
            khShortName: 'មបរ',
            enName: 'Training Center',
            enShortName: 'TC',
            khAddress: 'ភូមិរំចេក ៤ សង្កាត់រតនៈ ក្រុងបាត់ដំបង ខេត្តបាត់ដំបង',
            enAddress: 'Romchek 4 Village, Sangkat Rottanak, Krong Battamang, Battambang Province',
            telephone: '012-345-678'
        })
    }
});
