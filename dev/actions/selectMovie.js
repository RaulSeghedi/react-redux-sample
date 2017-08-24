export const selectMovie = movie => {
    console.log('selected');
    return {
        type: 'MOVIE_SELECTED',
        payload: movie
    }
};