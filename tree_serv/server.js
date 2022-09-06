const express = require('express');
const app = express();

const path =  __dirname +'/views/';

// until fe and be are running on same port
const cors = require('cors');

app.use(cors());

const connectDB = require('./config/database');
const homeRoutes = require('./routes/home');

require('dotenv').config({path: './config/.env'}) //notice need path now bc not at root

connectDB()

app.use(express.static(path))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes) //the router file that handles all home routes. line 4
 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running one port ahead')
})    