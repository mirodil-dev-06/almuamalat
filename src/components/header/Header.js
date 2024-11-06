import React from 'react';
import Navbar from '../navbar/Navbar';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { Container, DefaultButton } from '../../utils/Utils';
import '../../assets/styles/header.scss';
import Lang from '../lang/Lang';

function Header() {
  return (
    <div className='header'>
      <Container>
        <div className='header__content'>
          <Link to="/">
            <img className="header__content-logo" src={logo} alt="logo" />
          </Link>
          <Navbar className="navbar" />
          <Lang className="lang" />
          <DefaultButton text='Login' className="default-button" />
        </div>
      </Container>
    </div>
  );
}

export default Header;
