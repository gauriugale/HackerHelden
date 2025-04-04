const express = require('express');
const router = express.Router();
const {body} = require("express-validator");
const studentController = require('../controllers/student.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'), 
    body('fullname.firstname').isLength({min:3}).withMessage('First Name Should be more then 3 Characters long'),
    body('password').isLength({min:6}).withMessage('Password Must be 6 Charaters long'),
],
    studentController.registerStudent
)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'), 
    body('password').isLength({min:6}).withMessage('Password Must be 6 Charaters long'),
],
    studentController.loginStudent
)


router.get('/profile', authMiddleware.authStudent , studentController.getStudentProfile)
router.get('/logout', authMiddleware.authStudent , studentController.logoutStudent)


module.exports = router;