import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <nav>
                <div>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='manage'>Manage</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar;