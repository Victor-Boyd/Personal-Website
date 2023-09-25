import {Link} from 'react-router-dom'
// import 'Navbar.css'

function Navbar() {
    return (
        <div className='relative z-50 h-16 w-full bg-gray-50'>
            <div className='px-4 py-3 w-full h-full'>
                <div className='flex flex-row h-full w-full text-black text-2xl text-center align-center justify-center'>
                    <Link to='/' className='h-full w-1/5'>
                        Home
                    </Link>
                    <Link to='/about' className='h-full w-1/5'>
                        About
                    </Link>
                    <div className='h-full w-1/5'>
                        Experience
                    </div>
                    <Link to='/contact' className='h-full w-1/5'>
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;