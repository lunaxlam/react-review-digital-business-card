import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

function Main() {
    return(
        <main>
            <div className="main--heading">
                <h1 className="main--name">Luna Lam</h1>
                <h3 className="main--title">Software Engineer</h3>
            </div>
            <div className="main--contact">
                <a href="#"><button className="main--button main--button_email">
                    <FaEnvelope />
                    <span className="main--button_text">Email</span>
                </button></a>
                <a href="https://www.linkedin.com/in/lunalam/"><button className="main--button main--button_li">
                    <FaLinkedinIn className="main--linkedin_icon" />
                    <span className="main--button_text main--button_text_li">LinkedIn</span>
                </button></a>
            </div>
            <div>
                <h2>About</h2>
                <p>
                    I love harnessing the power of software engineering to translate
                    effective and sustainable business solutions into code. I am passionate
                    about improving the user experience and championing customer success.

                    <br/ ><br />
                    Colleagues and clients alike say that I am a skilled communicator who
                    excels at managing projects and competing priorities in a high-volume
                    environment. I also boast a stellar track record of high customer
                    engagement and satisfacation.
                </p>
            </div>
            <div>
                <h2>Interests</h2>
                <ul>
                    <li>Animal Welfare</li>
                    <li>Civil Rights and Social Action</li>
                    <li>Education</li>
                    <li>Environmental Sustainability</li>
                    <li>Disaster and Humanitarian Relief</li>
                </ul>
            </div>
        </main>
    )
}

export default Main;