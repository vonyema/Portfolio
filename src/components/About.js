import React from "react";
const About = () => { 
  return (
    <div
        name="about"
        id="about"
        className="w-full h-screen bg-[#0a192f] text-gray-300"
      >
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
              <div className="sm:text-right pb-8 pl-4">
                <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                  About Me
                </p>
              </div>
              <div></div>
            </div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
              <div className="sm:text-right text-4xl font-bold">
                <p>
                  Hi. I'm Victoria Onyema, nice to meet you. Please take a
                  look around.
                </p>
              </div>
              <div>
                <p>
                  Hi there! My name is Victoria Onyema and I'm a career changer who's passionate about software development. After working for 10 years in the Hospitality Industry, I decided to pursue my interest in programming and began studying software development at General Assembly .
                  Through self-study and taking online courses, I've gained experience with several technologies, including but not limited to React, Mongoose, Express, JavaScript, CSS, and HTML5. During my studies, I completed several projects that allowed me to apply my skills in practical ways. For example, I built a Social Media application using React and Express, which helped me develop a strong understanding of RESTful APIs and user authentication.
                  What I love most about software development is the opportunity to constantly learn and grow. As a developer, I'm excited about the challenge of solving complex problems and creating innovative solutions. I'm eager to join a team where I can use my skills and experience to make a meaningful impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
export default About;