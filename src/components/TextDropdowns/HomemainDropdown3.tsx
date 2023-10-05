import { useState, useRef, useEffect } from 'react'
import autoAnimate from '@formkit/auto-animate'
import './homemain-dropdown.css'

const HomemainDropdown3 = () => {
  const [show, setShow] = useState(false)
  const parent = useRef(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  const reveal = () => setShow(!show)

  return <div className='dropdown-main' ref={parent}>
    <span className="dropdown-label flex flex-col justify-center text-center px-4  py-4" onClick={reveal}>                        
    I possess a genuine passion for streamlining operations through the automation of repetitive and intricate tasks. My proficiency in crafting tailored macros and automation tools enables me to proactively seek out new challenges.<br /><br /> I specialize in the development of internal applications and tools, offering comprehensive solutions to a spectrum of issues. My commitment lies in augmenting efficiency and productivity by introducing innovative approaches.
    </span>

  </div>
}

export default HomemainDropdown3