const collegeData = require('./modules/collegeData');

collegeData.initialize().then(() => {
    console.log('College data initialized');

    collegeData.getAllStudents().then(students => {
            console.log(`Successfully retrieved ${students.length} students`);
        }).catch(err => {
            console.log(err);
        });
    
    collegeData.getCourses().then(courses => {
        console.log(`Successfully retrieved ${courses.length} courses`);
    }).catch(err => {
        console.log(err);
    });

    collegeData.getTAs().then(TAs => {
            console.log(`Successfully retrieved ${TAs.length} TAs`)
        }).catch(err => {
            console.log(err);
    });

}).catch(err => {
    console.log('College data initialization failed', err);
});