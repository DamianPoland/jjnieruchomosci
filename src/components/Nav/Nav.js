import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import style from './Nav.module.css'
import logo from '../../assets/logo192.png'





const Nav = props => {

    // open & close mobile menu
    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)
    let styleMobileMenu = isOpenMobileMenu ? style.listOpen : '' //menu list close/open
    let styleMobileButtonBurger = isOpenMobileMenu ? style.burgerOpen : '' //button burger close/open



    return (
        <header className={style.background}>
            <nav className={style.container}>
                <Link to='/home' className={style.header}>
                    <img className={style.headerImg} src={logo} alt='logo' />
                    <p className={style.headerDesc}>jj<span className={style.headerDesc1}>nieruchomości</span></p>
                </Link>
                <ul onClick={() => setIsOpenMobileMenu(false)} className={`${style.list} ${styleMobileMenu}`}>
                    <li className={style.listItem}><NavLink to='/home' activeClassName={style.activeLink} className={style.listItemAnchor}>Strona główna</NavLink></li>
                    <li className={style.listItem}><NavLink to='/about' activeClassName={style.activeLink} className={style.listItemAnchor}>O mnie</NavLink></li>
                    <li className={style.listItem}><NavLink to='/offer' activeClassName={style.activeLink} className={style.listItemAnchor}>Oferta</NavLink></li>
                    {/* <li className={style.listItem}><NavLink to='/ads' activeClassName={style.activeLink} className={style.listItemAnchor}>Ogłoszenia</NavLink></li> */}
                    <li className={style.listItem}><NavLink to='/contact' activeClassName={style.activeLink} className={style.listItemAnchor}>Kontakt</NavLink></li>
                </ul>
                <div onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)} className={`${style.burgerMenu} ${styleMobileButtonBurger}`}>
                    <div className={style.burgerBtn}></div>
                </div>

            </nav>
        </header>
    )
}

export default Nav