import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import AboutMe from './components/AboutMe'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='border border-sky-500 w-full mx-auto'>
      <Nav/>
      <HeroSection/>
      <AboutMe/>
    </div>
  )
}

export default App
