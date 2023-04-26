import React from 'react';
import "./Testimonials5.css";
import sections from '../../constants/data5';
import {MdStar} from "react-icons/md";

const gradient = "url(#blue-gradient)";

const Testimonials5 = () => {

    let startList;
    const showRating = (starCount) => {
        startList = new Array(starCount);
        for(let i = 0; i < startList.length; i++){
            startList[i] = <MdStar size = {25} style = {{ fill: gradient }} />;
        }
        return startList;
    }

  return (
    <section className='testimonials section-p bg-white' id = "testimonials">
        <div className='container'>
            <div className='testimonials-content'>
                <div className='section-t text-center'>
                    <h3>الاستخدام الرقمي الإيجابي</h3>
                    <p className='text'>. من خلال تعزيز الاتصال الإلكتروني والشمول المالي وإمكانيات الوصول إلى الخدمات التجارية والعامة، يمكن أن تمثل التكنولوجيا عاملاً كبيراً في تحقيق المساواة. ففي قطاع الصحة، على سبيل المثال، تساعد التكنولوجيات الرائدة التي يدعمها الذكاء الاصطناعي في إنقاذ الأرواح وتشخيص الأمراض وإطالة العمر المتوقع</p>
                </div>
                 
                <div className='item-list grid text-black text-center'>
                    {
                        sections.testimonials.map(testimonial => {
                            showRating(testimonial.rating);
                            return (
                                <div className='item translate-effect bg-black-new-d' key = {testimonial.id}>
                                    <div className='item-img'>
                                        <img src = {testimonial.image} alt = "" />
                                    </div>
                                    
                                    <p className='item-text text'>{testimonial.text}</p>
                                    <ul className='flex item-rating flex-center'>
                                        {
                                            startList.map((star, index) => {
                                                return (
                                                    <li key = {index}>{star}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials5
