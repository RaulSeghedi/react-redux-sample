import React, {Component} from 'react';

class UpdateMovie extends Component {
    render() {
        return (
            <div>
                <h6>Title</h6>
                <input type='text' size='48'/>

                <h6>Year</h6>
                <input type='number' size='48'/>

                <h6>Description</h6>
                <textarea cols='50' rows='5'/>
                <br/>
                <button>Save</button>
            </div>
        )
    }
}

export default UpdateMovie;
