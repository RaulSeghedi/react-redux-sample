export const activeMovieReducer = (state = null, action) => {
    switch (action.type) {
        case 'MOVIE_SELECTED':
            return action.payload;
        default:
            return state;
    }
};