import React, {useState} from 'react';
const Nav = (props) => {

    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
        const mobileNav = document.querySelector('.mobile-nav');
        if (navOpen) {
            mobileNav.classList.add('hidden');
        } else {
            mobileNav.classList.remove('hidden');
        }
    }
    // check screen size to close mobile nav
    window.addEventListener('resize', () => {
        const mobileNav = document.querySelector('.mobile-nav');
        if (window.innerWidth > 1024) {
            mobileNav.classList.add('hidden');
        }
    })
    return (
        <header className='p-2 w-3/4 mx-auto mt-10'>
            <nav className='flex items-center justify-between flex-shrink'>
                <h2 className='text-3xl font-semibold'>Caden Wilcox</h2>
                <ul className='lg:flex justify-between items-center text-xl w-2/6 hidden font-semibold'>
                    <li className='cursor-pointer hover:underline hover:text-gray-500'>Home</li>
                    <li className='text-md cursor-pointer hover:underline hover:text-gray-500'>About</li>
                    <li className='text-md cursor-pointer hover:underline hover:text-gray-500'>Projects</li>
                    <li className='text-md cursor-pointer hover:underline hover:text-gray-500'>Contact</li>
                </ul>
                <div className='lg:hidden' onClick={toggleNav}>
                    <button className='border border-gray-500 p-1 rounded-lg'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                        </svg>
                    </button>
                </div>
                <ul className='mobile-nav bg-slate-200 w-3/4 text-xl text-center absolute top-14 hidden'>
                    <li className='cursor-pointer hover:underline hover:text-gray-500'>Home</li>
                    <li className='cursor-pointer hover:underline hover:text-gray-500'>About</li>
                    <li className='cursor-pointer hover:underline hover:text-gray-500'>Projects</li>
                    <li className='cursor-pointer hover:underline hover:text-gray-500'>Contact</li>
                </ul>
            </nav>
        </header>
)}

export default Nav;