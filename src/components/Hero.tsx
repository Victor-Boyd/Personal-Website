import './hero.css';

import ExpandingDiv from './ExpandingDivs/ExpandingDiv';
import ExpandingDiv2 from './ExpandingDivs/ExpandingDiv2';
import ExpandingDiv3 from './ExpandingDivs/ExpandingDiv3';
import ExpandingDiv4 from './ExpandingDivs/ExpandingDiv4';
import ExpandingDiv5 from './ExpandingDivs/ExpandingDiv5';
import ExpandingDiv6 from './ExpandingDivs/ExpandingDiv6';
import ExpandingDiv7 from './ExpandingDivs/ExpandingDiv7';
import ExpandingDiv8 from './ExpandingDivs/ExpandingDiv8';
import ExpandingDiv9 from './ExpandingDivs/ExpandingDiv9';



function Hero() {
  return (
    <div className='hero w-full bg-white flex'>
      <div className='hero-inner  py-1 w-full overflow-hidden'>
        <div className='hero-left'>
          <img className='headshot' src='https://personal-website-a0181.web.app/headshot.png' alt='Headshot' />
        </div>
        <div className='hero-right justify-end align-top relative '>
          <div className='expanding-div-container w-full h-auto absolute '>
            <ExpandingDiv customClasses='shadow-xl '/>
            <ExpandingDiv2 customClasses='shadow-xl '/>
            <ExpandingDiv3 customClasses='shadow-xl '/>
            <ExpandingDiv4 customClasses='shadow-xl '/>
            <ExpandingDiv5 customClasses='shadow-xl '/>
            <ExpandingDiv6 customClasses='shadow-xl '/>
            <ExpandingDiv7 customClasses='shadow-xl '/>
            <ExpandingDiv8 customClasses='shadow-xl '/>
            <ExpandingDiv9 customClasses='shadow-xl '/>
                
          </div>
          <div className='expanding-div-text-container w-full  absolute'>
            <div className='expanding-div-text-title z-10 text-white'>
                I make cool <br/>
                websites
            </div>
            <div className='expanding-div-text-content z-10 text-white'>
            Hi, I'm Victor Boyd, a web developer <br/> based in Birmingham, Alabama.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;