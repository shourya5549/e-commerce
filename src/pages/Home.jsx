import React from 'react';
import home from '../assets/home.png';

function Home() {
  return (
    <div className='bg-gray-300'>
      <div className="flex flex-col lg:flex-row mx-4 lg:mx-16 bg-gray-300">
        <div className="w-full lg:w-1/2 bg-gray-300">
          <div className="p-4 lg:p-8 mt-4 lg:mt-8">
            <p className="text-4xl lg:text-7xl font-extrabold">ONLINE</p>
            <p className="text-3xl lg:text-6xl">SHOPPING</p>
          </div>
          <div className="ml-4 lg:ml-8">
            <p className="text-base lg:text-lg font-extrabold">Your One Stop Solution</p>
          </div>

          <div>
            <p className="p-4 lg:p-8 lg:mr-8 text-sm lg:text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, cum sed. Fugiat,
              tempora ad corporis velit deserunt rerum, odio recusandae sit eaque, quisquam expedita neque
              veritatis quas facere vero eos?
            </p>
          </div>
          <div className="bg-black text-white px-4 lg:px-6 py-2 w-40 lg:w-44 font-bold rounded-3xl ml-4 lg:ml-8 hover:scale-105 hover:shadow-xl flex flex-row gap-3 cursor-pointer">
            <button>LEARN MORE</button>
            <svg
              className="w-3 h-4 text-white translate-y-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
              />
            </svg>
          </div>
        </div>
        <div className="w-full lg:w-1/2 border-4 lg:border-8 border-gray-300 mt-4 lg:mt-0">
          <img className="object-cover w-full h-full" src={home} alt="Shopping" />
        </div>
      </div>
    </div>
  );
}

export default Home;