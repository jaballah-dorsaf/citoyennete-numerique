import React from 'react';
import images from '../../constants/images';
import "./Qualities.css";

const Qualities = () => {
  return (
    <section className='qualities section-p bg-md-black' id = "qualities">
        <div className='container'>
            <div className='qualities-content grid'>
                
                <div className='content-left'>
                    <div className='section-t text-center'>
                        <h3>صفات المواطن الإيجابي الرقمي</h3>
                    </div>
                </div>  
                <div className='content-right'>
                    <img src = {images.professionals_main_img} alt = "" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualities
