

export const userValidation = (data) => {


    let { username, userEmail, password, rePassword, gender, location, userPhoneNumber } = data;


    let errorArr = [];

    let pattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/;

    if (!pattern.test(userEmail)) {
        errorArr.push("Your email is incorect: example@example.exapmle");
    };


    if (!username || !password || !userEmail || !rePassword) {
        errorArr.push("All fields are required!");
    };

    if (username.length < 4 || password.length < 4 || rePassword.length < 4 || userEmail.length < 4 || location.length < 4) {
        errorArr.push("All fields must be at least 4 characters!");
    };

    const regexPhoneNumber = /^((\+)44|0)[1-9](\d{2}){4}$/;
    if (!regexPhoneNumber.test(userPhoneNumber)) {
        errorArr.push(`Corect format for the phone number is +44123456789`);

    };
    if (rePassword !== password) {
        errorArr.push('Paswwords must be equal');
    };

    if (gender === 'default' || gender === '') {
        errorArr.push('You must to choice you gender!');
    };




    if (errorArr.length > 0) {
        // eslint-disable-next-line
        throw { errorArr }
    };

};





