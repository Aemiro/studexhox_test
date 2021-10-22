const express = require('express');
const router = express.Router();

/* GET Materials. */
router.get('/', (req, res, next)=> {
    res.json({ title: 'Study Materials' });
});

module.exports = router;
