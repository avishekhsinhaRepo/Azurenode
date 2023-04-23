const express = require('express');
const debug = require("debug")('app:start');

const loggingMiddleWare = require('./middleware/logging-middleware');
const auth = require('./middleware/authentication');
const courses = require('./routes/courses');
const home = require('./routes/home');
const profile = require('./routes/profile');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());
app.use(express.static('public'));
app.use(loggingMiddleWare);
app.use(auth);
app.use('/api/profile', profile);
app.use('/api/courses', courses);
app.use('/', home);




app.on('timeout', (socket) => {
    console.log('timeout');
    socket.destroy();
  });
const port = process.env.PORT | 3000;
app.listen(port, () => {
    console.log(`Listening on ${port}`);
    debug("Application Running!");
});
