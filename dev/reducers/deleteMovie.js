
export const deleteMovieReducer = (state = [], action) => {
    switch (action.type) {
        case 'DELETE_MOVIE':
            return state.filter((movie) => movie.id !== action.id);
        default:
            return state;
    }
};


/*
export const deleteMovieReducer = (state = [], action) => {
    switch (action.type) {
        case 'DELETE_MOVIE':
            const movie = [...state];
            const index = movie.findIndex(x => x.id === action.id);
            movie.slice(index);
            return movie;
        default:
            return state;
    }
};
*/

/*
export const deleteMovieReducer = (state = [], action) => {
    switch (action.type) {
        case 'DELETE_MOVIE':
            return action.id;
        default:
            return state;
    }
};
*/