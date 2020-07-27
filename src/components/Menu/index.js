import React from 'react';
import './Menu.css';
import Logo from '../../assets/img/Logo.png';
import ButtonLink from './components/ButtonLink';

function Menu() {
    return(
        <nav className="Menu">
            <a href='/'>
                <img className='Logo' src={Logo} alt="PlayPlex's Logo" />
            </a>
            <ButtonLink as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </ButtonLink>
        </nav>
    )
}

export default Menu;