import { useState, useRef, useEffect } from 'react'
import autoAnimate from '@formkit/auto-animate'
import './homemain-dropdown.css'

const HomemainDropdown4 = () => {
  const [show, setShow] = useState(false)
  const parent = useRef(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  const reveal = () => setShow(!show)

  return <div className='dropdown-main' ref={parent}>
    <span className="dropdown-label flex flex-col justify-center text-center pl-4 pr-4 pt-4" onClick={reveal}>With a background as a startup founder, I bring a unique blend of entrepreneurial thinking and technical expertise to the world of development. My experience has equipped me with problem-solving skills, adaptability, and a keen eye for innovation. As a developer, I thrive in dynamic environments, where I can apply my creativity and business acumen to drive successful projects.<br /><br /><strong>Click to see a more in depth description!</strong><br /><br /></span>
    { show && <p className="dropdown-content flex justify-center text-center pl-4 pr-4 pb-4" >Drawing upon my experience as a former technical startup founder, I bring a unique perspective to the world of development. My entrepreneurial journey has honed my ability to identify opportunities, think creatively, and solve complex problems. I understand the intricacies of product development, user-centric design, and the importance of efficient coding practices.<br /><br />

Having navigated the challenges of running a startup, I'm well-versed in the art of adaptability and resilience. These qualities enable me to thrive in dynamic development environments, where quick decision-making and flexibility are paramount.<br /><br />

In my role as a developer, I leverage my entrepreneurial spirit to envision innovative solutions, collaborate effectively with cross-functional teams, and drive projects to successful outcomes. My experience as a startup founder equips me to not only build exceptional digital products but also contribute strategically to their growth and success.</p> }
  </div>
}

export default HomemainDropdown4