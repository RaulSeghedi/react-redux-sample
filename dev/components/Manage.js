import React, {Component} from 'react';
import MovieListForManage from '../containers/MovieListForManage';

class Manage extends Component {
    render() {
        const style = {
            display: 'flex',
            justifyContent: 'space-evenly'
        };
        return (
            <div style={style}>
                <div>
                    <div>
                        <h3>Add movie</h3>
                    </div>

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

                    <br/>

                    <div>
                        <h3>Update movie</h3>
                    </div>

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
                </div>
                <div>
                    <MovieListForManage/>
                </div>
            </div>
        )
    }
}

export default Manage;
