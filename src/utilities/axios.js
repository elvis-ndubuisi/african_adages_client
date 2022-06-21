import axios from "axios";

const BN_URL = "http://localhost:5000";

axios.defaults.baseURL = BN_URL;

let refresh = false;
axios.interceptors.response.use(
  (resp) => resp,
  async (err) => {
    if (err.response.status === 401 && !refresh) {
      refresh = true; /* starts requests */
      const token = sessionStorage.getItem("token");

      const response = await axios.post("/account/token", {
        refreshToken: token,
      });

      if (response.status === 200) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.accessToken}`;

        // Update old tokens.
        sessionStorage.setItem("token", response.data.refreshToken);

        return axios(err.config);
      }
    }
    refresh = false; /* ends request after first execution */
    return err;
  }
);

export default axios;
