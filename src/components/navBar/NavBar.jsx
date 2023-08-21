//estilos
import "./navbar.scss";

// algumas funcoes úteis
import { useState, useEffect } from 'react';

const NavBar = () => {

    const [ navbar, setNavbar ] = useState(true);
    const [ lastscrollY, setLastScrollY ] = useState(0);

    const navBarchange = () => {
        let actual = window.scrollY;
        if (actual < lastscrollY) { setNavbar(true) }
        else { setNavbar(false) };
        setLastScrollY(actual);
    }

    window.addEventListener("scroll", navBarchange)


  return (
    <nav className={navbar ? '' : 'hidden'}>
        <div className="logo">
            <h1>Scrum</h1>
            <h2>Method</h2>
        </div>

        <ul>
            <li><a href="#Home">Inicio</a></li>
            <li><a href="#About">Sobre</a></li>
            <li><a href="#Conteudo">Conteudo</a></li>
            <li><a href="#Videos">Videos</a></li>
        </ul>
    </nav>
  )
}

export default NavBar