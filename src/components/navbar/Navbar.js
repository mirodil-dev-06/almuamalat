import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import '../../assets/styles/navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='navbar__item'>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              classNames('navbar__link', { 'navbar__item-active': isActive })
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/programs"
            className={({ isActive }) =>
              classNames('navbar__link drop', { 'navbar__item-active': isActive })
            }
          >
            Programs

            <ul className='dropdown'>

              <li className='dropdown__item'>
              <NavLink
            to="#"
            className={({ isActive }) =>
              classNames('navbar__link', { 'navbar__item-active': isActive })
            }
          >
            International educational programs
          </NavLink>
              </li>
              <li className='dropdown__item'>
              <NavLink
            to="#"
            className={({ isActive }) =>
              classNames('navbar__link', { 'navbar__item-active': isActive })
            }
          >
            Specialized courses
          </NavLink>
              </li>
              <li className='dropdown__item'>
              <NavLink
            to="#"
            className={({ isActive }) =>
              classNames('navbar__link', { 'navbar__item-active': isActive })
            }
          >
            Islamic Finance Literacy Course
          </NavLink>
              </li>
              <li className='dropdown__item'>
              <NavLink
            to="#"
            className={({ isActive }) =>
              classNames('navbar__link', { 'navbar__item-active': isActive })
            }
          >
            Certification program
          </NavLink>
              </li>
            </ul>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/finance"
            className={({ isActive }) =>
              classNames('navbar__link', { 'navbar__item-active': isActive })
            }
          >
            Finance
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              classNames('navbar__link', { 'navbar__item-active': isActive })
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
