
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views');




app.listen(3003);