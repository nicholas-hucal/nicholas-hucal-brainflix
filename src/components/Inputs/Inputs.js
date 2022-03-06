import React from 'react';
import './Inputs.scss';

function Inputs({field, handleChange}) {
    return (
        <label className='input'>
            {field.label}
            {field.type === 'text' && 
                <input
                    className={`input__input ${!field.error ? '' : 'input__input--has-error'}`}
                    type={field.type}
                    name={field.name}
                    onChange={(event) => handleChange(event, field)}
                    placeholder={field.placeholder}
                    value={field.text}
                />
            }
            {field.type === 'textarea' && 
                <textarea
                    className={`input__textarea ${!field.error ? '' : 'input__textarea--has-error'}`}
                    type={field.type}
                    name={field.name}
                    onChange={(event) => handleChange(event, field)}
                    placeholder={field.placeholder}
                    value={field.text}>     
                </textarea>
            }
            {field.error ? <span className='input__help'>{field.validation.errorMessage}</span> : ''}
        </label>
    )
}

export default Inputs