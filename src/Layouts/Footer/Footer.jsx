import React from "react";
import './Fotter.css'
import {Helmet} from "react-helmet";

function Footer() {
  return (
    <>
    <Helmet>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </Helmet>
   <section class="newsletter">
        <div class="news-content">
            <h6 style={{fontSize:'15px'}} >Beauty tips and tricks delievered straight to your inbox</h6>
            <div class="inbox">
                <h1>Subscribe to our <span style={{color:'red'}}>Newsletter</span></h1>
            </div>
            <div class="email">
                <div class="input-group mb-3 w-75">
                    <input type="text" class="form-control" placeholder="Enter Your Email"
                        aria-label="Enter Your Email" aria-describedby="basic-addon2" />
                    <a href="/"><span class="input-group-text bg-dark text-white" id="basic-addon2" style={{borderRadius: '100%', cursor: 'pointer'}}><ion-icon name="chevron-forward-outline" style={{fontSize:'2rem'}}></ion-icon></span></a>
                </div>
            </div>
        </div>
    </section>
    <footer class="Footer">
        <div class="content-div">
            <div class="footer-content">
            <img src={"./footer-img.jpeg"} alt="" style={{width:'180px',height:'50px'}} />  
            </div>
            <div>
                <ul class="content-list">
                    <a href="/" class="li"><li class="content-list-item">About us</li></a>
                    <a href="/" class="li"><li class="content-list-item">Contact Us</li></a>
                    <a href="/" class="li"><li class="content-list-item">Privacy Policy</li></a>
                    <a href="/" class="li"><li class="content-list-item">Terms of Services</li></a>
                    <a href="/" class="li"><li class="content-list-item">FAQs</li></a>
                </ul>
            </div>
            <div class="social-links">
                <ul style={{marginLeft:'-13px'}}>
                    <a href="/" class="li"><li class="social-link"><ion-icon name="logo-twitter"></ion-icon></li></a>
                    <a href="/" class="li"><li class="social-link"><ion-icon name="logo-linkedin"></ion-icon></li></a>
                    <a href="/" class="li"><li class="social-link"><ion-icon name="logo-instagram"></ion-icon></li></a>
                    <a href="/" class="li"><li class="social-link"><ion-icon name="logo-youtube"></ion-icon></li></a>
                </ul>
            </div>
            <div class="border"></div>
            <div class="copyright">
                <h6>© 2022 findmymua.in. All rights reserved.</h6>
                <ul class="list">
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
        </div>
    </footer>
    </>
  );
}

export default Footer;
