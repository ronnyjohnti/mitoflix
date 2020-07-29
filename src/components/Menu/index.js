import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import Logo from '../../assets/img/Logo.png';
import ButtonLink from './components/ButtonLink';

function Menu() {
    return(
        <nav className="Menu">
            <Link to='/'>
                <img className='Logo' src={Logo} alt="MitoFlix's Logo" />
            </Link>
            <ButtonLink as={Link} className="ButtonLink" href="/cadastro/videos/">
                Novo Vídeo
            </ButtonLink>
        </nav>
    )
}

export default Menu;