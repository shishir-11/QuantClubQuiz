import React from 'react'
import Hero from './pictures/hero.jpg'
import Vertical from './pictures/vertical.jpg'
import { useNavigate } from 'react-router-dom'
import Logo from './pictures/QuantLogo.webp'

function Navbar() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/game');
  };

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src={Logo} className='w-20'></img>
        <ul className="flex space-x-4">
          <button><a href="#" className="text-white" onClick={handleClick}>Quantober-Game</a></button>
          <li><a href="#resources" className="text-white" onClick={()=>{
                localStorage.clear()
                navigate('/signup')
            }}>Logout</a></li>
        </ul>
      </div>
    </nav>
  );
}

function HeroSection() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/game');
  };
  return (
    <section id="hero" className=" py-20" style={{ backgroundImage: `url(${Hero})`}}>
      <div className="container mx-auto text-center" >
        <h1 className="text-4xl font-extrabold mb-4 text-black">THE QUANT CLUB</h1>
        <p className="text-lg mb-6 text-blue-800 font-bold">Your one-stop solution for algorithmic trading and finance.</p>
        <button className=" text-white px-6 py-3 rounded-lg  bg-blue-950" onClick={handleClick}>
          Get Started
        </button>
      </div>
    </section>
  );
}

function Resources() {
  return (
    <section id="resources" className=" py-16">
      <div className="container mx-auto">
        <p className="text-lg mb-6 text-[#5593de] font-bold text-center">The Quant Club has curated a comprehensive collection of resources to help you excel! Whether you’re just starting or preparing for more advanced challenges, this collection provides a clear roadmap for building key skills.📚🤓 Resources Link: <a href='https://docs.google.com/document/d/1MOxehK4HUDikQZpe_zOmrCRZDQJ511qcZL8WaHKtVCI' className=' text-orange-500 underline'>Click here</a></p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-200 p-6 rounded-lg text-center" style={{ backgroundImage: `url(${Vertical})`}}>
            <h3 className="text-xl font-semibold mb-4 text-black" >ALGO TRADING EVENT</h3>
            <p className="mb-4"></p>
            <a href="#" className="text-white bg-blue-800 rounded-md p-2">Learn More</a>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg text-center" style={{ backgroundImage: `url(${Vertical})`}}>
            <h3 className="text-xl font-semibold mb-4 text-black" >QUANT APTITUDE TEST</h3>
            <p className="mb-4"></p>
            <a href="#" className="text-white bg-blue-800 rounded-md p-2">Learn More</a>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg text-center" style={{ backgroundImage: `url(${Vertical})`}}>
            <h3 className="text-xl font-semibold mb-4 text-black" >MARKET MAKING EVENT</h3>
            <p className="mb-4"></p>
            <a href="#" className="text-white bg-blue-800 rounded-md p-2">Learn More</a>
          </div>
          </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="footer" className=" text-white py-4">
      <div className="container mx-auto text-center">
        <p>© 2024 Quant_Club_Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

const Home= ()=>{
  return(
      <div className="flex flex-col min-h-screen px-10">
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <Resources />
        </main>
        <Footer />
      </div>
  );
}

export default Home