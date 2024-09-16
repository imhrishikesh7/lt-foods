import React from 'react';
import './Footer.css'; // Assuming you have a separate CSS file for styling

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                {/* Logo Column */}
                <div className="logo-column">
                    <a href="">
                    <img className='footer-logo' src="./home/lt foods logo.svg" alt="" />
                    </a>
                </div>
                <div className="footer-info second-column">
                    <h2 className="footer-business-name">© LT Foods Limited</h2>
                    <p className="footer-business-address">
                    Annual Report 2023-24
                    </p>
                </div>
                {/* Navigation and Info Column */}
                <div className="footer-info third-column">
                    {/* <h2 className="footer-business-name">© Pitti Engineering Limited</h2> */}

                    <p className="footer-business-address">
                    Developed By: 
                    </p>
                    <a href="https://kalolwala.com" target='_blank'><img className='w-[50px]' src="./home/k&a logo.svg" alt="" /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
