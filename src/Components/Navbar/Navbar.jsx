import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

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
                <a href="/">
                    <img src="./home/lt foods logo.svg" alt="" />
                </a>
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
                        <a href="#" onClick={() => handleDropdownToggle('corporate')}>Corporate Overview</a>
                        <motion.ul
                            className="dropdown"
                            initial={{ height: 0, opacity: 0 }}
                            animate={openDropdown.corporate ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <li><a href="/about">About LT Foods</a></li>
                            <li><a href="/business-model">Business Model</a></li>
                            <li><a href="/leadership-message">Leadership Message</a></li>
                            <li><a href="/key-performance-highlights">Key Performance Highlights</a></li>
                            <li><a href="/our-offerings">Our Offerings</a></li>
                            <li><a href="/global-presence">Global Presence</a></li>
                            <li><a href="/strategy">Strategy</a></li>
                            <li><a href="/risk-management">Risk Management</a></li>
                            <li><a href="/materiality">Materiality</a></li>
                            <li><a href="/stakeholder-engagement">Stakeholder Engagement</a></li>
                            <li><a href="/ESG-framework-and-scorecard">ESG Framework and Scorecard*</a></li>
                            <li><a href="/financial-capital">Financial Capital</a></li>
                            <li><a href="/manufactured-capital">Manufactured Capital</a></li>
                            <li><a href="/human-capital">Human Capital</a></li>
                            <li><a href="/intellectual-capital">Intellectual Capital</a></li>
                        </motion.ul>
                    </li>

                    <li>
                        <a href="#" onClick={() => handleDropdownToggle('statutory')}>Statutory Reports</a>
                        <motion.ul
                            className="dropdown"
                            initial={{ height: 0, opacity: 0 }}
                            animate={openDropdown.statutory ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <li><a href="#">Annual Reports</a></li>
                            <li><a href="#">Quarterly Reports</a></li>
                            <li><a href="#">Regulatory Filings</a></li>
                        </motion.ul>
                    </li>

                    <li>
                        <a href="#" onClick={() => handleDropdownToggle('financial')}>Financial Statements</a>
                        <motion.ul
                            className="dropdown"
                            initial={{ height: 0, opacity: 0 }}
                            animate={openDropdown.financial ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <li><a href="#">Balance Sheets</a></li>
                            <li><a href="#">Income Statements</a></li>
                            <li><a href="#">Cash Flow Statements</a></li>
                        </motion.ul>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default Navbar;
