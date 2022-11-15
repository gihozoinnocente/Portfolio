import React from 'react'
import Laptop from './assets/laptop.jpg';

const Portfolio = () => {
    return (
        <div className='w-full bg-[#EEEDE7] py-30 px-20'>
            <h1 className='text-7xl text-center'>PORTFOLIO</h1>
            <p className='text-center'>shdakjubz  djhdiojdohugdakjuihusc hsjjjnchbzixnzbhcb hopashdjndadhhsha</p>
            <div class="grid grid-cols-4 gap-4 py-10 px-10">
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


                <div className='w-full bg-[#FFF]'>
                    <img src={Laptop} />
                    <h3>Project One</h3>
                    <p>
                        <span>HTML5</span>
                        <span>CSS</span>
                        <span>Javascript</span>
                        <span>React</span>

                    </p>
                </div>

                <div className='w-full bg-[#FFF]'>
                    <img src={Laptop} />
                    <h3>Project One</h3>
                    <p>
                        <span>HTML5</span>
                        <span>CSS</span>
                        <span>Javascript</span>
                        <span>React</span>

                    </p>
                </div>

                <div className='w-full bg-[#FFF]'>
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
    )
}

export default Portfolio
