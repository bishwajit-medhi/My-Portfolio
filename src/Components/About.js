import React from 'react'
import AboutPic from '../images/20220416-_DSC4552.jpg'
import CV from '../CV/Bishwajit Medhi.pdf'

export default function About() {
  return (
    <div className="about bg-slate-200 py-16" id="about">
      <div className="text-center text-3xl">About Me</div>
      <div className="md:flex md:justify-items-center mt-7">
        <div className="md:w-1/2 m-8 rounded-lg md:ml-[70px]">
          <img
            src={AboutPic}
            alt=""
            className="rounded-lg shadow-2xl w-[100%]"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left mx-5">
          <label className="text-center font-semibold text-2xl">
            A Little About Me
          </label>
          <br />
          <p className="leading-7 mt-2 text-justify md:mr-16">
          Hi, I am a full time full-stack dedicated freelance web developer having strong knowledge in web designing and development to build high performing creative professional websites.
          </p>
          <br />
          <p className="leading-7 mt-1 text-justify md:mr-16">
          Recently I have created a website where developers can create step by step snippet and contributed to many open source project. <br /> I keep myself up to date with new technologies and its uses, new tools and computer languages so that I can give my level best to my clients. <br /> II can easily cope up with the business market and understand the consumers' needs. I look forward to the opportunity of making you my next satisfied client. Lets connect and talk about your next website. <br />
          </p>
          <button
            className="bg-red-600 px-2 py-4 rounded-md text-white hover:bg-red-700 md:mt-16"
          >
            <a href={CV} download>Download CV</a>
          </button>
        </div>
      </div>
      <div className=" text-center md:flex md:justify-around mx-14 mt-6 md:mt-0">
        <div className="md:w-1/2 md:mr-9">
          <div className="text-center font-bold text-2xl">Skill and Education</div>
          <div className="mt-3">
            <p className="leading-7">
            
            </p>
            <p className="leading-7">
            I have completed my post graduation in Information Technology (IT) and also done many courses related to web designing, coding, and programming. I'm quite expert in using coding and markup languages like HTML/CSS/JavaScript/PHP etc.
            </p>
          </div>
        </div>
        <div className="Progres md:w-1/2">
          <span>HTML/CSS:</span>
          <div className="h-5 mb-2 bg-white rounded-md">
            <div className="h-5 w-[90%] bg-red-800 rounded-md"></div>
          </div>
          <span className="">JavaScript:</span>
          <div className="h-5 mb-2 bg-white rounded-md">
            <div className="h-5 w-[70%] bg-red-800 rounded-md"></div>
          </div>
          <span className="">PHP:</span>
          <div className="h-5 mb-2 bg-white rounded-md">
            <div className="h-5 w-[70%] bg-red-800 rounded-md"></div>
          </div>
          <span className="">MYSQL:</span>
          <div className="h-5 mb-2 bg-white rounded-md">
            <div className="h-5 w-[60%] bg-red-800 rounded-md"></div>
          </div>
          <span className="">ReactJS:</span>
          <div className="h-5 bg-white rounded-md">
            <div className="h-5 w-[40%] bg-red-800 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
