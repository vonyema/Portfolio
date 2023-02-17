import React from 'react';

const Works = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
            Projects
          </p>
          <p className='py-6 text-2xl'>Check out some of my most recent work</p>
        </div>
{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${'https://i.ibb.co/JqhvR59/4-CE00749-9-AC2-42-CF-B21-C-BCE8-A3-AC5-B32.jpg'})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Food For The Soul
              </span>
              <p className='text-center'>Food For The Soul is a recipe blog built with Express,  and Mongodb</p>
              <div className='pt-8 text-center'>
                <a href='https://project-2.herokuapp.com/recipeBook'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Launch App
                  </button>
                </a>
                <a href='https://github.com/vonyema/Project-2.git'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${'https://i.ibb.co/sKd1pDH/053-D9979-C6-F2-4-C43-A551-6-DC1-AAB75788.jpg'})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Tasty Bakery
              </span>
              <p className='text-center'>Tasty Bakery is a store built with Django and Python</p>
              <div className='pt-8 text-center'>
                <a href='https://tasty-bakery.herokuapp.com/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Launch App
                  </button>
                </a>
                <a href='https://github.com/vonyema/TastyBakery'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${"https://i.ibb.co/9qM5Z3b/BE7-F5-F1-F-858-D-402-C-B05-D-022-C8-CA4564-F.jpg"})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Cascade Social Media App
              </span>
              <p className='text-center'>Cascade social media application built with Express, Node.js, React and Mongodb</p>
              <div className='pt-8 text-center'>
                <a href='https://thriving-syrniki-2edbeb.netlify.app/newsfeed'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Launch App
                  </button>
                </a>
                <a href='https://github.com/vonyema/cascade-frontend.git'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Works;