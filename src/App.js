import React from 'react';
import { translate, t } from 'react-multi-lang';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ContentWrapper from './components/Content/ContentWrapper';
import Introduction from './components/Content/Introduction';
import Projects from './components/Content/Projects';
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
                    <ContentWrapper name={t('nav.projects')} fullWidth>
                        <Projects />
                    </ContentWrapper>
                </section>
                <section id="cv" className="CV">
                    <ContentWrapper name={t('nav.cv')}>
                        here comes my cv
                    </ContentWrapper>
                </section>
                <section id="gallery" className="Intro">
                    <ContentWrapper name={t('nav.gallery')}>
                        please be patient, the gallery is coming very soon..
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
