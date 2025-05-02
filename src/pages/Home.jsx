import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import './Home.css'
import Menu from "./menu";

function Home() {
    return(
        <>
            <Navbar />

            <div className="hero-image">
            <div className="hero-text">
                <p id="banner"> DESI DESTINATION </p>
                <p id="descript"> All of the greatest desi foods in one place </p>
                <Link to="/menu" className="button"> Check out the menu! </Link>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Home