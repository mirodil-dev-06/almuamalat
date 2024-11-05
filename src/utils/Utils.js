import React from 'react';
import "../assets/styles/utils.scss";

const DefaultButton = ({text}) => {
    return (
      <button className='default__bnt'>
        {text}
      </button>
    )
  }

  const Container = ({children}) => {
    return (
      <div className='container'>
        {children}
      </div>
    )
  }
  export { DefaultButton, Container }  