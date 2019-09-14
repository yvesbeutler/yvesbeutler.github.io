import React, { Component } from 'react';
import { t } from 'react-multi-lang';
import Bubble from '../Bubble/Bubble';
import Overlay from './Overlay';
import './Project.scss';

export default class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    open() {
        // scroll to the top of element
        const element = document.getElementById(this.props.id);
        element.scrollIntoView();
        this.setState({ isOpen: true })
    }

    close() {
        this.setState({ isOpen: false })
    }

    render() {
        const { id } = this.props;
        return (
            <div className="Project" id={id}>
                <div className={this.state.isOpen ? 'Hidden' : 'ProjectHead'}>
                    <div className="ProjectTitle">
                        {t(`projects.${id}.title`)}
                    </div>
                    <Bubble onClick={() => this.open()} />
                </div>
                <Overlay id={id} isOpen={this.state.isOpen} close={() => this.close()} />
            </div>
        )
    }
}
