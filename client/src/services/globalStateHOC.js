import React from 'react';



const globalState = (OrgiinalComponent) => {
    return (data) => {

        window.localStorage.getItem('User ID')
        console.log(window.localStorage.getItem('User ID'))
        console.log('global i')


        return <OrgiinalComponent {...data} />;
    };
};

export default globalState;