const express= require('express');
const config = require ('../config/config');
const studentsRoutes = require('../routes/students.routes');
const app = express();
let port = process.env.PORT || 3000;
app.set('port', config.port);

app.use(studentsRoutes);
app.get('/', (req, res)=>{
    res.send('API TECA');

});
 module.exports=app;