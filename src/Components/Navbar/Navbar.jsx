import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
    // State to manage the open/close state for each dropdown
    const [openDropdown, setOpenDropdown] = useState({
        corporate: false,
        statutory: false,
        financial: false,
    });

    // Function to toggle a specific dropdown by its key
    const handleDropdownToggle = (dropdown) => {
        setOpenDropdown((prevState) => ({
            ...prevState,
            [dropdown]: !prevState[dropdown],
        }));
    };

    const closeMenu = () => {
        document.getElementById("hamburger").checked = false;
      };
    return (
        <div className="navbar sticky-top">
            <div className="brand">
                <Link to="/" onClick={closeMenu}>
                    <img src="./home/lt foods logo.svg" alt="" />
                </Link>
            </div>

            <a href="./docs/Annual Report 2023-24.pdf" target="_blank" className="pdf-download"><img src="./other/pdf-dnld.svg" alt="" /></a>

            <input id="hamburger" className="hamburger" type="checkbox" />
            <label className="hamburger" htmlFor="hamburger">
                <i></i>
                <text>
                    <close>close</close>
                    <open>menu</open>
                </text>
            </label>

            <section className="drawer-list">
                <ul>
                    <li>
                        <Link to="#" className="nav-link" onClick={() => handleDropdownToggle('corporate')}>Corporate Overview <img src="./other/down-arrow-7429.svg" alt="" /></Link>
                        <motion.ul
                            className="dropdown"
                            initial={{ height: 0, opacity: 0 }}
                            animate={openDropdown.corporate ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                            <li><Link to="/about" onClick={closeMenu}>About LT Foods</Link></li>
                            <li><Link to="/business-model" onClick={closeMenu}>Business Model</Link></li>
                            <li><Link to="/leadership-message" onClick={closeMenu}>Leadership Message</Link></li>
                            <li><Link to="/key-performance-highlights" onClick={closeMenu}>Key Performance Highlights</Link></li>
                            <li><Link to="/our-offerings" onClick={closeMenu}>Our Offerings</Link></li>
                            <li><Link to="/global-presence" onClick={closeMenu}>Global Presence</Link></li>
                            <li><Link to="/strategy" onClick={closeMenu}>Strategy</Link></li>
                            <li><Link to="/risk-management" onClick={closeMenu}>Risk Management</Link></li>
                            <li><Link to="/materiality" onClick={closeMenu}>Materiality</Link></li>
                            <li><Link to="/stakeholder-engagement" onClick={closeMenu}>Stakeholder Engagement</Link></li>
                            <li><Link to="/ESG-framework-and-scorecard" onClick={closeMenu}>ESG Framework and Scorecard*</Link></li>
                            <li><Link to="/financial-capital" onClick={closeMenu}>Financial Capital</Link></li>
                            <li><Link to="/manufactured-capital" onClick={closeMenu}>Manufactured Capital</Link></li>
                            <li><Link to="/human-capital" onClick={closeMenu}>Human Capital</Link></li>
                            <li><Link to="/intellectual-capital" onClick={closeMenu}>Intellectual Capital</Link></li>
                            <li><Link to="/social-and-relationship-capital" onClick={closeMenu}>Social and Relationship Capital</Link></li>
                            <li><Link to="/natural-capital" onClick={closeMenu}>Natural Capital</Link></li>
                            <li><Link to="/profile-of-board" onClick={closeMenu}>Profile of Board</Link></li>
                        </motion.ul>
                    </li>

                    <li>
                        <Link to="#" className="nav-link" onClick={() => handleDropdownToggle('statutory')}>Statutory Reports <img src="./other/down-arrow-7429.svg" alt="" /></Link>
                        <motion.ul
                            className="dropdown"
                            initial={{ height: 0, opacity: 0 }}
                            animate={openDropdown.statutory ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <li><Link to="./docs/MDA.pdf" target="_blank">Management Discussion and Analysis</Link></li>
                            <li><Link to="./docs/Board's Report.pdf" target="_blank">Board’s Report</Link></li>
                            <li><Link to="./docs/BRSR.pdf" target="_blank">Business Responsibility and <br /> Sustainability Report</Link></li>
                            <li><Link to="./docs/CG.pdf" target="_blank">Corporate Governance Report</Link></li>
                        </motion.ul>
                    </li>

                    <li>
                        <Link to="#" className="nav-link" onClick={() => handleDropdownToggle('financial')}>Financial Statements <img src="./other/down-arrow-7429.svg" alt="" /></Link>
                        <motion.ul
                            className="dropdown"
                            initial={{ height: 0, opacity: 0 }}
                            animate={openDropdown.financial ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <li><Link to="./docs/SFS.pdf" target="_blank">Standalone Financial Statements</Link></li>
                            <li><Link to="./docs/CFS.pdf" target="_blank">Consolidated Financial Statements</Link></li>
                        </motion.ul>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default Navbar;
