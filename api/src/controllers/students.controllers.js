const firebase= require('../database/connection');
studentsCtrl={};
studentsCtrl.getStudents = async (req, res)=>{
    await firebase.db.ref('students').once('value', (snapshot)=>{
        const data=snapshot.val();
        res.json(data);
    });
};

module.exports=studentsCtrl;