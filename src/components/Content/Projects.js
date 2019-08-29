import React from 'react';

function Introduction() {
    return (
        <div className="ProjectWrapper">
            <div className="Project" id="bachelor">
                <div className="ProjectInfo">
                    bachelor thesis
                </div>
                <div className="Bubble">
                    <div className="ShowMore">show details</div>
                </div>
            </div>
            <div className="Project" id="zenji">
                <div className="ProjectInfo">
                    zenji ai
                </div>
                <div className="Bubble">
                    <div className="ShowMore">show details</div>
                </div>
            </div>
            <div className="Project" id="microspot">
                <div className="ProjectInfo">
                    microspot.ch
                </div>
                <div className="Bubble">
                    <div className="ShowMore">show details</div>
                </div>
            </div>
        </div>
    )
}

export default Introduction;