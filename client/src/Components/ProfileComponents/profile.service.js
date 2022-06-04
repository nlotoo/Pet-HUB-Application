

const getUserInfo = async () => {
    let user = window.localStorage.getItem('User email')
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userEmail: user })
    };


    return fetch('http://localhost:5000/user-profile', requestOptions)
        .then(response => response.json())
        .then(data => { return data })

}

const createPet = async (data) => {


    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };



    return fetch('http://localhost:5000/create-new-pet', requestOptions)
        .then(res => res.json())
        .then(rs => {
            return rs
        })
        .catch(err => { console.log('error ', err); return err })


}

const getUserPets = async () => {

    let userId = window.localStorage.getItem('User ID')


    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: userId })
    };

    return fetch('http://localhost:5000/pets-catalog', requestOptions)
        .then(res => res.json())
        .then(response => {
            return response
        })
        .catch(err => { console.log('error ', err); return err })




}




// const requestOptions = {
//     method: 'GET',
// };
// const url = 'http://localhost:5000/user-profile'


// return fetch(url, requestOptions)
//     .then(res => res.json())
//     .then(userObj => {

//         console.log(userObj)

//         return userObj
//     })
//     .catch(err => { console.log('error ', err); return err })}



module.exports = {
    getUserInfo,
    createPet,
    getUserPets,
}