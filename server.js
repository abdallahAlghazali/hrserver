const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodypqrser = require('body-parser');
const path = require('path');

const connectDB = require('./server/database/connection');


const app = express();

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080

app.use(morgan("tiny"));

connectDB();

app.use(bodypqrser.urlencoded({extended: true}))

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.engine('ejs', require('ejs').__express);


app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))


app.use('/', require('./server/routes/router'))

app.listen(3000,()=> {console.log(`Server is lestining on http://localhost:${PORT}`);})