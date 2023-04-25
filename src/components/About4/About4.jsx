import React from 'react';

import "./About4.css";

import images from '../../constants/images';



const About4 = () => {

  return (

    <section className='about section-p bg-white' id = "about">

        <div className='container'>

            <div className='about-content grid text-center'>

                <div className = "content-left">

                    

                </div>

                <div className='content-right'>

                    <p><h4 className='fasl'> : الفصل الرابع</h4><h2 className='fousoul'>السمعة الرقمية</h2></p><br />
                    <img src = {images.customer_img_3} alt = "" />
                    <br />
                    <p className = "rightt"><ol>.أمثل وطني أفضل تمثيل - </ol></p>

                    <p className = "rightt"><ol>.أدافع عن مكتسبات وسمعة الدولة في العالم الرقمي -</ol></p>

                    <p className = "rightt"><ol>.ألتزم بالولاء لوطني -</ol></p>

                    <p className = "rightt"><ol> أكون نموذجاً للقيم والعادات والتقاليد الوطنية والإنسانية  -</ol></p>
                    <p className = "rightt"><ol>.في العالم الرقمي</ol></p>

                </div>

            </div>

        </div>

    </section>

  )

}



export default About4