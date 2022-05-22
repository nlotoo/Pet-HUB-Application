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
    try {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        const url = 'http://localhost:5000/sing-in'

        let responce = await fetch(url, requestOptions)
        let result = await responce.json()
        return result

    } catch (err) {
        console.log('loginUser INSIDE error')
        console.log(err)
    }
}

module.exports = {
    createUser,
    loginUser,
}