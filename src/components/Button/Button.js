import './Button.scss';

function Button({ className, alt, text, type, image, clickHandler }) {
    return (
        <label className={`button ${className}`} onClick={clickHandler}>
            <img className='button__image' src={image} alt={alt} />
            <input className='button__input' type={type} value={text} />
        </label>
    )
}

export default Button