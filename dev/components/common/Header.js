import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
    return (
        <nav>
            <IndexLink to="/"
                       activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/filme" activeClassName="active">Filme</Link>
             {" | "}
            <Link to="/manage" activeClassName="active">Manage</Link>
        </nav>
    );
};

export default Header;