import React, { useState } from 'react';
import lakeBeach from '../assets/lake-bench.jpg';
import { IoRibbon } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa6";
const AboutMe = (props) => {
    return (
        <div className='pt-20 mt-20 mb-40'>
            <p className='text-center text-gray-400 '>Get To Know More</p>
            <h2 className='text-4xl text-center mt-2 font-bold'>About Me</h2>
            <div className='flex justify-between items-center w-4/6 mx-auto lg:flex-row flex-col'>
                <div className='w-2/4'>
                    <img src={lakeBeach} alt='lakeBeach' className='rounded-3xl mx-auto mt-4 mb-6 shadow-2xl' />
                </div>
                <div className='w-3/4'>
                    <div className='flex lg:flex-row items-center justify-center gap-12 flex-col'>
                        <div className='border-2 border-gray-300 rounded-2xl p-6 lg:w-2/6 w-full'>
                            <IoRibbon className='mx-auto text-2xl' />
                            <h3 className='lg:text-2xl text-center font-bold'>Experience</h3>
                            <p className='text-center text-gray-400'>5+ Years</p>
                            <p className='text-center text-gray-400'>Web Development</p>
                        </div>
                        <div className='border-2 border-black rounded-2xl p-6 lg:w-2/6 w-full'>
                            <FaGraduationCap className='mx-auto text-2xl' />
                            <h3 className='lg:text-2xl text-center font-bold'>Education</h3>
                            <p className='text-center text-gray-400'>3+ Years</p>
                            <p className='text-center text-gray-400'>Web Development</p>
                        </div>
                    </div>
                    <p className='mt-4 w-5/6 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cumque fuga quisquam libero, laudantium iusto debitis adipisci commodi dignissimos? Tenetur accusantium distinctio illum nemo incidunt, et voluptatibus rerum eos. Ad.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, unde numquam esse veniam dignissimos hic amet magni ratione minima fuga eum, laborum ipsam temporibus explicabo ad qui architecto impedit aut.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;