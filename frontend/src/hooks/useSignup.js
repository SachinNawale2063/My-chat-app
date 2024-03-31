/* eslint-disable no-unused-vars */
import { useState } from "react"
import toast from "react-hot-toast";


const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const signup = async ({fullname,  username, password, confirmPassword, gender}) =>{
    const success = handleInputErrors({fullname,  username, password, confirmPassword, gender})

    if(!success) return;

    setLoading(true)
    try {
        const res = await fetch('/api/auth/signup', {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({fullname, username, password, confirmPassword, gender})
        })

        const data = await res.json();
        if (data.error) {
            throw new Error(data.error)
        }

        //localstorage
        //context

        // console.log(data);
    } catch (error) {
        toast.error(error.message)
    } finally {
        setLoading(false);
    }
  }

  return {loading, signup}
}

export default useSignup

function handleInputErrors({fullname,  username, password, confirmPassword, gender}){
    if(!fullname || !username || !password || !confirmPassword || !gender){
        toast.error('please fill all the fields')
        return false
    }
    if(password !== confirmPassword){
        toast.error("password do not match")
        return false
    }

    if(password.length < 6){
        toast.error('password must be at least 6 character')
        return false
    }

    return true
}