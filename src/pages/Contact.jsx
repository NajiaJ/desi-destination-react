import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './Home.css'
import './Contact.css'

function Contact() {
    return(
        <>
            <Navbar />

            <div className="row">
                <div className="column">
                    <h2>Find Us Here!</h2>
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.735596139715!2d-73.96710402397149!3d40.76783977138532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258eb899f0889%3A0xb5e90aa7d877ee1f!2sHunter%20College!5e0!3m2!1sen!2sus!4v1741290883669!5m2!1sen!2sus" 
                        width="600" 
                        height="450" 
                        style= {{border:0}}
                        allowFullScreen=""
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
            </div>
            <div className="column">
                <h2>Contact Us!</h2>
                <form className="contact-form">
                    <label htmlFor="name">Name:</label><br />
                    <input type="text" id="name" name="name" /><br />

                    <label htmlFor="email">Email Address:</label><br />
                    <input type="email" id="email" name="email" /><br />

                    <label htmlFor="message">Message:</label><br />
                    <textarea id="message" name="message" /><br /><br />

                    <input type="submit" value="Submit" />
                </form>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Contact