import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate()
    return (
        <>
            <button onClick={()=>{
                localStorage.clear()
                navigate('/signup')
            }} className='m-4 fixed top-0 right-0 bg-[#5593de] p-3 px-6 text-xl rounded-lg'>Log Out</button>
        </>
    )
}

export default Navbar