import { useState, useRef, useEffect } from 'react'
import autoAnimate from '@formkit/auto-animate'
import './homemain-dropdown.css'

const HomemainDropdown1 = () => {
  const [show, setShow] = useState(false)
  const parent = useRef(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  const reveal = () => setShow(!show)

  return <div className='dropdown-main' ref={parent}>
    <span className="dropdown-label flex flex-col justify-center text-center pl-4 pr-4 pt-4" onClick={reveal}>From startup entrepreneur to seasoned web developer, my journey has been anything but ordinary. After selling my successful venture, I immersed myself in the world of web development. Proficient in JavaScript, TypeScript, HTML, CSS, and more, I have the skills to craft outstanding websites. Let's turn your vision into a reality.<br /><br /><strong>Click to see a more in depth description!</strong><br /><br /></span>
    { show && <p className="dropdown-content flex justify-center text-center pl-4 pr-4 pb-4" >As a developer, I've come a long way from my entrepreneurial roots. Starting with my own startup, I ventured into web development and quickly found my passion. My journey took an unexpected turn when I decided to sell my thriving company to embrace a more profound challenge.<br /><br />

Today, I stand as an accomplished web developer, well-versed in an array of programming languages and technologies. While I've mentioned JavaScript, TypeScript, HTML, and CSS, my knowledge extends beyond these boundaries. I possess the skills and expertise to build exceptional websites, irrespective of the tech stack.<br /><br />

If you're seeking a web developer who can deliver solutions that not only meet but exceed your expectations, I'm here to bring your vision to life.</p> }
  </div>
}

export default HomemainDropdown1