import fetcher from "./fetcher";

const apiAuth = {
  postRegistration: (data) =>
    fetcher
      .post("/user/register", data)
      .then((resp) => resp.data)
      .then((err) => err.response),
  postLogin: (data) =>
    fetcher
      .post("/user/login", data)
      .then((resp) => resp.data)
      .then((err) => err.response),
  getUserInfo: () =>
    fetcher
      .get("/user")
      .then((resp) => resp.data)
      .then((err) => err.response),
};

export default apiAuth;
