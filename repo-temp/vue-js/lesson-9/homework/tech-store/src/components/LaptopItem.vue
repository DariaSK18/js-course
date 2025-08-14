<template>
  <div class="block">
    <div class="picture">
      <img
        src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/SPZ1B-Platinum-13-BB-00?qlt=90&wid=1253&hei=705&extendN=0.12,0.12,0.12,0.12&bgc=FFFFFFFF&fmt=jpg"
        alt="laptop"
      />
    </div>
    <div class="box">
      <div class="title">
        <h3>{{ laptopElement.title }}</h3>
        <button @click="deleteProduct(laptopElement.id)" aria-label="Delete">
          X
        </button>
      </div>
      <div class="price">
        <p>{{ laptopElement.price }} $</p>
        <p>({{ laptopElement.amount }})</p>
        <button>
          <router-link
            :to="{
              name: 'edit',
              params: {
                productId: laptopElement.id,
              },
            }"
            >Edit</router-link
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "LaptopItem",
  props: {
    laptopElement: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    ...mapActions(["deleteProduct"]),
  },
};
</script>

<style lang="scss" scoped>
.block {
  margin: 0 auto;
  display: flex;
  padding: 10px;
  gap: 10px;
  border: 1px solid black;
  width: 500px;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    width: 30px;
    height: 30px;
  }
}
.picture {
  width: 170px;
  img {
    width: 100%;
  }
}
.box {
  width: 100%;
}
.price {
  display: flex;
  justify-content: space-between;
  button {
    width: 130px;
  }
}
</style>
