import React from "react";

const Contact = () => {
  return (
    <div className="relative">
      <div className="flex items-center min-h-0 justify-center bg-gradient-to-r from-red-500 to-blue-500 to-purple-600">
        <div className="text-center py-16">
          <h3 className="text-neutral-50   md:text-[40px] md:p-[1px]">
            Let's Connect With Us For Your Great Future Innovation
          </h3>
          <p className="md:text-xl text-white text-lg md:p-[24px] ">
            Unveiling the Future of Technology, Expert Insights and Innovations
            Our Mission Help Business Growth
          </p>
          <button className=" bg-green-100 mt-3  text-black font-sans rounded-md font-bold w-40 h-12 text-lg">
            Find jobs
          </button>
        </div>
      </div>
      <div className="container bg-slate-300  md:ml-10 md:my-6 shadow-xl  rounded-lg py-14">
        <h1 className="md:text-4xl text-4xl text-orange-950 font-serif mt-5 md:p-6 text-center ml-9">
          Get In Touch
        </h1>
        <div className="md:text-xl  text-xl md:p-[24px] text-center">
          We accept challenges with passion and nveiling the future of
          technology, expert insights and innovations
        </div>
        <div className="flex flex-wrap -mx-4 gap-8 ml-10 md:ml-36 mt-5 -mb-3 ">
          <div className="md:w-60 w-48 px-4md: mb-8  bg-white border-2 border-slate-500 text-center">
            <div className=" font-bold text-2xl text-slate-900 ">Address</div>
            <div>3rd Floor, Amravati Complex, Lalpur chowk, Ranchi</div>
          </div>
          <div className="md:w-60 w-48 px-4md: mb-8  bg-white border-2 border-slate-500 text-center">
            <div className=" font-bold text-2xl text-slate-900 ">Address</div>
            <div>3rd Floor, Amravati Complex, Lalpur chowk, Ranchi</div>
          </div>
          <div className="md:w-60 w-48 px-4md: mb-8  bg-white border-2 border-slate-500 text-center">
            <div className=" font-bold text-2xl text-slate-900 ">Address</div>
            <div>3rd Floor, Amravati Complex, Lalpur chowk, Ranchi</div>
          </div>
          <div className="md:w-60 w-48 px-4md: mb-8  bg-white border-2 border-slate-500 text-center">
            <div className=" font-bold text-2xl text-slate-900 ">Address</div>
            <div>3rd Floor, Amravati Complex, Lalpur chowk, Ranchi</div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-slate-900 text-white mt-7 rounded-md mb-4 font-bold w-40 h-12 text-lg">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
