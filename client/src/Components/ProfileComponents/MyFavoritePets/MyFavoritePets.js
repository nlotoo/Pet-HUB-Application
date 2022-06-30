import { useFetch } from "../../../services/useFetch";
const MyFavorite = () => {

    const userID = localStorage.getItem('User ID')

    const url = `http://localhost:5000/my-favorites/${userID}`;
    let petFavorites = useFetch(url)

    console.log(petFavorites)

    return (
        <h2>Favorite Page</h2>
    );
};


export default MyFavorite