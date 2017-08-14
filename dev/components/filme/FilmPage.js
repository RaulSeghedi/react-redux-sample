import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as filmeActions from '../../actions/filmeActions';

class FilmPage extends React.Component {
	constructor(props){
		super(props);
		this.state={
			film: this.props.film
		}
	}
	render() {
        return (
            <div className="col-md-8 col-md-offset-2">
                <h1>Titlu: {this.props.film.title}</h1>
                <h1>An: {this.props.film.year}</h1>
                <h1>Descriere: {this.props.film.description}</h1>
                <h1>Poster: {this.props.film.poster}</h1>
                <h1>Trailer: {this.props.film.trailer}</h1>
            </div>
        );
	}
}
FilmPage.propTypes ={
	film: PropTypes.object.isRequired
};
function mapStateToProps(state, ownProps) {  
  let film = {title: '', year: '', description: '', poster: '', trailer:''};
  const filmId = ownProps.params.id;
  if (state.filme.length > 0) {
    film = Object.assign({}, state.filme.find(film => film.id == filmId))
  }
  return {film: film};
}

export default connect(mapStateToProps)(FilmPage);