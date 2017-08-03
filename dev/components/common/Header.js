import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
    return (
        <nav>
            <IndexLink to="/"
                       activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/filme" activeClassName="active">Filme</Link>
        </nav>
    );
};

export default Header;