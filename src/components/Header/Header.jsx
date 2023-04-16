import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./Header.css";

const Header = () => {
  return (
    <header className='header flex flex-center flex-column'>
        <Navbar />
        <div className='container'>
            <div className='header-content text-center flex flex-column'>
                <h1 className='text-uppercase header-title'>المواطنة الرقمية</h1>
                <p className='text-lead'> صفات المواطن الرقمي الإيجابي</p>
                <p className='text-lead'> الصحة و الرفاهية الرقمية</p>
                
            </div>
        </div>
    </header>
  )
}

export default Header