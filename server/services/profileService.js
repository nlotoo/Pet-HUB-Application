const Pet = require('../schemes/PET.js')
const User = require('../schemes/USER.js')


async function createPet(data) {

    let { petName, petWeight, petBreed, petAge, petPhoto, petInfo, petOwner } = data


    try {

        if (petName.length < 2) {
            throw 'Pet name is to short'
        }

        if (petWeight < 0 || petWeight === '') {
            throw 'Pet weight  isn`t corect!'
        }
        if (petBreed.length < 2) {
            throw 'Pet breed  isn`t corect!'
        }
        if (petAge < 0 || petAge === '') {
            throw 'Pet age  isn`t corect!'
        }

        let pattern = /(^| )(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,8}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g

        if (!pattern.test(petPhoto)) {
            throw 'Pet image url is not corect!'
        }

        if (petInfo.length > 50) {
            throw 'Your description is to long, should be below 50 characters!'

        }
        let petMaster = await User.findById({ _id: petOwner })

        let newPetDocument = new Pet(data)
        petMaster.pets.push(newPetDocument._id)
        petMaster.save()




        let resulta = await populateAllPets(petOwner, petName)

        if (resulta) {
            throw 'This pet name exist!'
        }
        return newPetDocument.save()
    } catch (err) {
        console.log(err)
        return { errorMessage: err }
    }







};
async function populateAllPets(petOwner, petName) {



    let populatVar = await User.findById({ _id: petOwner })
        .populate('pets')

    let petsArray = populatVar.pets
    let existName = undefined
    for (let index = 0; index < petsArray.length; index++) {

        let element = petsArray[index];

        if (element.petName == petName) {
            return existName = petName
        }

    }
    return existName


};
async function getUserPets(userID) {

    let user = await User.findById({ _id: userID }).populate('pets')
    return user.pets
};

async function deleltePetFuncServerSide(data) {

    return await Pet.findOneAndDelete({ _id: data.petID })
};

async function isAuth(data) {

    let { userID } = data;
    try {
        let user = await User.findById({ _id: userID })
        return user
    } catch (err) {
        return console.log('You don`t have authorization !')
    }

};

async function EditPet(data, petID) {

    let { petName, petWeight, petBreed, petAge, petPhoto, petInfo, } = data;



    if (petName.length < 2) {
        throw 'Pet name is to short';
    };

    if (petWeight < 0 || petWeight === '') {
        throw 'Pet weight  isn`t corect!';
    };
    if (petBreed.length < 2) {
        throw 'Pet breed  isn`t corect!';
    };
    if (petAge < 0 || petAge === '') {
        throw 'Pet age  isn`t corect!';
    };

    let pattern = /(^| )(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,8}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g

    if (!pattern.test(petPhoto)) {
        throw 'Pet image url is not corect!';
    };

    if (petInfo.length > 50) {
        throw 'Your description is to long, should be below 50 characters!';

    };






    let updatePet = await Pet.findOne({ _id: petID.id }, petName)

    let newPetInfo = {
        petName,
        petWeight,
        petBreed,
        petAge,
        petPhoto,
        petInfo,

    };

    await Pet.updateOne({ _id: petID.id }, newPetInfo);

    updatePet.save();
    let result = await Pet.findById({ _id: petID.id });

    return result;
};

async function getAllPet() {



    let user = await Pet.find({})


    return user
};

async function getPetDetail(petID) {

    let petDetail = await Pet.findById({ _id: petID })


    return petDetail;
};


async function LikeThePet(data) {


    let petDetail = await Pet.findById({ _id: data.id })
    let userDetails = await User.findById({ _id: data.userID })

    if (petDetail.petLikes.find((a) => a == data.userID)) {
        throw 'this user is liked the pet';
    }

    petDetail.petLikes.push(data.userID)
    userDetails.liked.push(data.id)

    await petDetail.save()
    await userDetails.save()


    return petDetail
};


async function disLikeThePet(data) {


    let petDetail = await Pet.findById({ _id: data.id })
    let userDetails = await User.findById({ _id: data.userID })

    let filteredResult = petDetail.petLikes.filter(uerID => {
        return uerID != data.userID
    })

    let filteredResultUserDetails = userDetails.liked.filter(likedPetId => {

        return likedPetId != data.id
    })

    await Pet.updateOne({ _id: data.id }, { petLikes: filteredResult })
    await User.updateOne({ _id: data.userID }, { liked: filteredResultUserDetails })

    userDetails.save()
    petDetail.save();

    return petDetail
};

async function getFavorites(id) {
    let data = await User.findById({ _id: id }).populate('liked')
    return data.liked
};

async function getCustomPet(petQuery) {

    let result = await Pet.find({ petName: petQuery });
    return result
};









module.exports = {
    disLikeThePet,
    createPet,
    getUserPets,
    deleltePetFuncServerSide,
    isAuth,
    EditPet,
    getAllPet,
    getPetDetail,
    LikeThePet,
    getFavorites,
    getCustomPet,
};