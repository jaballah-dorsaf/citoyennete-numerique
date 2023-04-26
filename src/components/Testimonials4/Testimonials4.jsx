import React from 'react';
import "./Testimonials4.css";
import sections from '../../constants/data4';
import {MdStar} from "react-icons/md";

const gradient = "url(#blue-gradient)";

const Testimonials4 = () => {

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
                    <h3>السمعة الرقمية</h3>
                    <p className='text'>.هي عندما يساهم مجموعة كبيرة من الأشخاص ممن جربوا المنتج أو تعاملوا مع الشخص في بناء سمعة له قد تكون جيدة أو سيئة  على شبكة الانترنت بهدف مساعدة مجموعة أخرى تأتي من بعدهم ممن لم يجربوا أو يحتكوا
 </p>
                </div>
                 <h4>كيفية الحفاظ على السمعة الرقمية عند استخدام الإنترنت</h4>
                <div className='item-list grid text-black text-center'>
                    {
                        sections.testimonials.map(testimonial => {
                            showRating(testimonial.rating);
                            return (
                                <div className='item translate-effect bg-black-new-c' key = {testimonial.id}>
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

export default Testimonials4
