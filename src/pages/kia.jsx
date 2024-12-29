import React from 'react'
import data from './data'
import { Link } from 'react-router-dom'
const Kia = () => {
  return (
    <div>
      <div className='flex  justify-center items-center m-10 p-10 h-[30vh]'>
        <img className='w-[200px]' src={data.logos.kia} alt="" />
      </div>
      <div id='contain'>
        <div className='' id="grid">
          {
            data.kia.map((item, id) => (
              <div key={id} className='w-96 rounded-2xl border-black border-solid' id="cart">
                <img className='p-4' src={item.rasmi} alt="" />
                <h4 className='text-xl font-bold px-3'>{item.nomi}</h4>
                <p className='text-sm p-2'>{item.short}</p>
                <Link 
                to={`/desc/${item.id}`} 
                state={{ item }} 
              >
                <button className='text-xl font-bold px-3 bg-[#000] text-white rounded-lg mx-2 my-1'>
                  Batafsil
                </button>
              </Link>
              </div>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Kia