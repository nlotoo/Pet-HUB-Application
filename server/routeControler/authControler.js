const { Router } = require("express");
router = Router()

const authService = require('../services/authServices.js')
const isAuth = require('../midlleware/isAuth.js')
const auth = require('../midlleware/auth.js')

router.post('/sign-up', async (req, res) => {
    try {
        let data = await authService.CreateUser(req.body)
        res.status(200).json(data);
    }
    catch (err) {
        res.status(401).json({ message: err });
    }
})


router.post('/sing-in', async (req, res) => {

    try {
        let data = await authService.CreateUser(req.body)
        res.status(200).json(data);


    } catch (err) {
        res.status(401).json({ message: err });
    }

})



module.exports = router