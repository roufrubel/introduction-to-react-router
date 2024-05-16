import { Link } from "react-router-dom";


const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
            <Link to="/contact">Contact us</Link>
        </nav>
    );
};

export default Header;