import React from 'react';


const isAuthHOC = (OrgiinalComponent) => {

    return (data) => {
        
        console.log('i`m in HOC')

        return <OrgiinalComponent {...data} />;
    }
}

export default isAuthHOC