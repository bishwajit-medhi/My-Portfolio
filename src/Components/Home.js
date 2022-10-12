import React, {useState} from 'react';
import background from '../images/20220416-_DSC4628.jpg';

export default function Index() {

    const [nav, setNav] = useState(0);
    const [ham, setHam] = useState(0);

    

    const navChange = () =>{
        if(window.pageYOffset>200){
            setNav(1);
        }
        else{
            setNav(0);
        }
    }

    window.addEventListener("scroll", navChange);




  return (
    <div className="relative">
      <img src={background} alt=""/>
      <div
        className="text-center -mt-36 mx-20 md:-mt-[20.5rem] lg:-mt-[37.5rem] lg:m-28 md:absolute lg:w-[30rem] text-white">
        <div className="md:font-semibold md:text-6xl font-medium text-2xl">
          <span className="drop-shadow">Hi,</span>
          <span className="text-red-600 drop-shadow-md"> I'm Bishwajit</span><br />
        </div>
        <div className="md:my-3 md:font-medium md:text-xl drop-shadow text-sm">
          <span>
            I am a website designer based in the heart of Guwahati, Assam.
          </span>
        </div>
      </div>
      <nav
        className={nav ? "top-0 md:flex md:justify-between py-6 bg-black bg-opacity-40 fixed md:opacity-80 w-screen text-white transition ease-in-out delay-500" : "top-0 md:flex md:justify-between py-6 bg-black bg-opacity-40 fixed md:opacity-80 w-screen  text-white"}
        id="navbar">
        <div className="flex justify-between px-4 md:px-28">
          <a href="#index" className="text-xl md:text-3xl text-white font-semibold">BishwajitMedhi</a>
          <button className="md:hidden" id="hamburgur" onClick={() => setHam(!ham)}>
            <div
              className="cursor-pointer border-2 border-blue-500 shadow-xl"
              id="line"
            >
              <div className="line h-0.5 m-1 w-6 bg-white"></div>
              <div className="line h-0.5 m-1 w-6 bg-white"></div>
              <div className="line h-0.5 m-1 w-6 bg-white"></div>
            </div>
          </button>
        </div>
        <div
          className={ham ? "pl-5 py-1 h-[136px] overflow-auto md:overflow-hidden md:h-auto transition-[height] duration-1000 ease-in-out "  : "pl-5 py-1 h-0 overflow-auto md:overflow-hidden md:h-auto transition-[height] duration-500 ease-out"}
          id="navMenu">
          <ul
            className="drop-shadow-md md:mr-16 md:flex md:justify-between space-y-2 md:space-y-0 md:space-x-7 text-white font-normal md:font-semibold md:text-lg cursor-pointer">
            <li className="hover:text-red-600">
              <a href="#index">Home</a>
            </li>
            <li className="hover:text-red-500">
              <a href="#service">Services</a>
            </li>
            <li className="hover:text-red-500">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-red-500">
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>   
  )
}
