import { useNavigate } from 'react-router-dom';
import './search-box.css'

import { useContext } from 'react';
import { UserContext } from '../../services/UserContex';


const SearchBox = () => {

    const navigate = useNavigate();
    let { setValue } = useContext(UserContext);

    const SubmitHandler = (e) => {
        e.preventDefault()
        let value = e.target.txt.value
        setValue(value)
        e.target.txt.value = ''
        navigate('/get-all-pets')

    }


    return (
        <div className="box">
            <form name="search" onSubmit={SubmitHandler}>
                <input type="text" placeholder='Search your pet by name' className="input" name="txt" />
            </form>
            <i className="fas fa-search"></i>

        </div>
    );
};

export default SearchBox;