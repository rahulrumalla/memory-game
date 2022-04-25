<template>
  <div class="max-w-2xl mx-auto py-16 px-4 grid gap-6 text-center">
    <Instructions msg="Hello Vue 3 in CodeSandbox!" />
    <div class="flex justify-center gap-6">
      <button
        class="bg-purple-600 px-4 py-2 rounded text-white"
        @click="restartGame"
      >
        Restart Game
      </button>
      <button
        class="bg-blue-600 px-4 py-2 rounded text-white"
        @click="shuffleOtters"
      >
        Shuffle Otters
      </button>
    </div>
    <div class="grid grid-cols-4 gap-6">
      <div v-for="(i, idx) in images" :key="idx" class="">
        <img
          :src="i"
          :alt="idx"
          class="w-60 h-60 object-center object-cover cursor-pointer"
          @click="revealOtter"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Instructions from "./components/Instructions.vue";
export default {
  name: "App",
  components: {
    Instructions: Instructions,
  },
  computed: {},
  data() {
    return {
      images: [],
      initialOtters: [
        require("./assets/otter_1.jpeg"),
        require("./assets/otter_2.jpeg"),
        require("./assets/otter_3.jpeg"),
        require("./assets/otter_4.jpeg"),
        require("./assets/otter_5.jpeg"),
        require("./assets/otter_6.jpeg"),
        require("./assets/otter_1.jpeg"),
        require("./assets/otter_2.jpeg"),
        require("./assets/otter_3.jpeg"),
        require("./assets/otter_4.jpeg"),
        require("./assets/otter_5.jpeg"),
        require("./assets/otter_6.jpeg"),
      ],
    };
  },
  methods: {
    restartGame() {
      //required
    },
    shuffleOtters() {
      //bonus
    },
    revealOtter() {
      //required
    },
    loadInitialOtters() {
      this.images = this.initialOtters;
    },
  },
  mounted() {
    this.loadInitialOtters();
  },
};
</script>

<style>
</style>
