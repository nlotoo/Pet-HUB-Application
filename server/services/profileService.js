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







}


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


}


async function getUserPets(userID) {

    let { data } = userID

    let user = await User.findById({ _id: data }).populate('pets')


    return user.pets
}









module.exports = {
    createPet,
    getUserPets,
}