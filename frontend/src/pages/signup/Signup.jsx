/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox.jsx"
import { useState } from "react";
import useSignup from "../../hooks/useSignup.js";

const Signup = () => {

    const [inputs, setInputs] = useState({
        fullname : '',
        username : '',
        password : '',
        confirmPassword: '',
        gender: ''
    })

    const handleCheckBoxChange = (gender) => {
        setInputs({...inputs, gender})
    }

    const {loading, signup} = useSignup()

    const handleSubmit = async (e) =>{
        e.preventDefault();
        await signup(inputs)
    }

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">

            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">Sign Up
                    <span className="text-blue-400"> My ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Full Name</span>
                        </label>
                        <input type="text" placeholder="Enter your full name" className="w-full input input-bordered h-10" value={inputs.fullname} onChange={(e)=>setInputs({...inputs, fullname:e.target.value})}/>
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10" value={inputs.username} onChange={(e)=>setInputs({...inputs, username:e.target.value})}/>
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" value={inputs.password} onChange={(e)=>setInputs({...inputs, password:e.target.value})}/>
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Confirm Password</span>
                        </label>
                        <input type="password" placeholder="Confirm password" className="w-full input input-bordered h-10" value={inputs.confirmPassword} onChange={(e)=>setInputs({...inputs, confirmPassword:e.target.value})}/>
                    </div>
                    {/* Gender checkbox goes here */}
                    <GenderCheckbox onCheckBoxChange={handleCheckBoxChange} selectedGender = {inputs.gender}/>

                    <Link to="/login" className="text-sm hover:underline hover:text-blue-600 mt-4 inline-block">Already have an account ?</Link>

                    <div>
                        <button className="btn btn-block btn-sm mt-2 border border-slate-700">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;

// Starter code for signup
// import GenderCheckbox from "./GenderCheckbox.jsx"

// const Signup = () => {
//     return (
//         <div className="flex flex-col items-center justify-center min-w-96 mx-auto">

//             <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//                 <h1 className="text-3xl font-semibold text-center text-gray-300">Sign Up
//                     <span className="text-blue-400"> My ChatApp</span>
//                 </h1>

//                 <form>
//                     <div>
//                         <label className="label p-2">
//                             <span className="text-base label-text">Full Name</span>
//                         </label>
//                         <input type="text" placeholder="Enter your full name" className="w-full input input-bordered h-10" />
//                     </div>
//                     <div>
//                         <label className="label p-2">
//                             <span className="text-base label-text">Username</span>
//                         </label>
//                         <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10" />
//                     </div>
//                     <div>
//                         <label className="label">
//                             <span className="text-base label-text">Password</span>
//                         </label>
//                         <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />
//                     </div>
//                     <div>
//                         <label className="label">
//                             <span className="text-base label-text">Confirm Password</span>
//                         </label>
//                         <input type="password" placeholder="Confirm password" className="w-full input input-bordered h-10" />
//                     </div>
//                     {/* Gender checkbox goes here */}
//                     <GenderCheckbox />

//                     <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-4 inline-block">Already have an account ?</a>

//                     <div>
//                         <button className="btn btn-block btn-sm mt-2 border border-slate-700">Sign Up</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Signup;




  
