import React, { useState, useEffect } from 'react';
import headshot from '../assets/headshot.jpg';
import Typewriter from 'typewriter-effect';

const HeroSection = (props) => {

    const [startTyping, setStartTyping] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setStartTyping(true);
        }, 1500); // 3000ms = 3 seconds delay

        return () => clearTimeout(timer); // Clean up the timer on component unmount
    }, []);
    return (
        <section className='flex lg:flex-row flex-col items-center mt-28 w-2/4 mx-auto'>
            <div className='w-2/4'>
                <img src={headshot} alt='headshot' className='rounded-full lg:w-3/4 mx-auto w-full' />
            </div>
            <div className='lg:w-2/4 w-full'>
                <p className='text-center'>
                    <Typewriter
                        options={{
                            strings: 'Hello I\'m,',
                            autoStart: true,
                            loop: false,
                        }}
                    />
                </p>
                <h1 className='text-5xl text-center leading-relaxed'>
                    {startTyping &&
                        <Typewriter
                            options={{
                                strings: 'Caden Wilcox',
                                autoStart: true,
                                loop: false,
                                pauseFor: 200,
                            }}
                        />
                    }
                </h1>
                {
                    startTyping &&
                    <p className='text-center text-xl'>
                        <Typewriter
                            options={{
                                strings: ['Front-End', 'Back-End', 'Full Stack Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </p>
                }
                <div className='flex justify-center mt-4 gap-4'>
                    <button className='border border-black p-3 rounded-full text-xl'>Resume</button>
                    <button className='bg-slate-500 text-white p-3 rounded-full text-xl'>Contact</button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;