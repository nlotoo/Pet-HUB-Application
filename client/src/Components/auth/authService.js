const createUser = async (data) => {

    let { username, userEmail, password, gender } = data

    let obj = {
        username: username,
        userEmail: userEmail,
        password: password,
        gender: gender

    }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    };
    const url = 'http://localhost:5000/sign-up'

    let responce = await fetch(url, requestOptions)
    let result = await responce.json()
    return result




}

const loginUser = async (data) => {

    console.log(data)
    let userObj = {
        email: data.email,
        password: data.password,
    }


    try {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userObj)
        };
        const url = 'http://localhost:5000/sing-in'

        fetch(url, requestOptions)
            .then(res => res.json())
            .then(userObj => { return userObj })
            .catch(err => { console.log('error ', err); return err })

    } catch (err) {
        console.log('error', err)
    }
}

module.exports = {
    createUser,
    loginUser,
}