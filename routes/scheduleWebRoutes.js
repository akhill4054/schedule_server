const path = require('path');
const express = require('express');

const router = express.Router();

router.get('^/$|^/home$' , (req , res)=>{
    console.log(__dirname);
    res.sendFile('./views/index.html', {root: path.join(__dirname, '..')});
 })

 module.exports = router;