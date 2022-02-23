import './Nav.scss';
import logo from '../../assets/images/logo/BrainFlix-logo.svg';
import avatar from '../../assets/images/images/Mohan-muruge.jpg';

function Nav() {
    return (
        <nav className='nav'>
            <figure className='nav__logo'>
                <img className='nav__logo-image' src={logo} alt='brainflix logo' />
            </figure>
            <form className='nav__search-form'>
                <label className='nav__search'>
                    <input className='nav__search-input' type='text' name='nav-search' placeholder='Search'/>
                </label>
                <figure className='nav__avatar'>
                    <img className='nav__avatar-image' src={avatar} alt='avatar for user mohan' />
                </figure>
                <label className='nav__submit'>
                    <input className='nav__submit-input' type='submit' value="UPLOAD" />
                </label>
            </form>
        </nav>
    );
}

export default Nav;