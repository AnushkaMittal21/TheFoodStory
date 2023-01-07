require('dotenv').config();
const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('express-flash');
const MongoDbStore = require('connect-mongo')

const app = express();
const port = process.env.PORT || 3000;
const static_path = path.join(__dirname, './public');

app.use(express.static(static_path));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/restaurant", {useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log('Database Connected');
});

/*let mongoStore = new MongoDbStore ({
    mongooseConnection: connection,
    collection: 'sessions'
})*/

app.get('/pasta', (req,res)=>{
    res.render("pasta");
});

app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoDbStore.create({
        mongoUrl:"mongodb://localhost:27017/restaurant",
    }),
    cookie: {maxAge: 1000*60*60*24}
}))

app.use(flash())

require('./routes/web')(app)

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})