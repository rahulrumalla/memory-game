import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 0,
      images: [
        "./assets/otter_1.jpeg",
        "./assets/otter_2.jpeg",
        "./assets/otter_3.jpeg",
        "./assets/otter_4.jpeg",
        "./assets/otter_5.jpeg",
        "./assets/otter_6.jpeg",
        "./assets/otter_7.jpeg",
        "./assets/otter_8.jpeg",
        "./assets/otter_9.jpeg"
      ]
    };
  },

  mutations: {
    increment(state) {
      state.count++;
    }
  },

  getters: {
    images: (state) => {
      return state.images;
    }
  }
});
export default store;
