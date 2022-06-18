import axios from "axios";

const BN_URL = "http://localhost:5000";

// const instance = axios.create({
//   baseURL: BN_URL,
// });

axios.defaults.baseURL = BN_URL;

axios.interceptors.response.use(
  (resp) => resp,
  async (err) => {
    if (err.response.status === 401) {
      const response = await axios.post(
        "/account/ref",
        {},
        { withCredentials: true }
      );

      if (response.status === 200) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.accessToken}`;

        return axios(err.config);
      }
    }
    return err;
  }
);

export default axios;
