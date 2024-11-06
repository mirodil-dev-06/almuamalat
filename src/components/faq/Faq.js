import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import faqData from '../faq/FaqData';
import '../../assets/styles/faq.scss';
import { FaXmark } from 'react-icons/fa6';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    return (
        <div className="faq">
            <h2 className='faq__title'>Frequently Asked Questions</h2>
            <p className='faq__subtitle'>If you have any further questions, please contact us</p>
            <div className='faq__content'>
                {faqData.map((item, index) => (
                    <div key={index} className="faq__item">
                        <div className="faq__item-question" onClick={() => toggleFAQ(index)}>
                            {item.question}
                            <span className="faq__item-icon">
                                {activeIndex === index ? <FaXmark /> : <FaPlus />}
                            </span>
                        </div>
                        <div className={`faq__item-answer ${activeIndex === index ? 'active' : ''}`}>
                            {item.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
