import React from 'react';
import FlightIcon from '@mui/icons-material/Flight';
import MenuIcon from '@mui/icons-material/Menu';
import { grey } from '@mui/material/colors';

const App: React.FC = () => {
  return (
    <div className=''>
      <div className='max-h-screen absolute right-0 left-0 -z-50'>
        <img src='plane.jpg' className='opacity-[0.9] w-full object-cover max-h-screen' alt=''/>
      </div>
      
      <div className='flex flex-row justify-between mx-16'>
        <h1 className='my-[-90px] mx-[-30px] text-[320px] font-semibold'>Hyer</h1>

        <div className='flex flex-col mt-12'>

          <div className='flex flex-row justify-between items-center ml-4'>
            <ul className='flex flex-row text-xl font-helvetica font-light'>
              <li className='mx-4'>Solutions</li>
              <li className='mx-4'>About Us</li>
              <li className='ml-4 mr-16'>Contact</li>
            </ul>
            <div className='flex flex-row'>
              <button className='flex justify-center items-center bg-black border-none w-12 h-12 mx-4 rounded-full'>
                <FlightIcon style={{ color: grey[300], fontSize: 18 }}/>
              </button>
              <button className='flex justify-center items-center bg-black border-none w-12 h-12 rounded-full'>
                <MenuIcon style={{ color: grey[300], fontSize: 18 }}/>
              </button>
            </div>
          </div>

          <div className='mt-16 ml-8 text-[58px] font-semibold leading-none'>
            Personalised<br/>Aviation
          </div>
        </div>
      </div>

      <div className='flex flex-row justify-between items-center w-full mt-[310px]'>
        <div className='ml-14 text-2xl font-semibold'>More flexibility, freedom and choice!</div>
        <div className='flex flex-row mr-40 text-lg font-medium'>
          <button className='bg-black mr-5 text-gray-50 py-[11px] px-5 rounded-full'>Book an Aircraft</button>
          <button className='bg-black text-gray-50 py-[11px] px-5 rounded-full'>Book a Shared Flight</button>
        </div>
      </div>
    </div>
  );
}

export default App;