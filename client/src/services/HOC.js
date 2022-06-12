import React from 'react';
import { isAuthorizated } from '../Components/ProfileComponents/profile.service';


const isAuthHOC = (OrgiinalComponent) => {
    return (data) => {
        isAuthorizated()
            .then(data => {
                if (data === undefined) {
                    console.log(data)
                    window.location.replace("/login");
                }
            })
        return <OrgiinalComponent {...data} />;
    }
}

export default isAuthHOC