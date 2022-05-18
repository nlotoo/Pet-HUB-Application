

export const userValidation = (data) => {

    console.log(data)
    let { username, email, password, rePassword, gender } = data

    let errorArr = [];

    if (!username || !password || !email || !rePassword) {
        errorArr.push("All fields are required!");
    }

    if (username.length < 4 || password.length < 4 || rePassword.length < 4 || email.length < 4) {
        errorArr.push("All fields must be at least 4 characters!");
    }
    if (rePassword !== password) {
        errorArr.push('Paswwords must be equal')
    }
    if (gender == 'default') {
        errorArr.push('You must to choice you gender')

    }



    if (errorArr.length > 0) {
        throw {
            message: errorArr
        }
    }

}




