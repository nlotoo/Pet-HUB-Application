


const createUser = (data) => {

    console.log(data)

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