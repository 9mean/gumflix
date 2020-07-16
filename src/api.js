import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});
export const moviesApi = {
  nowPlaying: () =>
    api.get(
      'movie/now_playing?api_key=58ce6346d8f67e3a14a32683026ed3ac&language=en-US'
    ),
  upcoming: () =>
    api.get(
      'movie/upcoming?api_key=58ce6346d8f67e3a14a32683026ed3ac&language=en-US'
    ),
  popular: () =>
    api.get(
      'movie/popular?api_key=58ce6346d8f67e3a14a32683026ed3ac&language=en-US'
    ),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    }),
  search: (term) =>
    api.get('search/movie', {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
export const tvApi = {
  topRated: () => api.get('tv/top_rated'),
  popular: () => api.get('tv/popular'),
  airingToday: () => api.get('tv/airing_today'),
  showDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    }),
  search: (term) =>
    api.get('search/tv', {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
