import React from 'react';

import "./About3.css";

import images from '../../constants/images';



const About3 = () => {

  return (

    <section className='about section-p bg-white' id = "about">

        <div className='container'>

            <div className='about-content grid text-center'>

                <div className = "content-left">

                    <img src = {images.about_main_img} alt = "" />

                </div>

                <div className='content-right'>

                    <p><h4 className='fasl'> : الفصل الثالث</h4><h2 className='fousoul'>الأخلاقيات الرقمية</h2></p>

                    <p className = "rightt"><ol>لا اتنمر على الاخرين  - </ol></p>

                    <p className = "rightt"><ol> التزم بآداب الحوار والمناقشة -</ol></p>

                    <p className = "rightt"><ol>لا انشر صور او مقالات تخل بالأخلاق -</ol></p>

                    <p className = "rightt"><ol> لا اتابع صفحات سيئة  -</ol></p>

                    <p className='rightt'><ol> أكون فعالا في الحد من المحتوى الذي يتعارض مع القيم الأخلاقية والانسانية - </ol></p>
                    

                </div>

            </div>

        </div>

    </section>

  )

}



export default About3