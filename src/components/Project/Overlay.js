import React from 'react';
import { t } from 'react-multi-lang';
import Icon from '../Footer/Icon';
import './Project.scss';

const Overlay = ({ id, isOpen, close }) => (
    <div className={isOpen ? 'Overlay' : 'Hidden'}>
        <Icon type="close" action={() => close()} />
        more facts about {t(`projects.${id}.title`)}
    </div>
)

export default Overlay;