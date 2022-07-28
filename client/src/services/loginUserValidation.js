export const loginUserValidation = (data) => {


    let errorArr = [];
        // eslint-disable-next-line
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (data.email === '' || !data.email.match(regexEmail) ) {
        errorArr.push('You need to type corect email');
    };

    if (data.password === '') {
        errorArr.push('You need to type corect password');
    };


    if (errorArr.length > 0) {
        // eslint-disable-next-line
        throw { errorArr };
    };

};