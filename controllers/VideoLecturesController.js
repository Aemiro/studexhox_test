const express = require('express');
const router = express.Router();

/* GET Video lectures. */
router.get('/', (req, res, next)=> {
    res.json({ title: 'Get Video lecture' });
});

module.exports = router;
