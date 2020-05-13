const express     = require('express'),
      router      = express.Router(),
      CPU         = require('../models/cpu'),
      GPU         = require('../models/gpu'),
      Case        = require('../models/case'),
      Memory      = require('../models/memory'),
      Motherboard = require('../models/motherboard'),
      Storage     = require('../models/storage'),
      PowerSupply = require('../models/power'),
      Build       = require('../models/build'),
      middleware  = require('../middleware')
// INDEX 
router.get("/",middleware.isLoggedIn, async (req,res)=>{
    Build.find({"user.id":req.user._id}).
    populate('cpu').
    populate('gpu').
    populate('case').
    populate('memory').
    populate('motherboard').
    populate('power').
    populate('storage').exec((err,findBuild)=>{
        if(err) {
            console.log(err)
        } else {
            console.log(findBuild)
            res.render("build/index",{builds: findBuild});
        }
    });
}); 

// NEW BUILD 
router.get("/new", middleware.isLoggedIn, async (req, res) =>{
    const cpu = await getObj(CPU);
    const gpu = await getObj(GPU);
    const pcCase = await getObj(Case);
    const memory = await getObj(Memory);
    const motherboard = await getObj(Motherboard);
    const storage = await getObj(Storage);
    const power = await getObj(PowerSupply);
    res.render("build/new", {
        cpu: cpu,
        gpu: gpu,
        pcCase: pcCase,
        memory: memory,
        motherboard: motherboard,
        storage: storage,
        power: power,
    });
});
async function getObj(query) {
    const objeto = query.find({})
    return objeto;
};

// CREATE NEW BUILD
router.post("/", middleware.isLoggedIn, (req,res)=>{
    let build = {
        cpu: req.body.cpu,
        gpu: req.body.gpu,
        memory: req.body.memory,
        pcCase: req.body.case, 
        motherboard: req.body.motherboard,
        power: req.body.power,
        storage: req.body.storage,
        user: {
            id: req.user._id,
            username: req.user.username
        }
    };
    Build.create(build, (err, newBuild) =>{
        if(err){
            console.log(err)
        } else {
        res.redirect("/build")
        }
    });
});


module.exports = router;