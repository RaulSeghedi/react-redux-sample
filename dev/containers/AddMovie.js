import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addMovie} from '../actions/addMovie';

class AddMovie extends Component {
    render() {
        return (
            <div>
                <form onSubmit={ (e) => {
                    if (!this.refs.titleRef.value.trim() || !this.refs.yearRef.value.trim() || !this.refs.descriptionRef.value.trim()) {
                        e.preventDefault();
                        return alert('You have to complete all fields !!!');
                    }
                    this.props.addMovie({
                        title: this.refs.titleRef.value,
                        year: this.refs.yearRef.value,
                        description: this.refs.descriptionRef.value
                    });
                    this.refs.titleRef.value = '';
                    this.refs.yearRef.value = '';
                    this.refs.descriptionRef.value = '';
                }}>
                    <h6>Title</h6>
                    <input type='text' size='48' ref='titleRef'/>

                    <h6>Year</h6>
                    <input type='number' size='48' ref='yearRef'/>

                    <h6>Description</h6>
                    <textarea cols='50' rows='5' ref='descriptionRef'/>
                    <br/>
                    <button type="submit">Save</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = () => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addMovie: addMovie}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMovie);
