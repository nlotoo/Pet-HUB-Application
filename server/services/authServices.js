const User = require('../schemes/USER.js');
const bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');
const { SALT_ROUNDS, JWT_SECRET } = require('../config/config.js');


// async function createUser(data) {

//     let { email, password } = data;

//     let user = await User.findOne({ email: email })
//     if (user) {
//         throw "User Exist"
//     }

//     const hash = bcrypt.hashSync(password.trim(), SALT_ROUNDS);

//     let pattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/;

//     if (!pattern.test(email)) {
//         throw 'This email is incorect';
//     }

//     if (password.length < 2) {
//         throw 'Incorect password';
//     }

//     const userObj = new User({
//         email: email.trim(),
//         password: hash,
//     });

//     userObj.save();


//     if (userObj) {
//         let inscriptionData = inscription(userObj);
//         return inscriptionData;
//     } else {
//         throw 'Something is wrong'
//     }
// }
// async function loginUser(data) {

//     let { email, password } = data;
//     let user = await User.findOne({ email });



//     if (!user) {
//         throw 'Incorect User';
//     }
//     itTrue = bcrypt.compareSync(data.password, user.password)

//     if (!itTrue) {
//         throw 'Incorect email or password'
//     }

//     // let token = jwt.sign({ 'email': email, 'id': user._id, }, JWT_SECRET);


//     // let inscriptionData = inscription(user, email)
//     // return inscriptionData
//         // return { token, userId: user._id, email: user.email };
// }

async function CreateUser(data) {



    let { username, password, userEmail, gender } = data


    let obj = {
        username: username.toLowerCase().trim(),
        password: password.toLowerCase().trim(),
        userEmail: userEmail.toLowerCase().trim(),
        gender: gender.toLowerCase().trim(),
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
    else if (emailUserExist) {
        throw "This email is exist"
    }

    emailUserExist = ''
    userNameExist = ''

    if (obj.username.length < 5) {
        throw new Error('User name is to short!')
    }

    if (obj.password.length < 6) {
        new Error('User password is to short!')
    }

    if (obj.gender === 'default' || obj.gender == '') {
        new Error('You must to choice you gender!')
    }




    let newUserData = new User(obj)


    return newUserData.save()
}




module.exports = {
    CreateUser
};