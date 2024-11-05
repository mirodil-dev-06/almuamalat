import React, { useState } from 'react';
import uzbFlag from '../../assets/images/uzbFlag.png';
import engFlag from '../../assets/images/engFlag.png';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import '../../assets/styles/lang.scss';

const Lang = () => {
  const [language, setLanguage] = useState('en');
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (lang) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="language-selector">
      <div className="selected-language" onClick={toggleDropdown}>
        <img src={language === 'en' ? engFlag : uzbFlag} alt={language === 'en' ? 'English' : 'Uzbek'} />
        <span>{language === 'en' ? 'ENG' : 'UZB'}</span>
        {isOpen ? <FaChevronUp className="dropdown-icon" /> : <FaChevronDown className="dropdown-icon" />}
      </div>
      {isOpen && (
        <div className="language-options">
          <div onClick={() => handleChange('en')}>
            <img src={engFlag} alt="English" /> ENG
          </div>
          <div onClick={() => handleChange('uz')}>
            <img src={uzbFlag} alt="Uzbek" /> UZB
          </div>
        </div>
      )}
    </div>
  );
};

export default Lang;
