import React from 'react';
import { translate, t } from 'react-multi-lang';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ContentWrapper from './components/Content/ContentWrapper';
import Introduction from './components/Content/Introduction';
import './App.scss';

function App() {
    return (
        <div className="App">
            <div className="Wrapper">
                <Header />
                <section id="intro" className="Intro">
                    <ContentWrapper name={t('nav.intro')}>
                        <Introduction />
                    </ContentWrapper>
                </section>
                <section id="projects" className="Projects">
                    <ContentWrapper name={t('nav.projects')}>
                        <Introduction />
                    </ContentWrapper>
                </section>
                <section id="cv" className="CV">
                    <ContentWrapper name={t('nav.cv')}>
                        <Introduction />
                    </ContentWrapper>
                </section>
                <section id="about" className="Intro">
                    <ContentWrapper name={t('nav.about')}>
                        <Introduction />
                    </ContentWrapper>
                </section>
                <section id="contact" className="Contact">
                    <Footer />
                </section>
            </div>
        </div>
    )
}

export default translate(App);
