import React from 'react';
import './Notification.scss';
import close from '../../assets/images/icons/close.svg';

function Notification({ title, message, clickHandler }) {
  return (
    <section className='notification'>
        {clickHandler && <div className='notification__dismiss' onClick={clickHandler}>x</div>}
        <h3 className='notification__title'>{title}</h3>
        <p className='notification__message'>{message}</p>
    </section>
  )
}

export default Notification