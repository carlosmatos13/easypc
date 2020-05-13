const express    = require('express'),
      router     = express.Router(),
      passport   = require('passport'),
      session    = require("express-session"),
      User       = require('../models/user');
      middleware = require('../middleware')

// LANDING PAGE
router.get('/', (req,res)=>{
    res.render('landing');
});
// REGISTER FROM
router.get("/register", (req,res)=> {
    res.render('register');
});
// handle sign up logic
router.post('/register', (req,res)=>{
    let newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, (err,user) => {
        if(err) {
            console.log(err);
            return res.render('register')
        }
        passport.authenticate("local")(req, res, ()=>{
            res.redirect("/build");
        });
    });
});

// show login form

router.get('/login',(req, res) => {
    res.render('login');
});

// handling login logic
router.post('/login', passport.authenticate("local", 
    {
        successRedirect: "/",
        failureRedirect: "/login",
        failureFlash: true
    }), (req,res) =>{
        req.flash("error", "Invalid username or password.")
});

// logout route
router.get('/logout', (req,res)=>{
    req.logout();
    req.flash("success", "Logged you out!")
    res.redirect('/campgrounds');
})


module.exports = router;