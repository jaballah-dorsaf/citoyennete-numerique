import React from 'react';
import "./Testimonials3.css";
import sections from '../../constants/data';
import {MdStar} from "react-icons/md";

const gradient = "url(#blue-gradient)";

const Testimonials3 = () => {

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
                    <h3>السلامة الرقمية</h3>
                    <p className='text'>.  تعني حماية أجهزة الحاسوب, والهواتف النقالة, والأجهزة اللوحية وغيرها من الأجهزة المرتبطة بالإنترنت؛ من التعرض للقرصنة، أو التصيد، أو غيرها من الأمور ، كما تُستخدم السلامة الرقمية لحماية المعلومات الخاصة من الانتشار، أو من استخدامها أو بيعها للشركات</p>
                </div>
                 <h4>كيفية الحفاظ على السلامة والخصوصية عند استخدام الإنترنت</h4>
                <div className='item-list grid text-black text-center'>
                    {
                        sections.testimonials.map(testimonial => {
                            showRating(testimonial.rating);
                            return (
                                <div className='item translate-effect bg-black-new-b' key = {testimonial.id}>
                                    <div className='item-img'>
                                        <img src = {testimonial.image} alt = "" />
                                    </div>
                                    <h4 className='item-name'>{testimonial.name}</h4>
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

export default Testimonials3
