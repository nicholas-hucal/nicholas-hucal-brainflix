import './NotFound.scss';
import image from '../../assets/images/images/404.png';
import Button from '../Button/Button.js';

function NotFound({clickHandler}) {
    return (
        <section className='not-found'>
            <div className='not-found__container'>
                <img className='not-found__image' src={image} alt="page not found" />
                <Button
                    className="not-found__link"
                    text="goto homepage"
                    type="link"
                    href="/"
                    clickHandler={clickHandler}
                />
            </div>
        </section>
    )
}

export default NotFound