import React from 'react';
import "./Contact.css";
import { BsArrowRightCircle } from 'react-icons/bs';
import sections from '../../constants/data2';

const Info2 = () => {
  return (
    <div className='info bg-md-black section-p'>
      <div className='container'>
        <div className='info-content'>
            <div className='item-list grid text-center'>
                {
                    sections.contact.map(contact => {
                        return (
                          
                            <div className='item bg-dark translate-effect' key = {contact.id}>
                             
                                <span className='item-icon'>{contact.icon}</span>
                                <div className='item-info-text fw-5 text-white'><a href = "https://wordwall.net/ar/embed/4788aabdf90b45d380159a80d209973c?themeId=1&templateId=5&fontStackId=0">{contact.info}</a></div>
                                
      
                                <a href = "https://wordwall.net/ar/embed/4788aabdf90b45d380159a80d209973c?themeId=1&templateId=5&fontStackId=0" className='item-link text-grey'>
                                    <BsArrowRightCircle size = {50} />
                                </a>
                            </div>
                            
                        )
                    })
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Info2
