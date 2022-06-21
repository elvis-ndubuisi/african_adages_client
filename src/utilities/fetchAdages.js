import axios from "../utilities/axios";

const fetchData = async (page = "") => {
  try {
    const response = await axios.get("cnt/profile/adages", { page: page });
    if ((response.status = 200)) {
      let data = await response.data;
      return data;
    }
  } catch (err) {
    console.log("error at adages " + err);
  }
};

export default fetchData;
