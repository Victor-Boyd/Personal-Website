import './home-main.css'
import Lottie, {LottieRefCurrentProps} from 'lottie-react';
import animationData1 from '../assets/webDev.json';
import animationData2 from '../assets/Scrum.json';
import animationData3 from '../assets/Automation.json'
import animationData4 from '../assets/Founder.json'
import HomemainDropdown2 from './TextDropdowns/HomemainDropdown2'
import { useRef } from 'react'


function HomeMain() {
    const webDevRef = useRef<LottieRefCurrentProps>(null);
    const ScrumRef = useRef<LottieRefCurrentProps>(null);
    const AutomationRef = useRef<LottieRefCurrentProps>(null);
    const FounderRef = useRef<LottieRefCurrentProps>(null);
    return (
        <div className='home-main bg-gray-100 w-full h-auto '>
            <div className='home-main-inner px-6 py-24 h-full flex-col'>
                <div className='home-main-content1 min-sm:w-4/5 h-auto mr-auto flex flex-row '>
                    {/* Web dev */}
                    <Lottie 
                        onComplete={() => {
                            webDevRef.current?.pause

                            // setting timeout to play animation again after x seconds
                            setTimeout(() => {
                            webDevRef.current?.goToAndPlay(1, true);
                            }, 20000);
                        }}
                        className='lottie-custom w-4/12'
                        loop={false}
                        lottieRef={webDevRef}
                        animationData={animationData1} />
                </div>
                <div className='home-main-content2 min-sm:w-4/5 h-1/5 ml-auto flex flex-row justify-end '>
                    <div className='homemain-content-text-container px-6 py-6 w-8/12 flex items-center justify-center'>
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
                        
                            className='lottie-custom w-4/12'
                            loop={false}
                            lottieRef={ScrumRef}
                            animationData={animationData2} />

                        
                </div>
                <div className='home-main-content3 min-sm:w-4/5 h-1/5 mr-auto'>
                    {/* Automation */}
                    <Lottie 
                        
                        onComplete={() => {
                            AutomationRef.current?.pause

                            // setting timeout to play animation again after x seconds
                            setTimeout(() => {
                            AutomationRef.current?.goToAndPlay(1, true);
                            }, 20000);
                        }}
                    
                        className='lottie-custom w-4/12'
                        loop={false}
                        lottieRef={AutomationRef}
                        animationData={animationData3} />
                </div>
                <div className='home-main-content4 min-sm:w-4/5 h-1/5 ml-auto flex justify-end'>
                    {/* Founder */}
                    <Lottie 
                        
                        onComplete={() => {
                            FounderRef.current?.pause

                            // setting timeout to play animation again after x seconds
                            setTimeout(() => {
                            FounderRef.current?.goToAndPlay(1, true);
                            }, 20000);
                        }}
                    
                        className='lottie-custom w-4/12'
                        loop={false}
                        lottieRef={FounderRef}
                        animationData={animationData4} />
                    <div className=''>
                        
                    </div>
                </div>
                <div className='home-main-content5 min-sm:w-4/5 h-1/5 mr-auto'>

                </div>
            </div>
        </div>
    )
}

export default HomeMain;
