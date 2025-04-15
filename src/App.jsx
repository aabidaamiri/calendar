import React from 'react'
import './App.css'
import { RxRulerSquare } from "react-icons/rx";
import { IoShareOutline } from 'react-icons/io5';
import { FiPrinter } from 'react-icons/fi';

const App = () => {
  return (
    <div className='bg-gray-100 h-screen'>
      <header className='flex justify-between p-7'>
        <div>
          <h1 className='lg:text-2xl font-bold'>Life Calendar</h1>
        </div>
        <div className='flex justify-between'>
          <button className='text-[0.8rem] font-medium bg-white pr-6 pl-6 pt-1 pb-1 border-1 rounded-2xl mr-3 lg:mr-5'>Sign In</button>
          <button className='text-[0.8rem] font-medium bg-black text-white pr-6 pl-6 pt-1 pb-1 border-1 rounded-2xl'>Sign Up</button>
        </div>
      </header>
      <main className='lg:w-[65%] m-auto'>
        <h1 className='w-[75%] m-auto text-center text-2xl lg:text-5xl font-bold pt-10'>Start a visual journey through time</h1>
        <p className='text-center font-medium w-[80%] lg:w-[78%] lg:font-medium text-gray-800 m-auto lg:text-[1.2rem]  pt-5'>Map your milestones and moments in a unique timeline. Start now by entering your birthdate.</p>
      
        <br />
        <br />

        <div className='w-[90%] m-auto flex justify-between'>
          <input type="text" placeholder='select your birthdate' className='bg-white w-43 p-3 border-1 border-gray-300 rounded-2xl placeholder:text-center placeholder:text-sm'/>

          <div className='flex gap-2'>
            <button className='bg-white pr-4 pl-4 border-1 border-gray-300 rounded-4xl'><RxRulerSquare/></button>
            <button className='bg-white pr-4 pl-4 border-1 border-gray-300 rounded-4xl'><IoShareOutline/></button>
            <button className='bg-white pr-4 pl-4 border-1 border-gray-300 rounded-4xl'><FiPrinter/></button>
          </div>
          
        </div>
        <div className='bg-white h-40 m-6 p-6 shadow-2xl shadow-gray-300'>
          <p className='text-[0.2rem]'>Weeks</p>
          <div className='grid grid-cols-2'>
            <div>
              <div className='h-1 w-1 m-0.5 bg-gray-200 border-1 border-gray-400'></div>
            </div>

            <div>
            <div className='h-1 w-1 m-0.5 bg-gray-200 border-1 border-gray-400'></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
