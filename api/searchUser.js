import axiosClient from '.';

const routerName = 'users';

const searchApi = {
  searchUser: (value) => {
    return axiosClient.get(`${routerName}/search?q=${value}&type=less`);
  },
};

export default searchApi;
