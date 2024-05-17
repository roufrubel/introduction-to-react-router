import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import './Home.css';


const Home = () => {
    return (
        <div className="home">
            <span>My Website </span>
            <Header></Header>

            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default Home;