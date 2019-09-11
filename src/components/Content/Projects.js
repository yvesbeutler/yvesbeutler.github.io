import React, { Component } from 'react';
import Bubble from '../Bubble/Bubble';
import Overlay from '../Overlay/Overlay';

export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selection: null,
        };
    }

    // TODO: maybe create a ProjectBox component and add the overlay to every project

    // opens overlay with corresponding content
    selectProject = (project) => {
        this.setState({ selection: project });
    }

    // closes overlay
    close = () => {
        this.setState({ selection: null });
    }

    render() {
        return (
            <div className="ProjectWrapper">
                <Overlay selectedProject={this.state.selection} close={this.close} />
                <div className="Project" id="bachelor">
                    <div className="ProjectInfo">
                        bachelor thesis
                    </div>
                    <Bubble onClick={() => this.selectProject('bachelor')} />
                </div>
                <div className="Project" id="zenji">
                    <div className="ProjectInfo">
                        zenji ai
                    </div>
                    <Bubble onClick={() => this.selectProject('zenji')} />
                </div>
                <div className="Project" id="microspot">
                    <div className="ProjectInfo">
                        microspot.ch
                    </div>
                    <Bubble onClick={() => this.selectProject('microspot')} />
                </div>
            </div>
        )
    }
}
