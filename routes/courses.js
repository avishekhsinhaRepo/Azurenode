const express = require('express');
const router = express.Router();
const routingDebug = require("debug")('app:router');
const courses = [
    { id: 1, name: 'Node' },
    { id: 2, name: 'Java' },
    { id: 3, name: 'C++' }
];
router.get('/', (req, res) => {
    res.send(JSON.stringify(courses));
});

router.get('/:id', (req, res) => {
    const course = courses.filter(course => course.id == req.params.id);
    if (course.length == 0) {
        res.status(404);
        res.send("Course Not Found");
    }
    routingDebug(course);
    res.send(JSON.stringify(course));
});

router.post('/', (req, res) => {
    course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
});
module.exports = router;