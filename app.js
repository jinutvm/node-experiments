const express = require('express');
const app = express();
const port = 4004;

app.all('*', (req,res)=>{
    res.send('Hello')
})

app.listen(port,()=>console.log(`Server is listening on port ${port}`))