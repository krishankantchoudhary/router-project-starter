
import frame from '../assets/frame.png'
import LoginForm from "./LoginForm"
import SignupForm from './SignupForm'
import { FcGoogle } from "react-icons/fc";


const Template=({title,desc1,desc2,image,formtype,setIsLoggedIn})=>{
    return(
        <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 justify-between'>

            <div className='w-11/12 max-w-[450px]'>
                <h1 
                className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'
                >{title}</h1>
                <p 
                className='text-[1.125rem] leading-[1.625rem] mt-4'
                >
                    <span className='text-richblack-100'>{desc1}</span>
                    <br></br>
                    <span
                    className='text-blue-100 italic'
                    >{desc2}</span>
                </p>

                {formtype==="Signup" ?
                (<SignupForm setIsLoggedIn={setIsLoggedIn}></SignupForm>):
                (<LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>)}

                <div className='flex w-full items-center m-y-4 gap-x-2 mt-3'>
                    <div className='h-[1px] bg-richblack-700 w-full'></div>
                    <p className='text-richblack-700 font-medium leading[1.375rem]'>OR</p>
                    <div className='w-full  h-[1px] bg-richblack-700'></div>
                </div>

                <button className='w-full flex justify-center items-center rounded-[8px] text-richblack-100 border border-richblack-100 px-[12px] py-[8px] font-medium gap-x-2  mt-6'>
                    <FcGoogle />
                    <p>Sign Up with Google</p>
                    
                </button>
            </div>

            <div className='relative w-11/12 max-w-[450px]'>
                <img 
                
                src={frame}
                alt='pattern'
                width={558}
                height={504}
                 loading="lazy"
                ></img>

                <img 
                className='absolute  -top-4 right-4'
                src={image}
                alt='student'
                width={558}
                height={490}
                loading="lazy"
                ></img>
            </div>
               
        </div>
    )
}

export default Template;