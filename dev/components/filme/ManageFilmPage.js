import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as filmeActions from '../../actions/filmeActions';
import FilmForm from './FilmForm';

class ManageFilmPage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state={
      film: this.props.film,
      isEditing: false,
      saving: false,
    };
    this.toggleEdit=this.toggleEdit.bind(this);
    this.updateFilmState = this.updateFilmState.bind(this);
    this.saveFilm = this.saveFilm.bind(this);
    this.redirect = this.redirect.bind(this);
    this.deleteFilm = this.deleteFilm.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.film.id != nextProps.film.id) {
        this.setState({film: nextProps.film});
    }
    this.setState({saving: false, isEditing: false});
  }

  toggleEdit(){
    this.setState({isEditing: !this.state.isEditing})
  }

  saveFilm(event){
        event.preventDefault();
        // this.setState({saving: true});
        this.props.actions.updateFilm(this.state.film);
  }
  redirect() {
    browserHistory.push('/manage');
  }
  deleteFilm() {
    this.props.actions.deleteFilm(this.state.film)
  }

  updateFilmState(event) {    
    const field = event.target.name;
    const film = this.state.film;
    film[field] = event.target.value;
    return this.setState({film: film})
  }
	render() {
    if (this.state.isEditing) {
      return(
          <div>
            <h1>Edit Film</h1>
            <FilmForm
              film={this.state.film}
              onSave={this.saveFilm}
              onChange={this.updateFilmState}
            /> 
          </div>
        )
    }
    return (
        <div className="col-md-8 col-md-offset-2">
            <h1>Titlu: {this.state.film.title}</h1>
            <h1>An: {this.state.film.year}</h1>
            <h1>Descriere: {this.state.film.description}</h1>
            <h1>Poster: {this.state.film.poster}</h1>
            <h1>Trailer: {this.state.film.trailer}</h1>
            <button className="btn btn-default" onClick={this.toggleEdit}>Edit</button>
            <button className="btn btn-default" onClick={this.deleteFilm}>Delete</button>
        </div>
    );
	}
}
ManageFilmPage.propTypes ={
  film: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};
function getFilmById(filme, id) {
    let film = filme.find(film => film.id == id)
    return Object.assign({}, film)
  }
function mapStateToProps(state, ownProps) {  
  let film = {title: '', year: '', description: '', poster: '', trailer:''};
  const filmId = ownProps.params.id;
  if (filmId && state.filme.length > 0) {
    // film = Object.assign({}, state.filme.find(film => film.id == filmId))
    film = getFilmById(state.filme, ownProps.params.id);
  }
  return {film: film};
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(filmeActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageFilmPage);