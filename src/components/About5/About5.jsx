import React from 'react';

import "./About5.css";

import images from '../../constants/images';



const About5 = () => {

  return (

    <section className='about section-p bg-white' id = "about">

        <div className='container'>

            <div className='about-content grid text-center'>

                <div className = "content-left">

                    <img src = {images.about_main_img} alt = "" />

                </div>

                <div className='content-right'>

                    <p><h4 className='fasl'> : الفصل الخامس</h4><h2 className='fousoul'>الاستخدام الرقمي الإيجابي</h2></p>

                    <p className = "rightt"><ol>أحافظ على صحتي الجسدية والنفسية من خلال الموازنة وضبط الوقت بين العالم الافتراضي والواقعي - </ol></p>

                    <p className = "rightt"><ol>أكون مسؤولاً عن تعاملي مع العالم الرقمي، وأن أحترم القوانين والقواعد المنظمة لذلك -</ol></p>

                    <p className = "rightt"><ol>أعزز قيم التضامن والتعاطف الاجتماعي والمعاملة بإيجابية، واستخدم منصات التواصل الاجتماعي بحكمة -</ol></p>

                    <p className = "rightt"><ol> اكشف واطور من أنماط التعلم عن بعد -</ol></p>

                    <p className='rightt'><ol> اتعلم وأتمكن من التكنولوجيا - </ol></p>

                    <p className='rightt'><ol>اتعامل مع التكنولوجيا بذكاء ، لا أستعملها فقط للعب - </ol></p>
                     
                </div>

            </div>

        </div>

    </section>

  )

}



export default About5