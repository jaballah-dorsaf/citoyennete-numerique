import React from 'react';

import "./About2.css";

import images from '../../constants/images';



const About2 = () => {

  return (

    <section className='about section-p bg-white' id = "about">

        <div className='container'>

            <div className='about-content grid text-center'>

                <div className = "content-left">

                    <img src = {images.customer_img_1} alt = "" />

                </div>

                <div className='content-right'>

                    <p><h4 className='fasl'> : الفصل الثاني</h4><h2 className='fousoul'>الخصوصية الرقمية</h2></p>

                    <p className = "rightt"><ol>احرص على حماية معطياتي الشخصية وعدم نشرها - </ol></p>

                    <p className = "rightt"><ol>احترم الاخرين وخصوصيتهم وملكيتهم الفكرية -</ol></p>

                    <p className = "rightt"><ol> لا اتسبب في الضرر لعملهم او هويتهم الرقمية -</ol></p>

                    <p className = "rightt"><ol> إذا طلب مني أحد ان اعطي بياناتي الشخصية وانا العب لا اعطي -</ol></p>

                    <p className='rightt'><ol> لا أرسل صوري شخصية الى اشخاص لا اعرفهم قديما - </ol></p>
                    

                </div>

            </div>

        </div>

    </section>

  )

}



export default About2