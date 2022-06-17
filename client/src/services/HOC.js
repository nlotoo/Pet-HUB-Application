import { isAuthorizated } from '../Components/ProfileComponents/profile.service';


const isAuthHOC = (OrgiinalComponent) => {
    return (data) => {
        isAuthorizated()
            .then(data => {
                if (data === undefined) {
                
                    window.location.replace("/login");
                }
            })
        return <OrgiinalComponent {...data} />;
    };
};

export default isAuthHOC;