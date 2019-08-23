import React from 'react';
import { setLanguage, t } from 'react-multi-lang';
import Navigation from '../Navigation/Navigation';
import Logo from './Logo';
import './Header.scss';

function changeLanguage(language) {
  setLanguage(language);
}

function Header() {
    return (
        <header className="Header">
            <div className="Caption">
                {t('header.caption')}
            </div>
            <Logo />
            <div className="Switch">
                <button onClick={() => changeLanguage('en')}>en</button>
                <button onClick={() => changeLanguage('lotr')}>lotr</button>
            </div>
            <Navigation />
        </header>
    );
  }
  
  export default Header;
  