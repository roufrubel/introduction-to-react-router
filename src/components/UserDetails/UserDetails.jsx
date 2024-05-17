import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, website} = user;
    const navigate = useNavigate();

    const handleGoBack = () =>{
        navigate(-1);
    }
   

    return (
        <div>
            <h4>User Details</h4>
            <h4>{name}</h4>
            <p>{website}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default UserDetails;