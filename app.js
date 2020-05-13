const express       = require('express'),
      app           = express(),
      bodyParser    = require('body-parser'),
      mongoose      = require("mongoose"),
      flash         = require('connect-flash'),
      passport      = require('passport'),
      session       = require("express-session"),
      LocalStrategy = require('passport-local'),
      methodOverride= require('method-override'),
      User          = require('./models/user'),
      seedDB        = require("./seed");


// ROUTES 
const indexRoutes = require('./routes/index'),
      buildRoutes = require('./routes/build')

mongoose.connect("mongodb://localhost:27017/easypc", {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "pug");
app.use(express.static(__dirname + '/public'));
app.use(methodOverride("_method"));
app.use(flash());
app.use(session({ 
    secret: "juan es un marico",
    resave: false,
    saveUninitialized: false 
}));
// seedDB();

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use((req,res, next) => {
    res.locals.currentUser = req.user;
    next();
});
// INDEX PAGE
app.use("/", indexRoutes);
app.use("/build", buildRoutes);

// LISTEN
app.listen(4000, (req,res)=>{
    console.log("server is running on port 4000");
}); 