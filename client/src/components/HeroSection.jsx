import React, {useState} from 'react';
import headshot from '../assets/headshot.jpg';
const HeroSection = (props) => {
    return (
        <section className='flex lg:flex-row flex-col items-center mt-28 w-2/4 mx-auto'>
            <div className='w-2/4'>
                <img src={headshot} alt='headshot' className='rounded-full lg:w-3/4 mx-auto w-full'/>
            </div>
            <div className='lg:w-2/4 w-full'>
                <h1 className='text-5xl text-center'>Caden Wilcox</h1>
                <p className='text-xl text-center'>Full Stack Developer</p>
                {/* resume and contact buttons */}
                <div className='flex justify-center mt-4 gap-4'>
                    <button className='border border-black p-2 rounded-full'>Resume</button>
                    <button className='bg-slate-500 text-white p-2 rounded-full'>Contact</button>
                </div>
            </div>
        </section>
)}

export default HeroSection;