import './Button.scss';

function Button(props) {
    return (
        <label className={'button ' + props.className}>
            <img className='button__image' src={props.image} alt={props.alt} />
            <input className='button__input' type={props.type} value={props.text} />
        </label>
    )
}

export default Button