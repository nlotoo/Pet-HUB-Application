const User = require('../schemes/USER.js');
const bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');
const { SALT_ROUNDS, JWT_SECRET } = require('../config/config.js');




async function CreateUser(data) {



    let { username, password, userEmail, gender, location, userPhoneNumber } = data


    let obj = {
        username: username.toLowerCase().trim(),
        password: password.toLowerCase().trim(),
        userEmail: userEmail.toLowerCase().trim(),
        gender: gender.toLowerCase().trim(),
        location: location.toLowerCase().trim(),
        userPhoneNumber: userPhoneNumber.trim()
    }

    let emailUserExist = await User.findOne({ userEmail: obj.userEmail })
    let userNameExist = await User.findOne({ username: obj.username })


    let pattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/;

    if (!pattern.test(userEmail)) {
        throw 'Your email is incorect: example@example.exapmle';
    }

    if (userNameExist) {
        throw "This username is  exist"
    }
    if (emailUserExist) {
        throw "This email is exist"
    }

    emailUserExist = ''
    userNameExist = ''
    if (obj.location.length < 3) {
        throw new Error('Location name is to short!')
    }

    if (obj.username.length < 5) {
        throw new Error('User name is to short!')
    }

    if (obj.password.length < 6) {
        new Error('User password is to short!')
    }

    if (obj.gender === 'default' || obj.gender == '') {
        new Error('You must to choice you gender!')
    }


    const hash = bcrypt.hashSync(password.trim(), SALT_ROUNDS);

    obj.password = hash

    let newUserData = new User(obj)

    return newUserData.save()
};
async function loginUser(data) {


    let { email, password } = data;
    let user = await User.find({ userEmail: email }).exec();




    if (user.length == 0) {
        throw 'Incorect User';
    }

    itTrue = bcrypt.compareSync(data.password, user[0].password)


    if (!itTrue) {
        throw 'Incorect email or password'
    }

    let token = jwt.sign({ 'email': email, 'id': user[0]._id, }, JWT_SECRET);


    let localStorageObj = {
        'userEmail': `${user[0].userEmail}`,
        'userID': user[0]._id,
        'token': token,
    }

    return localStorageObj
};
async function fetchProfile(data) {


    return await User.findById({ _id: data })
};




module.exports = {
    CreateUser,
    loginUser,
    fetchProfile,
};