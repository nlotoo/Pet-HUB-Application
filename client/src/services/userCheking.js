

export const userValidation = (data) => {

    console.log(data)
    let { username, password, rePassword, gender } = data
    let errorArr = [];

    if (username.length < 4) {
        console.log('a')
        errorArr.push('username length should be more of 4')
    }
     if (password.length < 4) {
        console.log('b')

        errorArr.push('password length should be more of 4')
    }


    console.log(errorArr)
    if (errorArr.length > 0) {
        throw {
            message: errorArr
        }
    }

}




