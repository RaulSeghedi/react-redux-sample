export const updateMovieReducer = (state = [], action) => {
    switch (action.type) {
        case 'CHANGE_MOVIE':
            return state.map((movie) => {
                if (movie.id === action.payload) {
                    return action.payload
                }
                return movie
            });
        default:
            return state;
    }
};
