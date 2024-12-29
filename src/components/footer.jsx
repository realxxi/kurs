import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Footer = () => {
  const position = [42.47179563788111, 59.58742317376079];
  return (
    <div className='bg-black px-5 mt-5' >
      <div className='flex flex-row bg-black text-white justify-between'>
        <div className='flex-1 mt-[30px]'>
          <p>Manzilimiz: <span className='text-red-600 font-bold'>Nukus shahri</span> </p>
          <p>Telefon raqamimiz: <span className='text-red-600 font-bold'> +998 97 241 8149</span></p>
          <div>
            <h1 className='text-4xl my-2 text-center'>Ijtimoiy tarmoqlarda</h1>
            <div className='flex justify-between px-10 py-5 items-center'>
              <div className='flex justify-center items-center flex-col'>
                <a href="https:/t.me/abdullaev_xxi" className='bg-black'><i className='bx bxl-telegram bg-black text-white' ></i></a>
                <p className='text-red-600 font-bold'>Telegram</p>
              </div>
              <div className='flex justify-center items-center flex-col'>
                <a href="https:/instagram.com/abdullaev.xxi" className='bg-black'><i className='bx bxl-instagram bg-black text-white' ></i></a>
                <p className='text-red-600 font-bold'>Instagram</p>
              </div>
              <div className='flex justify-center items-center flex-col'>
                <a href="https:/pinterest.com/abdullaevxxi" className='bg-black'><i className='bx bxl-pinterest bg-black text-white' ></i></a>
                <p className='text-red-600 font-bold'>Pinterest</p>
              </div>
              <div className='flex justify-center items-center flex-col'>
                <a href="https:/x.com/cosmoxxi" className='bg-black'><i className='bx bxl-twitter bg-black text-white' ></i></a>
                <p className='text-red-600 font-bold'>Twitter</p>
              </div>
              <div className='flex justify-center items-center flex-col'>
                <a href="https:/www.youtube.com/@cosmo_xxi" className='bg-black'><i className='bx bxl-youtube bg-black text-white' ></i></a>
                <p className='text-red-600 font-bold'>YouTube</p>
              </div>
            </div>
            <div className='m-0 p-[9%]  font-bold text-4xl'>
              <h1 className=''><span className='text-red-600'> XIZMATLARIMIZDAN</span> FOYDALANGANINGIZDAN MAMNUNMIZ<span className='text-red-600'>!</span></h1>
            </div>
          </div>
        </div>
        <div className='w-[40%] f-1 h-[5%]'>
          <MapContainer center={position} zoom={14} style={{ width: '100%', height: '400px' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* Marker (belgi) qo'shish */}
            <Marker position={position}>
              <Popup>
                <b>London</b><br />This is the city of London.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <div className='flex justify-center mt-9 bg-black text-white items-center text-xl flex-col'>
        <p>This website was created by <b className='text-red-700'>ABDULLAEV HAKIMJON</b>. All code is copyrighted</p>
        <a href="https://t.me/abdullaev_xxi"><b className='text-red-700 bg-black'>©ABDULLAEV</b></a>
      </div>
    </div>

  )
}

export default Footer
