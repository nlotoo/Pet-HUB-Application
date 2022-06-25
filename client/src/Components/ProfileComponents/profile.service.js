
const isLiked = async (data) => {
    console.log(data)

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };




    return fetch(`http://localhost:5000/like-the-pet`, requestOptions)
        .then(res => res.json())
        .then(rs => {
            return rs;
        })
        .catch(err => { console.log('error ', err); return err });


};


const unLiked = async (data) => {
    console.log(data)

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };




    return fetch(`http://localhost:5000/dislike-the-pet`, requestOptions)
        .then(res => res.json())
        .then(rs => {
            return rs;
        })
        .catch(err => { console.log('error ', err); return err });


};



const createPet = async (data) => {


    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };




    return fetch('http://localhost:5000/create-new-pet', requestOptions)
        .then(res => res.json())
        .then(rs => {
            console.log(rs)
            return rs;
        })
        .catch(err => { console.log('error ', err); return err });


};

const editPetSubmit = async (data, petID) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };


    return fetch(`http://localhost:5000/edit-pet/${petID.id}`, requestOptions)
        .then(res => res.json())
        .then(rs => {

            return rs;
        })
        .catch(err => { console.log('error ', err); return err });


};

const getUserPets = async () => {

    let userId = window.localStorage.getItem('User ID');


    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: userId })
    };

    return fetch('http://localhost:5000/pets-catalog', requestOptions)
        .then(res => res.json())
        .then(response => {
            return response;
        })
        .catch(err => { console.log('error ', err); return err });




};

const deleltePetFunc = async (petCardId) => {


    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ petID: petCardId })
    };


    fetch(`http://localhost:5000/pets-delete`, requestOptions)
        .then(res => res.json())
        .then(response => {
            return response;
        })
        .catch(err => { console.log('error', err); return err });




};

const isAuthorizated = async () => {
    let userID = window.localStorage.getItem('User ID');

    if (userID == null) {
        return;
    };

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userID: userID })
    };


    return fetch('http://localhost:5000/isAuth', requestOptions)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(err => console.log(err));

};
const getPetInfo = async (petID) => {


    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(petID)
    };

    return fetch('http://localhost:5000/pet-info', requestOptions)
        .then(res => res.json())
        .then(response => {
            return response;
        })
        .catch(err => { console.log('error ', err); return err });

}




module.exports = {
    isLiked,
    createPet,
    getUserPets,
    deleltePetFunc,
    isAuthorizated,
    editPetSubmit,
    unLiked,
    getPetInfo,
};