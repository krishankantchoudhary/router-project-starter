
import Template from "../Components/Template";
import loginimg from '../assets/login.png'

const Login=({setIsLoggedIn})=>{
    return(
        <Template
        title="Welcome Back"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        formtype="login"
        image={loginimg}
        setIsLoggedIn={setIsLoggedIn}
        ></Template>
    )
}

export default Login;