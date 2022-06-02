const chekingWhenCreatingElement = (data) => {

    let { petName, petWeight, petBreed, petAge, petPhoto, petInfo } = data

    console.log(petName, petWeight, petBreed, petAge, petPhoto, petInfo)

    let errArray = [];
    if (petName.length < 2) {
        errArray.push({ petName: 'pet name is to short' })
    }

    if (petWeight < 0) {
        errArray.push({ petWeight: 'pet weihgt is incorect' })
    }
    if (petAge < 0) {
        errArray.push({ petAge: 'pet age is incorect' })
    }
    if (petBreed.length < 2) {
        errArray.push({ petBreed: 'pet breed name is to short' })
    }

    let pattern = /(^| )(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,8}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g

    if (!pattern.test(petPhoto)) {
        errArray.push({ petPhoto: 'pet image url is not corect' })
    }
    if (petInfo.length > 50) {
        errArray.push({ petInfo: 'you description is to long' })

    }

    if (errArray.length !== 0) {
        throw errArray
    }
}



module.exports = {
    chekingWhenCreatingElement,
}