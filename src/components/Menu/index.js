import React from 'react';
import Logo from '../../assets/img/Logo.png';
//import ButtonLink from './components/ButtonLink';


import './index.css';
import Button from '../Button';

const Menu = () => {
    return (
        <nav className="Menu">
            <a href="/" >
                <img className="Logo" src={Logo} alt="MovieFlix Home" />
            </a>

            <Button as="a" className="ButtonLink" href="/" >
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;