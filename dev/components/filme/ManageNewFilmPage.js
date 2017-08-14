import React, {PropTypes} from 'react';  
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux';  
import * as filmeActions from '../../actions/filmeActions';  
import FilmForm from './FilmForm';

class ManageNewFilmPage extends React.Component{
	constructor(props){
		super(props);
		this.state={
			film: {
				title: '',
				year: '',
				description: '',
				poster: '',
				trailer: ''
			},
			saving:false
		};
		this.saveFilm = this.saveFilm.bind(this);
		this.updateFilmState = this.updateFilmState.bind(this);
	}
  	saveFilm(event){
    	event.preventDefault();
    	this.setState({saving: true});
    	this.props.actions.createFilm(this.state.film);
  	}
  	updateFilmState(event) {    
    	const field = event.target.name;
    	const film = this.state.film;
    	film[field] = event.target.value;
    	return this.setState({film: film})
  	}
  	render(){
  		return(
  			<div>
				<h1>New film</h1>
				<FilmForm
					film={this.state.film}
					onSave={this.saveFilm}
					onChange={this.updateFilmState} 
				/>
			</div>
  		)
  	}
}
ManageNewFilmPage.propTypes = {  
  	actions: PropTypes.object.isRequired
};
function mapStateToProps(state, ownProps) {  
  return {film: state.film};
}
function mapDispatchToProps(dispatch) {  
  return {
    actions: bindActionCreators(filmeActions, dispatch)
}};
export default connect(mapStateToProps,mapDispatchToProps)(ManageNewFilmPage);  