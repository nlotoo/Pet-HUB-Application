


const createUser = async (data) => {

    let { username, password, rePassword, userEmail, phoneNumber } = data

    if (username?.length < 5) {
        throw new Error('User name is to short')
    }

    if (password?.length < 6) {
        throw new Error('User password is to short')
    }
    if (password !== rePassword) {
        throw new Error('Passwords must be equal')
    }

    //eslint-disable-next-line
    let pattern = new RegExp(/[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/)

    if (!userEmail?.match(pattern)) {
        throw new Error('Please write corect email')
    }
    //eslint-disable-next-line
    let phonePattern = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/g

    if (phoneNumber?.match(phonePattern)) {
        throw new Error('Please write corect phone number')
    }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    fetch('http://localhost:5000/sign-up', requestOptions)
        .then(response => response.json())
        .then(data => { console.log(data) });


}

module.exports = {
    createUser,
}