const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('welcome to saurav world, Name:- SAURAV KUMAR, URN:-1805449'));
app.get('/tproute', function (req, res) {
    res.send('This is MEAN STACK Subject, which means mongodb, expressjs, angular, nodejs')});
app.listen(port, () => console.log('Express app listening on port ${port}!'));
