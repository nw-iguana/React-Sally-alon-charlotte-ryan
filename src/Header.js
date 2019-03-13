import React from 'react';
import Photo from './img/ilana.jpg';

function Header(props) {
    return (
        <header>
          <h1>Sally's Resume</h1>
          <img src={Photo} alt="resume headshot" />
          <address>Email: <a href={props.info.emailLink}>{props.info.email}</a> | Phone: {props.info.phone}</address>
        </header>
    );

}

export default Header;