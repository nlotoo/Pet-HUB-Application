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

module.exports = {
    createUser,
}