const express = require('express');
const Auth = require('./Controller/Auth')
const operation = require('./Controller/DataOperation')
const router = express.Router();
//Auth
router.post('/Signup',Auth.SignUp)
router.get('/Login',Auth.Login);

//TimeSheet operation
router.get('/EmployeeSideDisplay',operation.getEmployeeSid)
router.get('/ManagerSideDisplay',operation.getManagerSide)
router.post('/Senddata',operation.AddTimeSheetData)
router.put('/EditRate',operation.EditingRate);




module.exports = router;