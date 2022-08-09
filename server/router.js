const { Router } = require("express");
const router = Router();

const Controler = require('./routeControler/Controler.js');

router.use('/', Controler);


module.exports = router;