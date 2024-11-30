import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";



const Login = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Sign Up")

    function handelSubmit(e) {
        e.preventDefault()
    }
    return (
        <div className="absolute z-10 w-full h-full backdrop-blur-sm flex justify-center items-center">
            <form onSubmit={handelSubmit} className="h-80 w-80 flex flex-col rounded-xl p-5 gap-6 bg-white">
                <div className="flex justify-end gap w-full gap-20">
                    <h2 className="text-2xl font-extrabold">{currState}</h2>
                    <RiCloseLine className="text-2xl text-red-700" onClick={() => setShowLogin(false)} />
                </div>
                {currState === "Sign Up" ?
                    <div className="flex gap-5">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" name="name" id="name" placeholder="Enter your name" className="outline-none focus:border-b-2 border-gray-700" />
                    </div> : <></>}

                <div className="flex gap-14">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" placeholder="Enter your email" className="outline-none focus:border-b-2 border-gray-700" />
                </div>
                <div className="flex gap-7">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter your password" className="outline-none focus:border-b-2 border-gray-700" />
                </div>
                <button className="border-2 bg-red-600 rounded-lg p-1">{currState === "Sign Up" ? "Create Account" : "Login"}</button>
                {currState === "Sign Up" ?
                    <p>Already have an account ?  <span className="text-blue-800 hover:underline ml-5" onClick={() => setCurrState("Login")}>Login</span></p> :
                    <p>Dont have an account ?  <span className="text-blue-800 hover:underline ml-5" onClick={() => { setCurrState("Sign Up") }}> Sign Up</span></p>}
            </form>
        </div>
    )
}

export default Login