import React from 'react';
import './Notification.scss';

function Notification({title, message}) {
  return (
    <section className='notification'>
        <h3 className='notification__title'>{title}</h3>
        <p className='notification__message'>{message}</p>
    </section>
  )
}

export default Notification