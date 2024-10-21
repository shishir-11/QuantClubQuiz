import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const SignIn = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [activeError, setActiveError] = useState(false)


    const submitFunc = async () => {

        // if(Name.length<1 || email.length<1 || password.length<1){
        //     setActiveError(true)
        // }

        const res = await axios.post(process.env.REACT_APP_BACKEND_URL + '/signin', {
            email,
            password
        })

        if (res.data.msg === 'FAIL') {
            setActiveError(true)
            setTimeout(() => {
                setActiveError(false)
            }, 1500);
            return
        } else {
            localStorage.setItem('email', email)
            localStorage.setItem('name', res.data.name)
            localStorage.setItem('score', res.data.score)
            navigate('/')
        }
    }

    return (
        <div className='h-screen w-screen flex justify-center items-center'>
            <div className='w-[400px] h-[300px] rounded-lg bg-white items-center justify-around flex flex-col p-4'>
                <h1 className='text-3xl text-black'>Sign In</h1>
                <div>
                    <label className='text-black text-lg' htmlFor="email">Email: </label>
                    <input onChange={(e) => {
                        setEmail(e.target.value)
                    }} id='email' className=' border border-black text-black rounded-md p-2 py-1 m-2 ' type="text" placeholder='Enter Email' />
                </div>
                <div>
                    <label className='text-black text-lg' htmlFor="password">Password: </label>
                    <input onChange={(e) => {
                        setPassword(e.target.value)
                    }} id='password' className=' border border-black text-black rounded-md p-2 py-1 m-2 ' type="password" placeholder='Enter Password' />
                </div>
                {activeError && <div className='text-red-600'>Email or Password Incorrect</div>}

                <button onClick={submitFunc} type="submit" className='bg-black p-3 text-lg px-4 rounded-xl' >Submit</button>
                <div className='text-black'>Don't have an account? <Link to={'/signup'} className=' underline'> Sign Up </Link></div>
            </div>
        </div>
    )
}

export default SignIn