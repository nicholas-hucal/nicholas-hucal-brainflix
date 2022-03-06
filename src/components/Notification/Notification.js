import React from 'react';
import './Notification.scss';

function Notification({ title, message, clickHandler }) {
  return (
    <section className='notification'>
        <div className='notification__body'>
          {clickHandler && <div className='notification__dismiss' onClick={clickHandler}>x</div>}
          <h3 className='notification__title'>{title}</h3>
          <p className='notification__message'>{message}</p>
        </div>
    </section>
  )
}

export default Notification