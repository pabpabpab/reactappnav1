import React from 'react';
import { useMatch, Link } from 'react-router-dom';

const getClassName = (match) => match ? 'link-active' : 'link-inactive';

const CustomLink = ({ to, children }) => {
    const match = useMatch(to); // если путь не соответствует, то match = null
    // console.log(match);
    return (
        <Link to={to} className={getClassName(match)}>
            {children}
        </Link>
    );
};

export default CustomLink;