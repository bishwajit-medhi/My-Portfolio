import React from 'react'

export default function Service() {
  return (
    <div className="service snap-start" id="service">
      <div
        className="text-center mb-8 md:py-20 text-3xl font-bold font-serif">
        What Services We Provide
      </div>
      <div className="md:flex md:justify-between md:mx-28 text-center">
        <div className="m-14 md:">
          <span
            className="font-bold text-red-600 text-xl md:text-2xl hover:underline hover:underline-offset-8 hover:decoration-red-700"
            >Web Design
          </span>
          <br />
          <span className="md:text-center leading-7 text-gray-700">
          We expertise in building Creative, reliable and affordable professional websites using latest technologies.
          </span>
        </div>

        <div className="m-14 md:">
          <span
            className="font-bold text-red-600 text-xl md:text-2xl hover:underline hover:underline-offset-8 hover:decoration-red-700"
            >Web Development</span>
          <br />
          <span className="text-center leading-7 text-gray-700">
          We expertise in building Creative, reliable and affordable professional websites using latest technologies.
          </span>
        </div>

        <div className="m-14 md:">
          <span
            className="font-bold text-red-600 text-xl md:text-2xl hover:underline hover:underline-offset-8 hover:decoration-red-700"
            >Student Project</span>
          <br />
          <p className="text-center leading-7 text-gray-700">
          We help and guide students with their academics projects. Feel free to Contact Us. <span><a href="#contact" className='text-blue-700 italic'>Click Here</a></span>.
          </p>
        </div>
      </div>
    </div>
  )
}
