import React from 'react';


const About = ({ progressPercentage }) => {
    return (
        <div className='w-full bg-[#EEEDE7] py-16 px-20'>
            <div className='w-full bg-[#FFF] py-10 px-10'>
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                    <div className='pr-11 pl-5'>
                        <div className='pb-5'>
                            <h2>HTML5</h2>
                            <div className='h-1 w-full bg-blue-300'>

                                <div
                                    style={{ width: `${98}%` }}
                                    className={`h-full ${progressPercentage < 70 ? 'bg-red-600' : 'bg-blue-600'}`}>
                                </div>
                            </div>
                        </div>

                        <div className='pb-5'>
                            <h2>CSS3</h2>
                            <div className='h-1 w-full bg-blue-300'>

                                <div
                                    style={{ width: `${95}%` }}
                                    className={`h-full ${progressPercentage < 70 ? 'bg-red-600' : 'bg-blue-600'}`}>
                                </div>
                            </div>
                        </div>
                        <div className='pb-5'>
                            <h2>Tailwind CSS</h2>
                            <div className='h-1 w-full bg-blue-300'>

                                <div
                                    style={{ width: `${80}%` }}
                                    className={`h-full ${progressPercentage < 70 ? 'bg-red-600' : 'bg-blue-600'}`}>
                                </div>
                            </div>
                        </div>

                        <div className='pb-5'>
                            <h2>Javascript</h2>
                            <div className='h-1 w-full bg-blue-300'>

                                <div
                                    style={{ width: `${90}%` }}
                                    className={`h-full ${progressPercentage < 70 ? 'bg-red-600' : 'bg-blue-600'}`}>
                                </div>
                            </div>
                        </div>

                        <div className='pb-5'>
                            <h2>ReactJs</h2>
                            <div className='h-1 w-full bg-blue-300'>

                                <div
                                    style={{ width: `${88}%` }}
                                    className={`h-full ${progressPercentage < 70 ? 'bg-red-600' : 'bg-blue-600'}`}>
                                </div>
                            </div>
                        </div>

                        <div className='pb-5'>
                            <h2>React Native</h2>
                            <div className='h-1 w-full bg-blue-300'>

                                <div
                                    style={{ width: `${75}%` }}
                                    className={`h-full ${progressPercentage < 70 ? 'bg-red-600' : 'bg-blue-600'}`}>
                                </div>
                            </div>
                        </div>

                        <div className='pb-5'>
                            <h2>MongoDB</h2>
                            <div className='h-1 w-full bg-blue-300'>

                                <div
                                    style={{ width: `${80}%` }}
                                    className={`h-full ${progressPercentage < 70 ? 'bg-red-600' : 'bg-blue-600'}`}>
                                </div>
                            </div>
                        </div>

                        <div className='pb-5'>
                            <h2>Postgres/MySQL</h2>
                            <div className='h-1 w-full bg-blue-300'>

                                <div
                                    style={{ width: `${80}%` }}
                                    className={`h-full ${progressPercentage < 70 ? 'bg-red-600' : 'bg-blue-600'}`}>
                                </div>
                            </div>
                        </div>

                        <div className='pb-5'>
                            <h2>Typescript</h2>
                            <div className='h-1 w-full bg-blue-300'>

                                <div
                                    style={{ width: `${80}%` }}
                                    className={`h-full ${progressPercentage < 70 ? 'bg-red-600' : 'bg-blue-600'}`}>
                                </div>
                            </div>
                        </div>

                        <div className='pb-5'>
                            <h2>NodeJS</h2>
                            <div className='h-1 w-full bg-blue-300'>

                                <div
                                    style={{ width: `${80}%` }}
                                    className={`h-full ${progressPercentage < 70 ? 'bg-red-600' : 'bg-blue-600'}`}>
                                </div>
                            </div>
                        </div>

                        <div className='pb-5'>
                            <h2>Rest API</h2>
                            <div className='h-1 w-full bg-blue-300'>

                                <div
                                    style={{ width: `${75}%` }}
                                    className={`h-full ${progressPercentage < 70 ? 'bg-red-600' : 'bg-blue-600'}`}>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='flex flex-col justify-center'>
                        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>About Me</h1>
                        <p>
                            I'm an Experienced full stuck software developer with expertise in design,
                            UI/UX, installation, testing and maintenance of sotware systems
                            with over one year of experience as a junior software
                            engineer.I completed 3months internship with Mobile development at Justice Bot,
                            where I honed my mobile app development skills.In addition to that I' m a certified
                            software tester.
                        </p>
                        {/* <button className='bg-black text-[#0000FF] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button> */}
                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;
