import './home-main.css'
import Lottie, {LottieRefCurrentProps} from 'lottie-react';
import animationData1 from '../assets/webDev.json';
import animationData2 from '../assets/Scrum.json';
import animationData3 from '../assets/Automation.json'
import animationData4 from '../assets/Founder.json'
import HomemainDropdown1 from './TextDropdowns/HomemainDropdown1'
import HomemainDropdown2 from './TextDropdowns/HomemainDropdown2'
import HomemainDropdown3 from './TextDropdowns/HomemainDropdown3'
import HomemainDropdown4 from './TextDropdowns/HomemainDropdown4'
import { useRef } from 'react'


function HomeMain() {
    const webDevRef = useRef<LottieRefCurrentProps>(null);
    const ScrumRef = useRef<LottieRefCurrentProps>(null);
    const AutomationRef = useRef<LottieRefCurrentProps>(null);
    const FounderRef = useRef<LottieRefCurrentProps>(null);
    return (
        <div className='home-main bg-gray-100 w-full h-auto '>
            <div className='home-main-inner px-6 py-24 h-full flex-col'>
                <div className='home-main-content1 max-sm:w-full  h-auto mr-auto max-sm:mx-auto flex max-sm:flex-col max-sm:justify-center flex-row '>
                    {/* Web dev */}
                    <Lottie 
                        onComplete={() => {
                            webDevRef.current?.pause

                            // setting timeout to play animation again after x seconds
                            setTimeout(() => {
                            webDevRef.current?.goToAndPlay(1, true);
                            }, 20000);
                        }}
                        className='lottie-custom w-4/12 max-sm:w-3/4 max-sm:mx-auto'
                        loop={false}
                        lottieRef={webDevRef}
                        animationData={animationData1} />
                    <div className='homemain-content-text-container px-6 py-6 w-8/12 max-sm:w-full flex items-center justify-center'>
                        <div className='homemain-content-text  '>
                            <HomemainDropdown1 />
                        </div>
                    </div>
                </div>
                <div className='home-main-content2 max-sm:w-full  h-auto mr-auto max-sm:mx-auto flex max-sm:flex-col-reverse max-sm:justify-center flex-row justify-end '>
                    <div className='homemain-content-text-container px-6 py-6 w-8/12 max-sm:w-full flex items-center justify-center'>
                        <div className='homemain-content-text  '>
                            <HomemainDropdown2 />
                        </div>
                    </div>                    
                    {/* Scrum cert */}
                    <Lottie 
                        
                            onComplete={() => {
                                ScrumRef.current?.pause

                                // setting timeout to play animation again after x seconds
                                setTimeout(() => {
                                ScrumRef.current?.goToAndPlay(1, true);
                                }, 20000);
                            }}
                        
                            className='lottie-custom w-4/12 max-sm:w-3/4 max-sm:mx-auto'
                            loop={false}
                            lottieRef={ScrumRef}
                            animationData={animationData2} />

                        
                </div>
                <div className='home-main-content3 max-sm:w-full  h-auto mr-auto max-sm:mx-auto flex max-sm:flex-col max-sm:justify-center flex-row'>
                    {/* Automation */}
                    <Lottie 
                        
                        onComplete={() => {
                            AutomationRef.current?.pause

                            // setting timeout to play animation again after x seconds
                            setTimeout(() => {
                            AutomationRef.current?.goToAndPlay(1, true);
                            }, 20000);
                        }}
                    
                        className='lottie-custom w-4/12 max-sm:w-3/4 max-sm:mx-auto'
                        loop={false}
                        lottieRef={AutomationRef}
                        animationData={animationData3} />
                    <div className='homemain-content-text-container px-6 py-6 w-8/12 max-sm:w-full flex items-center justify-center'>
                        <div className='homemain-content-text  '>
                            <HomemainDropdown3 />
                        </div>
                    </div>
                </div>
                <div className='home-main-content4 max-sm:w-full  h-auto mr-auto max-sm:mx-auto flex max-sm:flex-col max-sm:justify-center flex-row'>
                    {/* Founder */}
                    <Lottie 
                        
                        onComplete={() => {
                            FounderRef.current?.pause

                            // setting timeout to play animation again after x seconds
                            setTimeout(() => {
                            FounderRef.current?.goToAndPlay(1, true);
                            }, 20000);
                        }}
                    
                        className='lottie-custom w-4/12 max-sm:w-3/4 max-sm:mx-auto'
                        loop={false}
                        lottieRef={FounderRef}
                        animationData={animationData4} />
                    <div className=''>
                    <div className='homemain-content-text-container px-6 py-6 w-8/12 max-sm:w-full flex items-center justify-center'>
                        <div className='homemain-content-text  '>
                            <HomemainDropdown4 />
                        </div>
                    </div>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeMain;
