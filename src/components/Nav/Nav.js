import './Nav.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/BrainFlix-logo.svg';
import buttonImg from '../../assets/images/icons/upload.svg';
import searchImg from '../../assets/images/icons/search.svg';
import avatarImg from '../../assets/images/images/Mohan-muruge.jpg';
import Button from '../Button/Button';
import Avatar from '../Avatar/Avatar';

function Nav() {
    return (
        <nav className='nav'>
            <div className='nav__container'>
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
                    <Avatar image={avatarImg} alt="avatar for user mohan" parentClass='nav__avatar' imgClass='nav__avatar-image'/>
                    <Button
                        className="nav__button"
                        image={buttonImg}
                        text="upload"
                        type="link"
                        href="/upload"
                    />
                </section>
            </div>
        </nav>
    );
}

export default Nav;