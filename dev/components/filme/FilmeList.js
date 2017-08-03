import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const FilmeList = ({filme}) => {
    return (
        <ul className="list-group">
            {filme.map(film =>
                <li className="list-group-item" key={film.id}><Link to={'/filme/' + film.id}>{film.title}</Link></li>
            )}
        </ul>
    );
};

FilmeList.propTypes = {
    filme: PropTypes.array.isRequired
};

export default FilmeList;