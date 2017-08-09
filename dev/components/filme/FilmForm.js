import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';

class FilmForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <TextInput
            name="title"
            label="title"
            value={this.props.film.title}
            onChange={this.props.onChange}/>

          <TextInput
            name="year"
            label="year"
            value={this.props.film.year}
            onChange={this.props.onChange}/>

          <TextInput
            name="description"
            label="description"
            value={this.props.film.description}
            onChange={this.props.onChange}/>
          <TextInput
            name="poster"
            label="poster"
            value={this.props.film.poster}
            onChange={this.props.onChange}/>
          <TextInput
            name="trailer"
            label="trailer"
            value={this.props.film.trailer}
            onChange={this.props.onChange}/>

          <input
            type="submit"
            disabled={this.props.saving}
            value={this.props.saving ? 'Saving...' : 'Save'}
            className="btn btn-primary"
            onClick={this.props.onSave}/>
        </form>
      </div>
  );
  }
}

FilmForm.propTypes = {
  film: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool
};

export default FilmForm;

