const Pet = require('../schemes/PET.js')


async function createPet(data) {

    let { petName, petWeight, petBreed, petAge, petPhoto, petInfo, petOwer } = data


    console.log(data)
    // let result = new Pet(data)

    return data
}



module.exports = {
    createPet,
}