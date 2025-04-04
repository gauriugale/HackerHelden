const studentModel = require('../models/student.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.authStudent = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

const isBlacklisted = await studentModel.findOne({ token: token});

    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const student = await studentModel.findById(decoded._id);
        req.student = student;
        return next();
    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}


// module.exports.authCaptain = async (req, res, next) => {
//     const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
//     if (!token) {
//         return res.status(401).json({ message: 'Unauthorized' }); 
//     }

//     const isBlacklisted = await captainModel.findOne({ token: token });

//     if (isBlacklisted) {
//         return res.status(401).json({ message: 'Unauthorized' });
//     }
//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         const captain = await captainModel.findById(decoded._id);
//         req.captain = captain;
//         return next();
//     } catch (err) {
//         return res.status(401).json({ message: 'Unauthorized' });
//     }
// }