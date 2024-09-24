import React from 'react'
import './Cta.css'
import { Link } from 'react-router-dom'
const Cta = ({ bg, link, col, stroke }) => {
    return (
        <div className=''>
        <Link to={link} className="cta" style={{ '--cta-bg-color': bg}}>
            <span style={{ color: col }}>Read More</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5" stroke={stroke}></path>
                <polyline points="8 1 12 5 8 9" stroke={stroke}></polyline>
            </svg>
        </Link>
        </div>
    )
}

export default Cta