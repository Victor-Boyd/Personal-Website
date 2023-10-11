import { useState, useRef, useEffect } from 'react'
import autoAnimate from '@formkit/auto-animate'
import './homemain-dropdown.css'

const HomemainDropdown2 = () => {
  const [show, setShow] = useState(false)
  const parent = useRef(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  const reveal = () => setShow(!show)

  return <div className='dropdown-main' ref={parent}>
    <span className="dropdown-label flex flex-col justify-center text-center pl-4 pr-4 pt-4" onClick={reveal}>                        
      I am a certified Technical Scrum Master with experience in web development team management. I prioritize team needs and excel in communication using tools like Jira, GitHub, and more.<br /> 
      <br/>
      My strengths include Agile coaching, problem-solving, and a relentless pursuit of self-improvement.<br />
      <br />
      <strong className='flex justify-center'> Click to see a more in depth description! </strong><br /><br /> </span>
    { show && <p className="dropdown-content flex justify-center text-center pl-4 pr-4 pb-4" >
      I am a certified Technical Scrum Master with a track record of effectively managing web development teams. My foremost commitment is to create an environment where my team thrives, and their productivity soars.<br />
      <br />
      My approach centers around active listening to discern the team's needs, ensuring they have the support required to excel. Proficient in an array of collaboration tools including Discord, Slack, Jira, GitHub, and Microsoft Teams, I orchestrate seamless communication and sprint execution. <br />
      <br />
      In my role, I have honed my expertise in coaching developers on Agile methodologies, enabling teams to embrace these principles for optimized performance. <br />
      <br />
      As a natural problem solver, I relish challenges and continuously seek ways to enhance both my own skills and the projects I undertake. My dedication to growth and improvement is unwavering.</p> }
  </div>
}

export default HomemainDropdown2