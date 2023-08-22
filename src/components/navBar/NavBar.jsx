//estilos
import "./navbar.scss";

// algumas funcoes úteis
import { useState, useEffect } from 'react';

import { TbMenu2 } from "react-icons/tb";
import { IoIosClose } from "react-icons/io";

const NavBar = () => {

    const [ navbar, setNavbar ] = useState(true);
    const [ lastscrollY, setLastScrollY ] = useState(0);
    const [ state, setState ] = useState({clicked: true});

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

        <div className="normal">
            <ul className={state.clicked ? "barHide" : ""}>
                <li><a href="#Home" onClick={() => {setState({clicked: true})}}>Inicio</a></li>
                <li><a href="#About" onClick={() => {setState({clicked: true})}}>Sobre</a></li>
                <li><a href="#Conteudo" onClick={() => {setState({clicked: true})}}>Conteudo</a></li>
                <li><a href="#Videos" onClick={() => {setState({clicked: true})}}>Videos</a></li>
            </ul>
        </div>

        <div className="mobile">
            <TbMenu2 className={state.clicked ? "" : "off"}  onClick={() => {setState({clicked: false})}} />
            <IoIosClose className={state.clicked ? "off" : ""} onClick={() => {setState({clicked: true})}}/>
        </div>
    </nav>
  )
}

export default NavBar