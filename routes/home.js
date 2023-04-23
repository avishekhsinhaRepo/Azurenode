const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'The Title', message: 'The Message' });
});
module.exports = router;

