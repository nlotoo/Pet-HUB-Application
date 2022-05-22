export const loginUserValidation = (data) => {


    let errorArr = [];


    if (data.email == '') {
        errorArr.push({ email: 'You need to type corect email' })
    }

    if (data.password == '') {
        errorArr.push({ password: 'You need to type corect password' })
    }

    if (errorArr.length > 0) {
        throw { errorMessage: errorArr }
    }


    // console.log(errorArr)




}