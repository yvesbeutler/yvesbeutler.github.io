import React, { Component } from 'react';
import './Header.scss';

export default class Header extends Component {
    render() {
        return (
        <header className="Header">
            <div className="Caption">
                in data I trust
            </div>
            <div className="Navigation">
                <ul>
                    <li><a href="#intro">Intro</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            </div>
        </header>
        )
    }
}
