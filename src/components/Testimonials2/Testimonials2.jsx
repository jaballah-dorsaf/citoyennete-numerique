import React from 'react';
import "./Testimonials2.css";
import sections from '../../constants/data2';
import {MdStar} from "react-icons/md";

const gradient = "url(#blue-gradient)";

const Testimonials2 = () => {

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
                    <h3>الخصوصية الرقمية</h3>
                    <p className='text'>. تعرف الخصوصية الرقمية على أنها حق المستخدمين بالحفاظ على سرية البيانات المتعلقة بهويتهم أو سلوكهم أثناء استخدام الأنظمة</p>
                </div>
                 <h4>كيفية الحفاظ على الخصوصية الرقمية عند استخدام الإنترنت</h4>
                <div className='item-list grid text-black text-center'>
                    {
                        sections.testimonials.map(testimonial => {
                            showRating(testimonial.rating);
                            return (
                                <div className='item translate-effect bg-black-new-a' key = {testimonial.id}>
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

export default Testimonials2
