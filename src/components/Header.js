//css
import '../css/General.css';
import '../css/Header.css';
import '../css/MediaQuery.css';

//images
import AppLogo from '../images/applogo.png';

//router link
import { Link } from 'react-router-dom';
const Header =()=>{
    //DOMs
    
    //show menu function
    function showMenu(){
        const menu=document.querySelector('nav');
        const showMenuButton=document.querySelector('.show-menu-button');
        const closeMenuButton=document.querySelector('.close-menu-button');
        menu.style.display='flex';
        showMenuButton.style.display='none';
        closeMenuButton.style.display='block';
    }
    //close menu function
    function closeMenu(){
        const menu=document.querySelector('nav');
        const showMenuButton=document.querySelector('.show-menu-button');
        const closeMenuButton=document.querySelector('.close-menu-button');
        menu.style.display='none';
        showMenuButton.style.display='block';
        closeMenuButton.style.display='none';
    }
    return(
        <>
            <header>
                <section className='header-logo-container'>
                    <div className='logo-image-container'>
                        <img 
                            src = {AppLogo}
                            alt = 'CMA Logo'/>
                    </div>
                    <div className='logo-words-container'>
                        <h1> <span> Contacts Master</span> </h1>
                    </div>
                    
                </section>
                <secton className='header-menu-container'>
                    {/* BURGER SECTION WHEN PHONE SIZE IS PHONE */}
                    <button 
                        className='show-menu-button'
                        onClick={showMenu}>MENU
                    </button>
                    <button 
                        className='close-menu-button'
                        onClick={closeMenu}>X
                    </button>
                    <nav>
                        <ul>
                            <li>
                                <Link 
                                    className='links'
                                    to='/' >Home</Link>
                            </li>

                            {/* link with sub menu */}
                            <div className='subnav'>
                                <Link 
                                className='links'
                                >Contacts</Link>
                                {/* sub menu below */}
                                <ul className='subnav-content'>
                                    <li>
                                        <Link 
                                            className='sub-links'
                                            to='/new-contacts'>New Contacts</Link>
                                    </li>
                                    <li>
                                        <Link 
                                            className='sub-links'
                                            to='/interested'>Interested</Link>
                                    </li>
                                    <li>
                                        <Link 
                                            className='sub-links'
                                            to='/not-interested'>Not Interested</Link>
                                    </li>
                                    <li>
                                        <Link 
                                            className='sub-links'
                                            to='/call-back'>Call Back</Link>
                                    </li>
                                    <li>
                                        <Link 
                                            className='sub-links'
                                            to='/do-not-call'>Do Not Call</Link>
                                    </li>
                                </ul>
                            </div>

                              {/* Main Menu Continued */}
                            <li>
                                <Link
                                    className='links'
                                    to='/email'
                                >Email</Link>
                            </li>
                            <li>
                                <Link
                                    className='links'
                                    to='/download'
                                >Download</Link>
                            </li>
                            <li>
                                <Link
                                    className='links'
                                    to='/docs'
                                >Docs</Link>
                            </li>
                            <li>
                                <Link
                                    className='links'
                                    to='/about'
                                >About</Link>
                            </li>
                            
                            
                        </ul>
                    </nav>
                    
                </secton>
            </header>
        </>
    )
}

export default Header;