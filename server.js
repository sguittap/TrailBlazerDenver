const express        = require('express');
const app            = express();
const path           = require('path');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const session        = require('express-session')
const authController = require('./controllers/authController')
const MongoDBStore   = require('connect-mongodb-session')(session);
const cors           = require('cors');
require('dotenv').config();
require('./db/db');

const store = new MongoDBStore({
  uri: process.env.MONGODB_URI,
  collection: 'mySessions'
});
const corsOptions = {
    origin: process.env.REACT_APP_ADDRESS,
    credentials: true,
    optionsSuccessStatus: 200
};

const trailController = require('./controllers/trailController');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(express.static('css'));
app.use(express.static(path.join(__dirname, 'FrontEnd/build')));
app.use(session({ 
    saveUnitialized: true,
    secret: process.env.SESSION_SECRET,
    maxAge: 1000 * 60 * 60 * 24 * 7,
    store: store,
    resave: true,
}))

app.use((req, res, next)=> {
    res.locals.userId = req.session.userId;
    next();
});

store.on('connected', function() {
    store.client;
})
store.on('error', function(error) {
    console.log(error)
});
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/FrontEnd/build/index.html'));
});

app.use(cors(corsOptions));
app.use('/api/v1/auth', authController);

//landing page
app.use('/api/v1/trails/', trailController);

const port = process.env.PORT || 9000
app.listen(port, () => {
    console.log('listening on port 9000');
  });