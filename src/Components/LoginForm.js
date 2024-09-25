import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import {toast} from 'react-hot-toast'

const LoginForm=({setIsLoggedIn})=>{
   
    const navigate=useNavigate();

    const[showpassword, setShowPassword]=useState(false)


    const[formData , setFormData]=useState({email:"", password:""})

    const changeHandler=(event)=>{
        setFormData((prevData)=>(
            {
            ...prevData,
            [event.target.name]:event.target.value
            }

        ))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
       
        console.log("Final Data after user login:")
        console.log(formData)

        navigate("/dashboard");

    }


    return(
            <form onSubmit={submitHandler}
            className="flex flex-col w-full gap-y-4 mt-6"
            >
                <label className="w-full">
                    <p
                    className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]"
                    >Email Address <sup className="text-pink-200">*</sup></p>
                <input
                required
                placeholder="Enter email address"
                type="text"
                value={formData.email}
                onChange={changeHandler}
                name="email"
                className="w-full bg-richblack-800 text-richblack-5  rounded-[0.5rem] p-[12px]"
                ></input>
                </label>

                <label className="w-full relative">
                    <p
                     className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]"
                    >Password <sup className="text-pink-200">*</sup></p>
                    <input
                    required
                    type={showpassword ? "text":"password"}
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={changeHandler}
                    name="password"
                    className="w-full bg-richblack-800 text-richblack-5 p-[12px] rounded-[0.5rem]"
                    ></input>
                
                <span 
                className="absolute right-3 top-[38px] cursor-pointer"
                onClick={()=>setShowPassword((prev)=>!prev)}>
                {showpassword ?<AiOutlineEye fontSize={24} fill='#AFB2BF' />:<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>}
                </span>

                <Link to='#'>
                <p className="text-xs mt-1 text-blue-100 ml-auto max-w-max">Forgot Password</p>
                </Link>

                </label>

                <button className="w-full rounded-[8px] mx-auto text-richblack-900 px-[12px] py-[8px] bg-yellow-50 font-medium mt-7">
                    Sign In
                </button>

               
                
            </form>
    )
}

export default LoginForm