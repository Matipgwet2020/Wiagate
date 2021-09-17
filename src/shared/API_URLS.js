const BASE_URL = 'https://wiagate-iam-api.herokuapp.com/';
const USERS_BASE_URL = `${BASE_URL}users_api/`;

export const API_URL = {
    AUTH: {
        GET_TOKEN: `${BASE_URL}token/`,
        REFRESH_TOKEN: `${BASE_URL}token/refresh/`,
      },
      WIAGATE: {
        USERS: {
          GET_ALL: `${USERS_BASE_URL}users/`,
        },
    }
};
