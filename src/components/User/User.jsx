import './User.css';

const User = ({user}) => {
    const {name, id, email, phone, website} = user;
    return (
        <div className="user">
            <h2>{name}</h2>
            <p>{id}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{website}</p>
        </div>
    );
};

export default User;