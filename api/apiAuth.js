import fetcher from "./fetcher";

const apiAuth = {
  postRegistration: (data) =>
    fetcher
      .post("/user/register", data)
      .then((resp) => resp.data)
      .then((err) => err.response),
};

export default apiAuth;
