import React, { Component } from 'react';
import { isMobile } from 'react-device-detect';
import { StickyContainer, Sticky } from 'react-sticky';
import Navigation from '../Navigation/Navigation';
import './ContentWrapper.scss';

export default class ContentWrapper extends Component {
    render() {
        const { name, children } = this.props;

        // don't use sticky on mobile devices
        if (isMobile) {
            return (
                <div className="Flexbox">
                    <div className="Main">
                        <h2 className="Image">{ name }</h2>
                    </div>
                    <div className="Content">
                        { children }
                    </div>
                </div>
            )
        }

        return (
            <StickyContainer>
                <div className="Flexbox">
                    <Sticky>
                        {({ style }) => (
                            <div className="Main" style={style}>
                                <h2 className="Image">{ name }</h2>
                                <Navigation />
                            </div>
                        )}
                    </Sticky>
                    <div className="Content">
                        { children }
                    </div>
                </div>
            </StickyContainer> 
        )
    }
}