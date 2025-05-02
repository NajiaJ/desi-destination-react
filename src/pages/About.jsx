import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './Home.css'
import './About.css'

function About() {
    return(
        <>
            <Navbar />

            <h2 id="about-title"> WHO ARE WE? </h2>

            <div className="about-store">
                <p> Desi Destination was created by people who miss their parents cooking and their homeland. </p>
                <p>
                    It's very comforting to come home after a long day to smell something so good in the kitchen you honestly
                    cannot wait to chow down.
                </p>
                <p> But, for people who can't experience that feeling whether they are living abroad or they don't have anybody to cook for them.
                    Desi Destination is a place where you can experience it all.
                </p>
            </div>

            <h2 id="special-dish"> Special Dishes </h2>

            <div className="about-dishes">
                <p id="dish-1">
                    Our most famous dish is the biriyani platters; full of rice and your protein of choice: chicken, beef or goat!
                </p>
                <p id="dish-1"> 
                    This is defintely one of those dishes that makes you want to get another plate but can't because you're still full from
                    that first plate.
                </p>

                <p> ------------- </p>

                <p id="dish-2">
                    After a good plate of rice and meat and downing it all with a refreshing can of soda, we recommend kalojam afterwards as a nice
                    palette cleanser.
                </p>
                <p id="dish-2"> 
                    It's very sweet and juicy, very refreshing and well deserved before the food coma nap you'll take after eating our food!
                </p>

            </div>

            <Footer />
        </>
    )
}

export default About