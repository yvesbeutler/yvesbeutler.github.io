import React from 'react';
import { t } from 'react-multi-lang';
import './Bubble.scss';

const Bubble = ({ onClick }) => (
    <div className="Bubble" onClick={onClick}>
        {t('projects.bubble')}
    </div>
)

export default Bubble;