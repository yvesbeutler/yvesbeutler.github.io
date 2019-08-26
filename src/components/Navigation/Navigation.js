import React from 'react';
import { t } from 'react-multi-lang';
import './Navigation.scss';

function Navigation() {
    return (
        <ul className="Navigation">
            <li><a href="#intro">{t('nav.intro')}</a></li>
            <li><a href="#projects">{t('nav.projects')}</a></li>
            <li><a href="#cv">{t('nav.cv')}</a></li>
            <li><a href="#contact">{t('nav.contact')}</a></li>
      </ul>
    )
}

export default Navigation;