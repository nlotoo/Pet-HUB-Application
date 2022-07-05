export const loginUserValidation = (data) => {


    let errorArr = [];


    if (data.email === '') {
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