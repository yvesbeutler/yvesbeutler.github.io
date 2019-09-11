import React from 'react';
import './Overlay.scss';

const Overlay = ({ selectedProject, close }) => (
    <div className={selectedProject !== null ? 'Overlay' : 'Overlay Hidden'}>
        more facts about {selectedProject}
        <span onClick={() => close()}>Close</span>
    </div>
)

export default Overlay;