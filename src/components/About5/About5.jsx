import React from 'react';

import "./About5.css";

import images from '../../constants/images';



const About5 = () => {

  return (

    <section className='about section-p bg-white' id = "about">

        <div className='container'>

            <div className='about-content grid text-center'>

                <div className = "content-left">

                    <img src = {images.customer_img_4} alt = "" />

                </div>

                <div className='content-right'>

                    <p><h4 className='fasl'> : الفصل الخامس</h4><h2 className='fousoul'>الاستخدام الرقمي الإيجابي</h2></p>

                    <p className = "rightt"><ol> أحافظ على صحتي الجسدية والنفسية من خلال الموازنة - </ol></p>
                    <p className='rightt'><ol> .وضبط الوقت بين العالم الافتراضي والواقعي</ol></p>

                    <p className = "rightt"><ol>أكون مسؤولاً عن تعاملي مع العالم الرقمي، وأن أحترم القوانين -</ol></p>
                    <p className='rightt'><ol> .والقواعد المنظمة لذلك</ol></p>

                    <p className = "rightt"><ol>أعزز قيم التضامن والتعاطف الاجتماعي والمعاملة بإيجابية -</ol></p>
                    <p className='rightt'><ol> .واستخدم منصات التواصل الاجتماعي بحكمة</ol></p>

                    <p className = "rightt"><ol> .اكشف واطور من أنماط التعلم عن بعد -</ol></p>

                    <p className='rightt'><ol> .اتعلم وأتمكن من التكنولوجيا - </ol></p>

                    <p className='rightt'><ol> .اتعامل مع التكنولوجيا بذكاء ، لا أستعملها فقط للعب -</ol></p>
                     
                </div>

            </div>

        </div>

    </section>

  )

}



export default About5