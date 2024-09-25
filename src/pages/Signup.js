import Template from "../Components/Template";
import Signupimg from "../assets/signup.png"

const Signup=({setIsLoggedIn})=>{
    return(
        <Template
        title="Join the millions learning to code with StudyNotion for free"
        desc1="Build skills for today,tomorrow, and beyond."
        desc2="Education to future-proof your career."
        formtype="Signup"
        image={Signupimg}
        setIsLoggedIn={setIsLoggedIn}
        ></Template>
    )
}

export default Signup;