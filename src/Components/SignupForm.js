import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {toast} from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupForm=({setIsLoggedIn})=>{

    const navigate=useNavigate();

    const[showcreatepassword, setShowCreatePassword]=useState(false)
    const[showconfirmpassword, setShowConfirmPassword]=useState(false)

    const[accountType, setAccountType]=useState("student")
    


    const[formData, setFormData]=useState({
        firstname:"", 
        lastname:"",
        email:"", 
        createpassword:"", 
        confirmpassword:"" })

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
        if(formData.createpassword != formData.confirmpassword){
            toast.error("Password Not Matched")
            return;
        }

        setIsLoggedIn(true);
        toast.success("Account Created");
        const FinalData={
            ...formData,
            accountType
        }
        console.log("Final form data is:")
        console.log(FinalData)

        navigate("/dashboard")
    }


    return(
        <div>
          <div className="bg-richblack-800 flex text-white rounded-full max-w-max my-6  p-1 gap-x-1">
                <button
                className={`${accountType==="student" ? 
                    "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200
                `}
                onClick={()=>setAccountType("student")}
                >Student
                </button>
                
                <button
                className={`${accountType==="instructor" ? 
                    "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200
                `}
                onClick={()=>setAccountType("instructor")}
                >Instructor</button>
            
          </div>

         <form onSubmit={submitHandler}
         className="w-full flex flex-col mt-6 gap-y-4"
         >
            <div className="flex gap-x-4">
              <label className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">First Name <sup className="text-pink-200">*</sup></p>
                <input
                className="w-full bg-richblack-800 text-richblack-5 rounded-[0.5rem] p-[12px]"
                required
                placeholder="Enter first name"
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={changeHandler}
                ></input>
              </label>

              <label className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Last Name <sup className="text-pink-200">*</sup></p>
                <input
                className="w-full bg-richblack-800 text-richblack-5 rounded-[0.5rem] p-[12px]"
                required
                placeholder="Enter last name"
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={changeHandler}
                ></input>
              </label>
            </div>

            <label>
                <p
                className="mb-1 text-richblack-5 leading-[1.375rem] text-[0.875rem]"
                >Email Address <sup className="text-pink-200">*</sup></p>
                <input
                className="w-full bg-richblack-800 text-richblack-5 p-[12px] rounded-[0.5rem]"
                required
                placeholder="Enter email address"
                type="email"
                name="email"
                value={formData.email}
                onChange={changeHandler}
                ></input>
            </label>

            <div className="flex gap-x-4">
            <label className="relative">
                <p className="mb-1 text-richblack-5 leading-[1.375rem] text-[0.875rem]">Create Password</p>
                <input
                 className="w-full bg-richblack-800 text-richblack-5 p-[12px] rounded-[0.5rem]"
                required
                placeholder="Enter Password"
                type={showcreatepassword ? "text": "password"}
                name="createpassword"
                value={formData.createpassword}
                onChange={changeHandler}
                ></input>

                <span 
                 className="absolute right-3 top-[38px] cursor-pointer"
                onClick={()=>setShowCreatePassword((prev)=>!prev)}>
                    {showcreatepassword ? <AiOutlineEye fontSize={24} fill='#AFB2BF' />:<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>}
                </span>
            </label>

            <label className="relative">
                <p className="mb-1 text-richblack-5 leading-[1.375rem] text-[0.875rem]">Confirm Password</p>
                <input
                 className="w-full bg-richblack-800 text-richblack-5 p-[12px] rounded-[0.5rem]"
                required
                placeholder="Confirm Password"
                type={showconfirmpassword ?"text":"password"}
                name="confirmpassword"
                value={formData.confirmpassword}
                onChange={changeHandler}
                ></input>

                <span 
                className="absolute right-3 top-[38px] cursor-pointer"
                onClick={()=>setShowConfirmPassword((prev)=>!prev)}>
                    {showconfirmpassword?<AiOutlineEye fontSize={24} fill='#AFB2BF'/>:<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>}
                </span>
            </label>

            </div>

            <button className="w-full rounded-[8px] mx-auto text-richblack-900 px-[12px] py-[8px] bg-yellow-50 font-medium mt-7"> 
                Create Account
            </button>
          </form>

        </div>
    )
}

export default SignupForm;