//import React from 'react';
import s from './Container.module.css';
import PropTypes from 'prop-types'; 
const Container = ({ children }) => {return (<div className={s.Container}>{children}</div>);}
Container.propTypes = {
    children: PropTypes.element.isRequired
  };
export default Container;
