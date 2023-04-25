import React from 'react';

import "./About.css";

import images from '../../constants/images';



const About = () => {

  return (

    <section className='about section-p bg-white' id = "about">

        <div className='container'>
        <div className='section-t-new'>

          <h3>ميثاق المواطنة الرقمية</h3>

        </div>

            <div className='about-content grid text-center'>
                
                <div className = "content-left">
                   

                </div>

                <div className='content-right'>

                    <p><h4 className='fasl'> : الفصل الأول</h4><h2 className='fousoul'>السلامة الرقمية</h2></p><br />
                    <img src = {images.about_main_img} alt = "" />

                       <br />
                    <p className = "rightt"><ol> .لا أحمّل البرامج والتطبيقات من مصادر غير موثوقة - </ol></p>

                    <p className = "rightt"><ol> .أتجنب ان اعطي البريد الالكتروني لمن يطلبه -</ol></p>

                    <p className = "rightt"><ol> .اكتب كلمة سر قوية ولا اعطيها الا الى والديا -</ol></p>

                    <p className = "rightt"><ol> . إذا واجهت مشكلة اتصل بالأمن الالكتروني -</ol></p>

                    <p className='rightt'><ol> عدم فتح رسائل مجهولة المصدر -</ol></p>
                    
                    
                </div>

            </div>

        </div>

    </section>

  )

}



export default About