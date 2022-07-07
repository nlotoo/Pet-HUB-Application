
export const isLiked = async (data) => {

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


export const unLiked = async (data) => {

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

export const createPet = async (data) => {


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

export const editPetSubmit = async (data, petID) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };


    return fetch(`http://localhost:5000/edit-pet/${petID}`, requestOptions)
        .then(res => res.json())
        .then(rs => {

            return rs;
        })
        .catch(err => { console.log('error ', err); return err });


};

export const deleltePetFunc = async (petCardId) => {


    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ petID: petCardId })
    };


    fetch(`http://localhost:5000/delete/${petCardId}`, requestOptions)
        .then(res => res.json())
        .then(response => {
            return response;
        })
        .catch(err => { console.log('error', err); return err });




};

export const isAuthorizated = async () => {
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






// module.exports = {
//     isLiked,

//     deleltePetFunc,
//     isAuthorizated,
//     editPetSubmit,
//     unLiked,
 
// };