import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ManageFilmeList = ({filme}) => {
    return (
        <ul className="list-group">
            {filme.map(film =>
                <li className="list-group-item" key={film.id}><Link to={'/manage/' + film.id}>{film.title}</Link></li>
            )}
        </ul>
    );
};

ManageFilmeList.propTypes = {
    filme: PropTypes.array.isRequired
};

export default ManageFilmeList;