export const addMovieReducer = (state = [], action) => {
    switch (action.type) {
        case 'CREATE_MOVIE':
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
};