import React from 'react';
import { useLocation } from 'react-router-dom';

const Desc = () => {
  const location = useLocation(); 
  const { item } = location.state || {}; 

  return (
    <div className="p-5">
      <h1 className="text-6xl text-center  font-bold">{item.nomi}</h1>
        <div className='flex flex-col justify-center items-center'>
          <img src={item.rasmi} alt={item.nomi} className="w-full max-w-xl p-12 my-4" />
          <p className="text-4xl text-center  font-bold text-red-700 m-3 text-">{item.narxi}</p>
          <p className="text-lg text-center">{item.about}</p>
        </div>
    </div>
  );
};

export default Desc;
