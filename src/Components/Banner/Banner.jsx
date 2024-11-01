import React from 'react';

const Banner = () => {
    return (
        <div className="hero bg-gray-200 rounded-xl my-10 ">
  <div className="hero-content flex-col lg:flex-row-reverse text-gray-800">
    <img 
      src="/src/assets/silent.jpg"
      className="max-w-xs rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold mb-12 ">Book To Freshen up Your Bookshelf</h1>
      
      <button className="btn bg-green-500 text-white">View the list</button>
    </div>
  </div>
</div>
    );
};

export default Banner;