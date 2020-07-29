import React from 'react';
import { Link } from 'react-router-dom';


const ButtonLink = (props) => {
    return (
        <Link to={props.href} className={props.className} >
            {props.children}
        </Link>
    );
}

export default ButtonLink;