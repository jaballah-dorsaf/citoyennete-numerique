import React from 'react';
import "./Contact.css";
import Info from './Info';
import Info2 from './Info2';
import Info3 from './Info3';
import Info4 from './Info4';



const Contact = () => {
  return (
   
    <section className='contact section-p-top bg-black' id = "contact">
        <h2 className='textttt'>و لمزيد التعرف على فصول هذا الميثاق نقترح عليكم بعض الالعاب لتعزيز غرس قيم المواطنة الرقمية </h2><br /><br />
        <Info />
        <Info2 />
        <Info3 />
        <Info4 />
    </section>
  )
}

export default Contact
