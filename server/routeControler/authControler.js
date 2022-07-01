const { Router } = require("express");
router = Router()

const authService = require('../services/authServices.js')
const profileService = require('../services/profileService.js')


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
        let data = await authService.loginUser(req.body)
        res.status(200).json(data);
    } catch (err) {
        console.log(err)
        res.status(401).json({ message: err });
    }

})

router.get('/user-profile/:id', async (req, res) => {

    try {

        let data = await authService.fetchProfile(req.params.id)
        res.status(200).json(data)

    } catch (err) {
        console.log(err)
        res.status(401).json({ message: err })
    }
})


router.post('/edit-pet/:id', async (req, res) => {

    try {
        let data = await profileService.EditPet(req.body, req.params)
        res.status(200).json(data)
    }
    catch (err) {
        console.log(err)
        res.status(401).json({ message: err })
    }

})

router.post('/create-new-pet', async (req, res) => {

    try {
        let data = await profileService.createPet(req.body)
        res.status(200).json(data)
    }
    catch (err) {
        console.log(err)
        res.status(401).json({ message: err })
    }

})


router.post('/delete/:id', async (req, res) => {

    try {

        let data = profileService.deleltePetFuncServerSide(req.body)
        res.status(200).json(data)
    } catch (err) {
        console.log(err)
        res.status(401).json({ message: err })
    }
});


router.post('/isAuth', async (req, res) => {
    try {


        let data = await profileService.isAuth(req.body);
        res.status(200).json(data)
    } catch (err) {
        res.status(401).json({ message: err })
    }
})


router.get('/get-all-pets', async (req, res) => {

    try {
        let data = await profileService.getAllPet();

        res.status(200).json(data);

    } catch (err) {
        console.log(err);
        res.status(401).json({ message: err });
    };


});

router.get('/get-user-pets/:id', async (req, res) => {

    try {


        let data = await profileService.getUserPets(req.params.id);
        res.status(200).json(data);

    } catch (err) {
        console.log(err);
        res.status(401).json({ message: err });
    };


});

router.get('/pet-details/:id', async (req, res) => {

    try {

        let data = await profileService.getPetDetail(req.params.id);
        res.status(200).json(data);

    } catch (err) {
        console.log(err);
        res.status(401).json({ message: err });
    };


});

router.post('/like-the-pet', async (req, res) => {

    try {


        let data = await profileService.LikeThePet(req.body)
        res.status(200).json(data)

    } catch (err) {
        console.log(err)
        res.status(401).json({ message: err })
    }
});

router.post('/dislike-the-pet', async (req, res) => {

    try {


        let data = await profileService.disLikeThePet(req.body)
        res.status(200).json(data)

    } catch (err) {
        console.log(err)
        res.status(401).json({ message: err })
    }
});

router.get('/my-favorites/:id', async (req, res) => {

    try {

        let data = await profileService.getFavorites(req.params.id)
        res.status(200).json(data)

    } catch (err) {
        console.log(err)
        res.status(401).json({ message: err })
    }

});

router.get('/search-pet/query/:id', async (req, res) => {

    try {

        let data = await profileService.getCustomPet(req.params.id)
        res.status(200).json(data)

    } catch (err) {
        console.log(err)
        res.status(401).json({ message: err })
    }

});



module.exports = router;