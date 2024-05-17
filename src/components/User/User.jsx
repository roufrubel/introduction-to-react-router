import { Link } from 'react-router-dom';
import './User.css';
import { useNavigate } from "react-router-dom";

const User = ({user}) => {
    const {name, id, email, phone, website} = user;

    const navigate = useNavigate();

    const clickToSeeDetails = () =>{
        navigate(`/user/${id}`);

    }
    return (
        <div className="user">
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{website}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <button onClick={clickToSeeDetails}>Click See Details</button>
        </div>
    );
};

export default User; 