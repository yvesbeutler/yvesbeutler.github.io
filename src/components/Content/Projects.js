import React from 'react';
import Bubble from '../Bubble/Bubble';
import Overlay from '../Overlay/Overlay';

function showOverlay() {
    const element = document.getElementById('Overlay');
    element.className = element.className + ' Visible';
}

function Projects() {
    return (
        <div className="ProjectWrapper">
            <Overlay id="Overlay" />
            <div className="Project" id="bachelor">
                <div className="ProjectInfo">
                    bachelor thesis
                </div>
                <Bubble onClick={showOverlay}/>
            </div>
            <div className="Project" id="zenji">
                <div className="ProjectInfo">
                    zenji ai
                </div>
                <Bubble />
            </div>
            <div className="Project" id="microspot">
                <div className="ProjectInfo">
                    microspot.ch
                </div>
                <Bubble />
            </div>
        </div>
    )
}

export default Projects;