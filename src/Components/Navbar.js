import logo from '../assets/Logo.svg'
import {Link} from 'react-router-dom'
import {toast} from 'react-hot-toast'

const Navbar=(props)=>{
    const isLoggedIn=props.isLoggedIn;
    const setIsLoggedIn=props.setIsLoggedIn;


    return(
        <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
        <Link to='/'>
        <img src={logo} alt="logo" width={160}  height={32}></img>
        </Link>

        <nav>
            <ul className='flex gap-x-6 text-richblack-100 '>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/'>About</Link>
                </li>
                <li>
                    <Link to='/'>Contest</Link>
                </li>
            </ul>
        </nav>
{/* login signup logout dashboard*/}
        <div className='flex items-center gap-x-4'>
            { !isLoggedIn &&
                 <Link to='/login'>
                 <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700'
                 onClick={()=>{
                    setIsLoggedIn(true);
                    toast.success("Welcome Back!")
                 }}
                 >Login</button>
                 </Link>
            }
            { !isLoggedIn &&
                <Link to='/signup'>
                <button 
                className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700'
                onClick={()=>{
                    setIsLoggedIn(false);
                    toast.success("Logged Out");
                }}
                >Sign Up</button>
                </Link>
            }

            { isLoggedIn &&
                <Link to='/logout'>
                <button
                className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700'
                onClick={()=>{
                    setIsLoggedIn(false);
                    toast.success("Logged Out")
                }}
                >Logout</button>
                </Link>
            }

           { isLoggedIn &&
                <Link to='/Dashboard'>
                <button
                className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700'
                >Dashboard</button>
                </Link>
            }

        </div>
        </div>
    )
}

export default Navbar;