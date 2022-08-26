const express = require('express');
const app = express();

// until fe and be are running on same port
const cors = require('cors');

app.use(cors());

const connectDB = require('./config/database');
const homeRoutes = require('./routes/home');

require('dotenv').config({path: './config/.env'}) //notice need path now bc not at root

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes) //the router file that handles all home routes. line 4
 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    