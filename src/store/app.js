import { writable } from "svelte/store";
import axios from "../utilities/axios";
import fetchData from "../utilities/fetchAdages";

/* initial states */

// notify
const toast = {
  isIncident: false,
  status: "",
  reason: "",
};
function notifyStoreState() {
  const { subscribe, update } = writable({
    status: "",
    reason: "",
    isEffected: false,
  });

  return {
    subscribe,
    setNotify: function (isEffected, status, reason) {
      update((state) => {
        state.status = String(status);
        state.reason = String(reason);
        state.isEffected = Boolean(isEffected);
        return state;
      });
    },
  };
}
// app modal
const modal = {
  shouldDisplay: "",
  canClickNext: true,
};

export const notify = writable(toast);
export const modalStore = writable(modal);

function adageModState() {
  const { subscribe, update, set } = writable({
    id: "",
    country: "",
    adage: "",
  });

  return {
    subscribe,
    setAction: function (payload) {
      console.log(payload);
      update((state) => {
        state.id = payload.id;
        state.adage = payload.adage;
        state.country = payload.country;
        return state;
      });
    },
    resetAction: function () {
      set({ id: "", country: "", adage: "" });
    },
  };
}

export const authStore = writable({
  userId: sessionStorage.getItem("userId"),
  username: sessionStorage.getItem("username"),
  country: sessionStorage.getItem("country"),
  email: sessionStorage.getItem("email"),
  gender: sessionStorage.getItem("gender"),
  token: sessionStorage.getItem("token"),
  setUserId: function (id) {
    this.userId = id;
    sessionStorage.setItem("userId", this.userId);
  },
  setUsername: function (username) {
    this.username = username;
    sessionStorage.setItem("username", this.username);
  },
  setCountry: function (country) {
    this.country = country;
    sessionStorage.setItem("country", this.country);
  },
  setEmail: function (email) {
    this.email = email;
    sessionStorage.setItem("email", this.email);
  },
  setGender: function (gender) {
    this.gender = gender;
    sessionStorage.setItem("gender", this.gender);
  },
  setToken: function (token) {
    this.token = token;
    sessionStorage.setItem("token", this.token);
  },
});

function adageStoreState() {
  const { subscribe, update, set } = writable({
    page: 1,
    count: 0,
    size: 0,
    adages: [],
  });

  return {
    subscribe,
    addAdage: async function (adage, uniqueTo, page) {
      /**
       * post adage data to endpoint and update adageArray with response (if status === 200).
       * @param {String} adage adage data to be submitted.
       * @param {String} uniqueTo country this submitted adage is unique to.
       */

      try {
        const response = await axios.post("/cnt/profile/adage", {
          adage,
          uniqueTo,
        });

        if (response.status === 200) {
          const data = await fetchData(page);
          if (data) {
            update((state) => {
              state.page = data.page;
              state.size = data.size;
              state.count = data.count;
              state.adages = data.data.map((item) => {
                return item;
              });
              return state;
            });
          }
          return { added: true, error: false };
        } else {
          return { added: false, error: true };
        }
      } catch (error) {
        console.log(error);
      }
    },
    fetchAdages: async function (page) {
      /**
       * @description fetches paginated user adages from endpoint and update page, count and adage array values.
       * @param {Number} page current pagination page (optional).
       */

      try {
        // fetch
        const response = await axios.get(`cnt/profile/adages?page=${page}`);
        // update
        if ((response.status = 200)) {
          update((state) => {
            state.page = response.data.page;
            state.size = response.data.size;
            state.count = response.data.count;
            const ads = response.data.data;
            state.adages = ads.map((item) => {
              return item;
            });
            return state;
          });
        }
        return { completed: true };
      } catch (err) {
        console.log("error at adages " + err);
      }
    },
    editAdage: async function (id, payload, page) {
      /**
       * @description patchs an adage by its id from user's adages, update database and update view.
       * @param {Object} payload objects of data containing the fields:values to update.
       * @param {id} id unique identifier for an adage.
       */

      // send patch request.
      const response = await axios.patch(
        `/cnt/profile/adage?id=${id}`,
        payload
      );

      // update data if patched.
      if (response.status === 200 && response.data === "updated") {
        const data = await fetchData(page);
        if (data) {
          update((state) => {
            state.page = data.page;
            state.size = data.size;
            state.count = data.count;
            state.adages = data.data.map((item) => {
              return item;
            });
            return state;
          });
        }
        return { updated: true, error: false };
      } else {
        console.log(response);
        return { updated: false, error: true };
      }
    },
    deleteAdage: async function (id, page) {
      /**
       * deletes an adage by its id from user's adages, update database and update view.
       * @param {Number} id unique identifier for adage.
       */

      // send delete request.
      const response = await axios.delete(`cnt/profile/adage`, {
        params: { id: id },
      });

      // update data if deleted.
      if (response.status === 200) {
        const data = await fetchData(page);
        console.log(page);
        if (data) {
          update((state) => {
            state.page = data.page;
            state.size = data.size;
            state.count = data.count;
            state.adages = data.data.map((item) => {
              return item;
            });
            return state;
          });
        }
        return { deleted: true, error: false };
      } else {
        return { deleted: false, error: true };
      }
    },
    nextPage: async function (page) {
      /**
       * @description fetches the next paginated adage list from from user's adages and update view.
       * @param {Number} page page number to query.
       */
      // http://localhost:5000/cnt/profile/adages?page=1&size=6
      if (page === 0) {
        return;
      }
      const response = await axios.get(`/cnt/profile/adages?page=${page + 1}`);
      if (response.status === 200 && response.data.data.length !== 0) {
        update((state) => {
          state.page = response.data.page;
          state.count = response.data.count;
          state.size = response.data.size;
          state.adages = response.data.data.map((item) => {
            return item;
          });
          return state;
        });
        return { nextpage: "updaged" };
      } else if (response.data.data.length === 0) {
        return { nextpage: "no next page" };
      }
    },
    prevpage: async function (page) {
      /**
       * @description fetches the next paginated adage list from user's adages and update view.
       * @param {Number} page page number to query.
       */
      // http://localhost:5000/cnt/profile/adages?page=1&size=6
      if (page === 0 || page === 1) {
        return;
      }
      const response = await axios.get(`/cnt/profile/adages?page=${page - 1}`);
      if (response.status === 200 && response.data.data.length !== 0) {
        update((state) => {
          state.page = response.data.page;
          state.count = response.data.count;
          state.size = response.data.size;
          state.adages = response.data.data.map((item) => {
            return item;
          });
          return state;
        });
        return { nextpage: "updaged" };
      } else if (response.data.data.length === 0) {
        return { nextpage: "no previous page" };
      }
    },
  };
}

export const adageStore = adageStoreState();
export const adageModStore = adageModState();
// export const notifyStore = notifyStoreState();
