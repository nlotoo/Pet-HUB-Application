

const getUserInfo = async () => {
    let user = window.localStorage.getItem('User email')
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userEmail: user })
    };


    return fetch('http://localhost:5000/user-profile', requestOptions)
        .then(response => response.json())
        .then(data => { console.log(data); return data })

}


const createPet = async (data) => {


    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };


    return fetch('http://localhost:5000/create-new-pet', requestOptions)
        .then(userObj => {
            return userObj
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
}