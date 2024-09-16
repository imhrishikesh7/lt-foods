import React from 'react'
import Cover from '../Components/Cover/Cover'
import About from '../Components/About/About'
import Leadership from '../Components/Leadership/Leadership'
import Capitals from '../Components/Capitals/Capitals'

const Home = () => {
  return (
    <div className=''>
        <Cover/>
        <About/>
        <Leadership/>
        <Capitals/>
    </div>
  )
}

export default Home