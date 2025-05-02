import './Footer.css'

function Footer(){
    return(
        <footer> 
            <div className="grid-footer">
                <div className="social-media">
                    <p> Social Media: </p>
                    <a href="#"> Instagram </a>
                    <a href="#"> Facebook </a>
                </div>
                <div className="business-hour">
                    <p> Business Hours: </p>
                    <p> Sun/Sat: 10am - 10pm </p>
                    <p> Mon/Tues/Thurs: 10am - 7pm </p>
                    <p> Wed/Fri: CLOSED </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer