const studentModel = require('../models/student.model');

module.exports.creatStudent = async ({
    firstname, lastname, email, password
}) => {
    if (!firstname || !email || !password) {
        throw new Error('All Fields are Required');
    }
    const student = studentModel.create({
        fullname : {
            firstname,
            lastname
        },
        email,
        password
    })
    return student;
}