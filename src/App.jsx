import React from 'react'
import './App.css'
import { RxRulerSquare } from "react-icons/rx";
import { IoShareOutline } from 'react-icons/io5';
import { FiPrinter } from 'react-icons/fi';

const App = () => {
  return (
    <div className='bg-gray-100'>
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
        <div className='bg-white h-40 m-6 p-5 shadow-2xl shadow-gray-300'>
          <p className='text-[0.2rem]'>Weeks</p>
          <div className='flex'>
            <span className='text-[2px] mr-[4.5px] ml-[2px]'>1</span>
            <span className='text-[2px] mr-[4.5px]'>2</span>
            <span className='text-[2px] mr-[4.5px]'>3</span>
            <span className='text-[2px] mr-[4.5px]'>4</span>
            <span className='text-[2px] mr-[4.5px]'>5</span>
            <span className='text-[2px] mr-[4.5px]'>6</span>
            <span className='text-[2px] mr-[4.5px]'>7</span>
            <span className='text-[2px] mr-[4.5px]'>8</span>
            <span className='text-[2px] mr-[4.5px]'>9</span>
            <span className='text-[2px] mr-[4.5px]'>10</span>
            <span className='text-[2px] mr-[4.5px]'>11</span>
            <span className='text-[2px] mr-[4.5px]'>12</span>
            <span className='text-[2px] mr-[4.5px]'>13</span>
            <span className='text-[2px] mr-[4.5px]'>14</span>
            <span className='text-[2px] mr-[4.5px]'>15</span>
            <span className='text-[2px] mr-[4.5px]'>16</span>
            <span className='text-[2px] mr-[4.5px]'>17</span>
            <span className='text-[2px] mr-[4.5px]'>18</span>
            <span className='text-[2px] mr-[4.5px]'>19</span>
            <span className='text-[2px] mr-[4.5px]'>20</span>
            <span className='text-[2px] mr-[4.5px]'>21</span>
            <span className='text-[2px] mr-[4.5px]'>22</span>
            <span className='text-[2px] mr-[4.5px]'>23</span>
            <span className='text-[2px] mr-[4.5px]'>24</span>
            <span className='text-[2px] mr-[4.5px]'>25</span>
            <span className='text-[3px] mr-1'>26</span>
          </div>
          {/* two columns in this page */}
          <div className='grid grid-cols-2'>
            {/* first column divs */}
            <div className='flex flex-col'>
              {/* first row */}
            <div className='flex mt-1 ml-[-5px]'>
            <span className='text-[2px] mr-[4.6px]'>1</span>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
            </div>
            <div className='flex mt-0.5 ml-[-5px]'>
            <span className='text-[2px] mr-[4.6px]'>2</span>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
            </div>
            <div className='flex mt-0.5 ml-[-5px]'>
            <span className='text-[2px] mr-[4.6px]'>3</span>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
            </div>
            <div className='flex mt-0.5 ml-[-5px]'>
            <span className='text-[2px] mr-[4.6px]'>4</span>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
            </div>
            <div className='flex mt-0.5 ml-[-5px]'>
            <span className='text-[2px] mr-[4.6px]'>5</span>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
            </div>
            <div className='flex mt-0.5 ml-[-5px]'>
            <span className='text-[2px] mr-[4.6px]'>6</span>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
            </div>
            <div className='flex mt-0.5 ml-[-5px]'>
            <span className='text-[2px] mr-[4.6px]'>7</span>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
            </div>
            <div className='flex mt-0.5 ml-[-5px]'>
            <span className='text-[2px] mr-[4.6px]'>8</span>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
            </div>
            <div className='flex mt-0.5 ml-[-5px]'>
            <span className='text-[2px] mr-[4.6px]'>9</span>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
            </div>
            <div className='flex mt-0.5 ml-[-7px]'>
            <span className='text-[3px] mr-1'>10</span>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
              <div className='h-1 w-1 mr-0.5 bg-gray-200 border-1 border-gray-400'></div>
            </div>
            </div>

            {/* second column divs */}
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
