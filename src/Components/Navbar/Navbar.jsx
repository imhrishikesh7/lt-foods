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

    return (
        <div className="navbar sticky-top">
            <div className="brand">
                <Link to="/">
                    <img src="./home/lt foods logo.svg" alt="" />
                </Link>
            </div>

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
                        <Link to="#" onClick={() => handleDropdownToggle('corporate')}>Corporate Overview</Link>
                        <motion.ul
                            className="dropdown"
                            initial={{ height: 0, opacity: 0 }}
                            animate={openDropdown.corporate ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <li><Link to="/about">About LT Foods</Link></li>
                            <li><Link to="/business-model">Business Model</Link></li>
                            <li><Link to="/leadership-message">Leadership Message</Link></li>
                            <li><Link to="/key-performance-highlights">Key Performance Highlights</Link></li>
                            <li><Link to="/our-offerings">Our Offerings</Link></li>
                            <li><Link to="/global-presence">Global Presence</Link></li>
                            <li><Link to="/strategy">Strategy</Link></li>
                            <li><Link to="/risk-management">Risk Management</Link></li>
                            <li><Link to="/materiality">Materiality</Link></li>
                            <li><Link to="/stakeholder-engagement">Stakeholder Engagement</Link></li>
                            <li><Link to="/ESG-framework-and-scorecard">ESG Framework and Scorecard*</Link></li>
                            <li><Link to="/financial-capital">Financial Capital</Link></li>
                            <li><Link to="/manufactured-capital">Manufactured Capital</Link></li>
                            <li><Link to="/human-capital">Human Capital</Link></li>
                            <li><Link to="/intellectual-capital">Intellectual Capital</Link></li>
                        </motion.ul>
                    </li>

                    <li>
                        <Link to="#" onClick={() => handleDropdownToggle('statutory')}>Statutory Reports</Link>
                        <motion.ul
                            className="dropdown"
                            initial={{ height: 0, opacity: 0 }}
                            animate={openDropdown.statutory ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <li><Link to="#">Annual Reports</Link></li>
                            <li><Link to="#">Quarterly Reports</Link></li>
                            <li><Link to="#">Regulatory Filings</Link></li>
                        </motion.ul>
                    </li>

                    <li>
                        <Link to="#" onClick={() => handleDropdownToggle('financial')}>Financial Statements</Link>
                        <motion.ul
                            className="dropdown"
                            initial={{ height: 0, opacity: 0 }}
                            animate={openDropdown.financial ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <li><Link to="#">Balance Sheets</Link></li>
                            <li><Link to="#">Income Statements</Link></li>
                            <li><Link to="#">Cash Flow Statements</Link></li>
                        </motion.ul>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default Navbar;
