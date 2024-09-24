import React from 'react';
import './Capitals.css';
import { div } from 'framer-motion/client';
import Cta from '../Cta/Cta';

const cardsData = [
  { title: 'Financial\nCapital', value: 'Value 1', link: '/financial-capital', img: './home/c1.png', img2: '/home/Artboard 3 (1).svg' },
  {
    title: 'Manufactured\nCapital', value: 'Value 2', link: '/manufactured-capital', img: './home/c2.png', img2: '/home/Artboard 5.svg',
  },
  { title: 'Intellectual\nCapital', value: 'Value 3', link: '/intellectual-capital', img: './home/c3.png', img2: '/home/Artboard 8.svg' },
  { title: 'Human\nCapital', value: 'Value 4', link: '/human-capital', img: './home/c4.png', img2: '/home/Artboard 4 (2).svg' },
  { title: 'Social and\nRelationship\nCapital', value: 'Value 5', link: '/social-and-relationship-capital', img: './home/c5.png', img2: '/home/Artboard 6.svg' },
  { title: 'Natural\nCapital', value: 'Value 6', link: '/natural-capital', img: './home/c6.png', img2: '/home/Artboard 7.svg' }
];

const Capitals = () => {
  return (
    <div className='marginal bg-gradient-to-b from-white  to-[#d8b7c7] p-10'>
      <h2 className='text-[#995d43] text-2xl font-semibold mb-10'>Our Six Capitals</h2>

      <div className="card-container">
        {cardsData.map((card, index) => (
          <div key={index} className="card">
            {/* <div className='overlay'></div> */}
            <img src={card.img} className='img1 w-full' alt="" />
            <div className="card-content">
              <div className='overlay'>
                <img src={card.img2} className='img2' alt="" />
                <h2 className="title">{card.title}</h2>
                <div className='cta-links'>
                  <Cta bg="#b87e99" link={card.link} col="#fff" stroke="#fff" />
                </div>
              </div>
              {/* <p className="values">{card.value}</p> */}

              {/* <a href={card.link} className="link-btn">Learn More</a> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Capitals;
