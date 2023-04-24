export const env = {
  apiUrls: {
    baseApiUrl: process.env.SERVER_URL,
  },
  endPoints: {
    USER: {
      LIST: "user/list",
      CREATE: "user/create",
      EDIT: "user/edit",
      DELETE: "user/delete",
    },
  },
  NODE_ENV: process.env.ENVIRONMENT,
};
