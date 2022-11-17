import React from 'react'
import Laptop from './assets/laptop.jpg';

const Portfolio = () => {
  return (
    <div className='w-full bg-[#EEEDE7] py-16 px-20'>
      <div className='w-full bg-[#FFF] py-10 px-10'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <div className='pr-11 pl-5'>

            <div className='w-full bg-[#FFF]'>
              <img src={Laptop} alt='bos' />
              <h3>Project One</h3>
              <p>
                <span>HTML5</span>
                <span>CSS</span>
                <span>Javascript</span>
                <span>React</span>
              </p>
            </div>
          </div>

          <div className='w-full bg-[#FFF] pr-11 pl-5'>
            <img src={Laptop} />
            <h3>Project One</h3>
            <p>
              <span>HTML5</span>
              <span>CSS</span>
              <span>Javascript</span>
              <span>React</span>
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Portfolio

