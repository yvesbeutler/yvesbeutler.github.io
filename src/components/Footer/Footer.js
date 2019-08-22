import React from 'react';
import Icon from '../Icon/Icon';
import './Footer.scss';

function Footer() {
  return (
    <footer className="Footer">
        <h1>I'll write you back as soon as I can. I promise.</h1>
        <a href="mailto:yvesbeutler93@gmail.com">
            <Icon type="gmail" />
        </a>
        <a href="https://www.linkedin.com/in/yves-beutler">
            <Icon type="linkedIn" />
        </a>
        <a href="https://github.com/yvesbeutler">
            <Icon type="github" />
        </a>
        <a href="https://open.spotify.com/user/yvesbeutler">
            <Icon type="spotify" />
        </a>
        <a href="https://stackoverflow.com/users/1278562/yves-beutler">
            <Icon type="stackoverflow" />
        </a>
        <div class="Copyrights">
        © 2019 Yves Beutler. All rights reserved.
        </div>
    </footer>
  );
}

export default Footer;