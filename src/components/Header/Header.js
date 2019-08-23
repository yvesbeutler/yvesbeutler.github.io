import React from 'react';
import { t } from 'react-multi-lang';
import Logo from './Logo';
import './Header.scss';

function Header() {
    return (
        <header className="Header">
            <div className="Caption">
                {t('header.caption')}
            </div>
            <Logo />
            <div className="Navigation">
                <ul>
                    <li><a href="#intro">Intro</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            </div>
        </header>
    );
  }
  
  export default Header;
  