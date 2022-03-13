import './Nav.scss';
import { Link } from 'react-router-dom';
import Button from '../Button/Button.js';
import Avatar from '../Avatar/Avatar.js';
import logo from '../../assets/images/logo/BrainFlix-logo.svg';
import buttonImg from '../../assets/images/icons/upload.svg';
import searchImg from '../../assets/images/icons/search.svg';
import avatarImg from '../../assets/images/images/Mohan-muruge.jpg';
import api from '../../utils/api.js';

function Nav() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const search = {
            search: e.target.search.value
        }
        
        api.search(search)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <nav className='nav'>
            <div className='nav__container'>
                <figure className='nav__logo'>
                    <Link className='nav__link' to="/">
                        <img className='nav__logo-image' src={logo} alt='brainflix logo' />
                    </Link>
                </figure>
                <section className='nav__content'>
                    <form className='nav__search-form' onSubmit={handleSubmit}>
                        <label className='nav__search'>
                            <img className='nav__search-image' src={searchImg} alt="search for a video" />
                            <input className='nav__search-input' type='text' name='search' placeholder='Search' />
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