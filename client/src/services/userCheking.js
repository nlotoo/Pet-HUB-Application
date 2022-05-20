

export const userValidation = (data) => {


    let { username, userEmail, password, rePassword, gender } = data

    let errorArr = [];

    if (!username || !password || !userEmail || !rePassword) {
        errorArr.push("All fields are required!");
    }

    if (username.length < 4 || password.length < 4 || rePassword.length < 4 || userEmail.length < 4) {
        errorArr.push("All fields must be at least 4 characters!");
    }
    if (rePassword !== password) {
        errorArr.push('Paswwords must be equal')
    }

    if (gender === 'default' || gender == '') {
        errorArr.push('You must to choice you gender!')
    }




    if (errorArr.length > 0) {
        throw {
            errorArr
        }
    }

}





