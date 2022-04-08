import resource from '../resource';

export default {
  search(params) {
    return resource.get('/gifs/search', { params });
  },
  trending(params) {
    return resource.get('/gifs/trending', { params });
  },
  random(params) {
    return resource.get('/gifs/random', { params });
  },
};
