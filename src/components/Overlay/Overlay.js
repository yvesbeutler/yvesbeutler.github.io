import React from 'react';
import './Overlay.scss';

function Overlay({ id }) {
    return (
        <div id={id} className="Overlay Hidden">
            more facts about the project..
        </div>
    )
}

export default Overlay;