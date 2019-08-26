import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import './ContentWrapper.scss';

export default class ContentWrapper extends Component {
    render() {
        const { name, children } = this.props;

        return (
            <div className="FlexBox">
                <div className="Main">
                    <h2 className="Image">{ name }</h2>
                    <Navigation />
                </div>
                <div className="Content">
                    { children }
                </div>
            </div>
        )
    }
}