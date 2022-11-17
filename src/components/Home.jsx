import React from 'react';
import Typed from 'react-typed';
import videoBg from './assets/videoBg.mp4';

const Home = () => {
  return (
    <div className='main  flex flex-col justify-center text-white'>
     
      <video src={videoBg} autoPlay loop muted />
     
    <div className='content'>
    <h1 className='md:text-5xl sm:text-6xl text-4xl font-bold md:py-6'>
        Hello, I'm Innocente GIHOZO.
      </h1>
    <div className=' flex justify-center items-center'>
        <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
          strings={['Front End Developer', 'Back End Developer', 'Quality Assurance']}
          typeSpeed={180}
          backSpeed={140}
          loop
        />
      </div>
      <button className='bg-[#0000FF] w-[200px] rounded-md font-medium my-10 mx-auto py-3 text-black'>
        View My Work</button>
    </div>
    
    </div>

  );
};

export default Home;
