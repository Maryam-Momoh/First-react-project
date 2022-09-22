import "../pages/Footer.css";
import { Link } from "react-router-dom";
import "../Button";


const Footer = () => {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the adventure newsletter to receive our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your E-mail" className="footer-input" />
                        <button className="btn btn--outline btn--medium"> Subscribe</button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/news-letter'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Career</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service </Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Career</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service </Link>
                    </div>
                </div>

                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/news-letter'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Career</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service </Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Career</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service </Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link className="social-logo">
                            TRVL <i className="fab fa-typo3" />
                        </Link>
                    </div>
                    <small className="wecsite-rights">TRVL  2020</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                            to="/"
                            target="_blank"
                            aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </Link>

                        <Link className="social-icon-link instagram"
                            to="/"
                            target="_blank"
                            aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </Link>
                   
                        <Link className="social-icon-link youtube"
                        to="/"
                        target="_blank"
                        aria-label="Youtube">
                            <i className="fab fa-youtube"></i>
                        </Link>
             
                        <Link className="social-icon-link pinterest"
                        to="/"
                        target="_blank"
                        aria-label="Pinterest">
                            <i className="fab fa-pinterest"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
