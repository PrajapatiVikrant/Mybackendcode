const express = require('express');
const app = express();
app.use('/TimeSheet',require('./Route'));
app.listen(4000,()=>{
    console.log('Server listen at port 4000');
})