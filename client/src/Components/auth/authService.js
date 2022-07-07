export const createUser = async (data) => {

    let { username, userEmail, password, gender, location, userPhoneNumber } = data;

    let obj = {
        username: username,
        userEmail: userEmail,
        password: password,
        location: location,
        gender: gender,
        userPhoneNumber: userPhoneNumber

    };

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    };
    const url = 'http://localhost:5000/sign-up'




    return fetch(url, requestOptions)
        .then(res => res.json())
        .then(userObj => {
            return userObj;
        })
        .catch(err => { console.log('error ', err); return err })



};

export const loginUser = async (data) => {

    let userObj = {
        email: data.email,
        password: data.password,
    };



    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userObj)
    };
    const url = 'http://localhost:5000/sing-in';


    return fetch(url, requestOptions)
        .then(res => res.json())
        .then(userObj => {

            return userObj;
        })
        .catch(err => { console.log('error ', err); return err })


};

// module.exports = {
//     createUser,
//     loginUser,
// };