import React from "react";
import './Footer.css'
import logo from '../../Assets/images/logo.png'


function Footer() {
  return (
    <>
   <section className="newsletter">
        <div className="news-content">
            <h6>Beauty tips and tricks delievered straight to your inbox</h6>
            <div className="inbox">
                <h1>Subscribe to our <span style={{color:'red'}}>Newsletter</span></h1>
            </div>
            <div className="email">
                <div className="inputfield">
                    <input type="email" name="" id="" className="email-input" placeholder="Enter Your Email"/>
                    
                        
                </div>
            </div>
        </div>
    </section>
    <footer className="Footer">
        <div className="content-div">
            <div className="footer-content">
                <img src={logo} alt="/" />
            </div>
            <div>
                <ul className="content-list">
                    <a href="/" className="li first"><li className="content-list-item">About us</li></a>
                    <a href="/" className="li second"><li className="content-list-item">Contact Us</li></a>
                    <a href="/" className="li first"><li className="content-list-item">Privacy Policy</li></a>
                    <a href="/" className="li second"><li className="content-list-item">Terms of Services</li></a>
                    <a href="/" className="li first"><li className="content-list-item">FAQs</li></a>
                </ul>
            </div>
            <div>
                <ul className="social-links">
                    <a href="/" className="li"><li className="social-link"><ion-icon name="logo-twitter"></ion-icon></li></a>
                    <a href="/" className="li"><li className="social-link"><ion-icon name="logo-linkedin"></ion-icon></li></a>
                    <a href="/" className="li"><li className="social-link"><ion-icon name="logo-instagram"></ion-icon></li></a>
                    <a href="/" className="li"><li className="social-link"><ion-icon name="logo-youtube"></ion-icon></li></a>
                </ul>
            </div>           
            <div className="border"></div>
            <div className="copyright">
                <h5>Copyright © 2023 Viprom Technologies LLP Technologies All rights reserved</h5>
                <ul className="list">
                    <li>Disclamer</li>
                    <li> Refund and Cancellation</li>
                </ul>
            </div>
        </div>
    </footer>
    </>
  );
}

export default Footer;
