import resource from '../resource';

export default {
  search(params) {
    return resource.get('/gifs/search', { params });
  },
};
