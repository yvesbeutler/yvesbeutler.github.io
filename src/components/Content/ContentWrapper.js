import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import './ContentWrapper.scss';

export default class ContentWrapper extends Component {
    render() {
        const { name, color, children } = this.props;

        return (
            <div className="FlexBox">
                <div className="Main">
                    <h2 className="Image">{ name }</h2>
                    <Navigation theme={color} />
                </div>
                <div className="Content">
                    { children }
                </div>
            </div>
        )
    }
}