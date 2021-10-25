const express = require('express');
const router = express.Router();

/* GET Video lectures. */
router.get('/', (req, res, next)=> {
    res.json({ title: 'Get Video lecture' });
});
router.post('/create',async(req,res)=>{
    res.json({msg:"Welcome to studyhox"})
})
module.exports = router;
