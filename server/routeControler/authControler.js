const { Router } = require("express");
router = Router()

const authService = require('../services/authServices.js')
const isAuth = require('../midlleware/isAuth.js')
const auth = require('../midlleware/auth.js')

router.post("/register", async(req, res) => {
    try {
        let data = await authService.createUser(req.body)
        res.status(200).json(data);

    } catch (err) {
        res.status(402).json({ message: err })
    }
});



module.exports = router