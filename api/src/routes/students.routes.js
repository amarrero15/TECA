const router = require('express').Router();
const studentCtrl = require('../controllers/students.controllers')
module.exports=router;

router.get('/students', studentCtrl.getStudents);
