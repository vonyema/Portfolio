import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from "react-scroll"; 
import { motion } from "framer-motion";


const Home = () => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-[#0a192f]"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-7xl font-bold text-white">
          I'm a Full Stack Software Developer
        </h2>
        <p className="text-gray-500 py-4 max-w-md">
        Frontend Developer And Web Designer 
        </p>
        <div>
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
      <div>
      <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
        <img
          src={'https://i.ibb.co/ZB7BsfJ/IMG-D68303607664-1.jpg"'}
          alt="my profile"
          className="rounded-full mx-auto w-2/3 md:w-full"
        /> </motion.div>
      </div>
    </div>
  </div>
  );
};
export default Home;