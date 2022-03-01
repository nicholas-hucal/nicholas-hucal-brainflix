import './Button.scss';
import { Link } from 'react-router-dom'

function Button({ className, alt, text, type, image, clickHandler, href }) {
    if (type !== 'link') {
        return (
            <label className={`button ${className}`} onClick={clickHandler}>
                <img className='button__image' src={image} alt={alt} />
                <input className='button__input' type={type} value={text} />
            </label>
        )
    } else {
        return (
            <Link to={href} className={`button ${className}`}>
                <img className='button__image' src={image} alt={alt} />
                <div className='button__link'>{text}</div>
            </Link>
        )
    }

}

export default Button