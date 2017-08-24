import React, {Component} from 'react';
import MovieListForManage from '../containers/MovieListForManage';
import AddMovie from '../containers/AddMovie';
import UpdateMovie from '../containers/UpdateMovie';

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
                        <AddMovie/>
                    </div>

                    <br/>

                    <div>
                        <h3>Update movie</h3>
                    </div>
                    <div>
                        <UpdateMovie/>
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
