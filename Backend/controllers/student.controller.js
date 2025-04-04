const studentModel = require('../models/student.model');
const studentService = require('../services/student.service');
const { validationResult } = require('express-validator');
const blacklistTokenModel = require('../models/blacklistToken.model');

module.exports.registerStudent = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password } = req.body;

    const isUserAlreadyExist = await studentModel.findOne({ email});

    if (isUserAlreadyExist) {
        return res.status(400).json({ message: 'User Already Exist' });
    }

    const hashedPassword = await studentModel.hashPassword(password);

    const student = await studentService.creatStudent({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    });

    const token = student.generateAuthToken();

    res.status(201).json({ token, student });
}

module.exports.loginStudent = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const student = await studentModel.findOne({ email }).select('+password');

    if (!student) {
        return res.status(401).json({ message: 'Invalid Credentials' });
    }

    const isMatch = await student.comparePassword(password);

    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid Credentials' });
    }


    const token = student.generateAuthToken();
    res.cookie('token', token);

    res.status(200).json({ student, token });
}

module.exports.getStudentProfile = async (req, res, next) => {
    res.status(200).json(req.user);
}

module.exports.logoutStudent = async (req, res, next) => {
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    await blacklistTokenModel.create({ token });

    res.status(200).json({ Message: 'Logout Successfully' });

}