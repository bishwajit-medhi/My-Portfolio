import React from "react";
//import ME from '../images/me.jpg'

export default function Contact() {
  return (
    <div className="snap-start  mt-10 " id="contact">

      <div className="lg:flex lg:justify-between mx-2">

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14321.64489962173!2d91.8415882!3d26.183297949999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375af7c8cc7db003%3A0xe94b7e3c425f85b8!2zMjbCsDEwJzUyLjkiTiA5McKwNTAnNDcuOSJF!5e0!3m2!1sen!2sin!4v1665204642935!5m2!1sen!2sin" className="w-full lg:w-[50%]" height="auto" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="map"></iframe>

        <div className=" lg:px-24 lg:mx-0 w-full lg:w-[50%] text-center">
          <div className="text-center pt-3 lg:pt-0">
            <span className="font-semibold text-3xl  ">Get in Touch</span>
          </div>
          <div className="border-2 border-red-900">
          <div className="text-center mt-6">
            <p className="mb-5">
            Want to Work together or have any query?
            </p>
              <button className="mb-3 py-3 px-5 text-red-800 font-serif font-medium border-2 border-red-700 bg-red-100 hover:bg-red-200 hover:text-red-900 rounded-md cursor-pointer"> <a href="mailto:bmedhi123@gmail.com" className="py-3 px-5">Say Hello</a> </button>
          </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}
