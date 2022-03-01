import './Nav.scss';
import logo from '../../assets/images/logo/BrainFlix-logo.svg';
import buttonImg from '../../assets/images/icons/upload.svg';
import searchImg from '../../assets/images/icons/search.svg';
import avatar from '../../assets/images/images/Mohan-muruge.jpg';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className='nav'>
            <figure className='nav__logo'>
                <Link className='nav__link' to="/">
                    <img className='nav__logo-image' src={logo} alt='brainflix logo' />
                </Link>
            </figure>
            <section className='nav__content'>
                <form className='nav__search-form'>
                    <label className='nav__search'>
                        <img className='nav__search-image' src={searchImg} alt="search for a video" />
                        <input className='nav__search-input' type='text' name='nav-search' placeholder='Search' />
                    </label>
                </form>
                <figure className='nav__avatar'>
                    <img className='nav__avatar-image' src={avatar} alt='avatar for user mohan' />
                </figure>
                <Button
                    className="nav__button"
                    image={buttonImg}
                    text="upload"
                    type="link"
                    href="/upload"
                />
            </section>
        </nav>
    );
}

export default Nav;