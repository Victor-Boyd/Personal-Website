import './contact.css'


function Contact() {
    return (
        <div id='contact' className='contact w-full h-60'>
            <div className='contact-inner w-full h-full p-8 py-8 flex flex-row max-sm:flex-col  space-x-3'>
                <div className='contact-inner-text w-3/5 max-sm:w-full h-full'>
                    <strong className='contact-inner-text-title'>Contact</strong><br />
                    <a className='contact-inner-text-content'>Email: victorboyd.dev@gmail.com</a><br />

                </div>
                {/* <div className='contact-inner-text w-2/5 h-full max-sm:w-full '>
                    social media goes here
                </div> */}
            </div>
        </div>
    )
}

export default Contact