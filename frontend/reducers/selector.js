import values from 'lodash/values';

export const selectAllSongs = state => values(state.songs);
