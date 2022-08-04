const chekingWhenCreatingOrEditingElement = (data) => {
    console.log(data)

    let { petName, petWeight, petBreed, petAge, petPhoto, petInfo, petOwner } = data;


    let petObj = {
        petName: petName.toLowerCase().trim(),
        petWeight: petWeight.trim(),
        petBreed: petBreed.trim(),
        petAge: petAge.trim(),
        petPhoto: petPhoto.trim(),
        petInfo: petInfo.trim(),
        petOwner: petOwner,
    };


    let errArray = [];
    if (petName.length < 2) {
        errArray.push('Pet name is to short!');
    };

    if (petWeight < 0 || petWeight === '') {
        errArray.push('Pet weight  isn`t corect !');
    };
    if (petAge < 0 || petAge === '') {
        errArray.push('Pet age isn`t corect!');
    };
    if (petBreed.length < 2) {
        errArray.push('Pet breed name is to short!');
    };
    //eslint-disable-next-line
    let pattern = /(^| )(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,8}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g

    if (!pattern.test(petPhoto)) {
        errArray.push('Pet image url is not corect!');
    };
    if (petInfo.length > 50) {
        errArray.push('Your description is to long, should be below 50 characters!');

    };

    if (errArray.length !== 0) {
        throw errArray;
    } else {
        return petObj;
    };
};



module.exports = {
    chekingWhenCreatingOrEditingElement,
};