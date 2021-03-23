import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'


export const Footer = () => {
    return (
        <footer class="site-footer">
            <div class="container">
                <div class="row pt-5">
                    <div class="col-lg-4">
                        <div class="mb-5">
                            <h3 class="footer-heading mb-4">Fance Real Estate</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe pariatur reprehenderit vero atque, consequatur id ratione, et non dignissimos culpa? Ut veritatis, quos illum totam quis blanditiis, minima minus odio!</p>
                        </div>
                    </div>

                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <div class="row mb-5">
                            <div class="col-md-12">
                                <h3 class="footer-heading mb-4">Navigations</h3>
                            </div>
                            <div class="col-md-6 col-lg-6">
                                <ul class="list-unstyled">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/headImageCarousel">Buy</Link></li>
                                    <li><Link to="#">Rent</Link></li>
                                    <li><Link to="#">Properties</Link></li>
                                </ul>
                            </div>
                            <div class="col-md-6 col-lg-6">
                                <ul class="list-unstyled">
                                    <li><Link to="#">About Us</Link></li>
                                    <li><Link to="/privacy">Privacy Policy</Link></li>
                                    <li><Link to="#">Contact Us</Link></li>
                                    <li><Link to="#">Terms</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h3 class="footer-heading mb-4">Follow Us</h3>
                        <div>
                            <a href="https://www.facebook.com/" target="_blank" class="pl-0 pr-3"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="https://twitter.com" target="_blank" class="pl-3 pr-3"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="https://www.linkedin.com" target="_blank" class="pl-3 pr-3"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                    </div>


                </div>
            </div>

        </footer>

    );
}