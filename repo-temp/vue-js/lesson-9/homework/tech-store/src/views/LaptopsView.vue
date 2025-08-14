<template>
  <div class="container">
    <laptop-item
      v-for="item in getProductsData"
      :key="item.id"
      :laptop-element="item"
    >
      {{ item }}
    </laptop-item>
  </div>
  <div class="buttons">
    <button>
      <router-link
        :to="{
          name: 'home',
        }"
        class="rl"
        >Home</router-link
      >
    </button>
    <button>
      <router-link
        :to="{
          name: 'add',
        }"
        >Add new product</router-link
      >
    </button>
  </div>
  <!-- {{ getProductsData }} -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import LaptopItem from "../components/LaptopItem.vue";
export default {
  name: "LaptopsView",
  components: { LaptopItem },
  computed: {
    ...mapGetters(["getProductsData"]),
  },
  methods: {
    ...mapActions(["loadData"]),
  },
  created() {
    this.loadData();
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.buttons {
  display: flex;
  gap: 30px;
}
button {
  .rl {
    text-decoration: none;
  }
  padding: 10px;
  width: 150px;
  border: 3px solid black;
  margin-top: 20px;
}
</style>
