import React from 'react';
import './Capitals.css';
import { div } from 'framer-motion/client';
import Cta from '../Cta/Cta';

const cardsData = [
  { title: 'Card 1', value: 'Value 1', link: '#', img: './home/c1.png' },
  { title: 'Card 2', value: 'Value 2', link: '#', img: './home/c2.png' },
  { title: 'Card 3', value: 'Value 3', link: '#', img: './home/c3.png' },
  { title: 'Card 4', value: 'Value 4', link: '#', img: './home/c4.png' },
  { title: 'Card 5', value: 'Value 5', link: '#', img: './home/c5.png' },
  { title: 'Card 6', value: 'Value 6', link: '#', img: './home/c6.png' }
];

const Capitals = () => {
  return (
    <div className='marginal bg-gradient-to-r from-white  to-[#d8b7c7] p-10'>        
      <h2 className='text-[#995d43] text-2xl font-semibold mb-10'>Our Six Capitals</h2>

    <div className="card-container">
      {cardsData.map((card, index) => (
        <div key={index} className="card">
          <img src={card.img} className=' w-full' alt="" />
          <div className="card-content">
            <h2 className="title">{card.title}</h2>
            <p className="values">{card.value}</p>
            <Cta bg="#000" link={card.link} col="#fff" stroke="#fff" />

            {/* <a href={card.link} className="link-btn">Learn More</a> */}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Capitals;
