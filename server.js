const express = require('express');
const app = express();
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./routes');
const path = require('path');
const sequelize = require('./config/connections');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const Howler = require('howler');

app.engine('handlebars', hbs.engine);



const sessionConfig = { 
  secret: 'is mayonnaise an instrument',
  cookie: {
    // maxAge is two hours
    maxAge: 7200000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};


app.use(session(sessionConfig));


const PORT = process.env.PORT || 3001;



app.set('view engine', 'handlebars');
// Express middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);




// Start server
sequelize.sync({force: false}).then(() => {
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})});