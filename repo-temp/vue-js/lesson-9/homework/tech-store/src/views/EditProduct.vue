<template>
  <div>
    <button><router-link :to="{ name: 'laptops' }">Back</router-link></button>
    <div>
      <label>Title</label>
      <input type="text" v-model="productData.title" />
    </div>
    <div>
      <label>Price</label>
      <input type="text" v-model="productData.price" />
    </div>
    <div>
      <label>Amount</label>
      <input type="text" v-model="productData.amount" />
    </div>
    <button @click="onSave()">Save</button>
    <button @click="onCancel()">Cancel</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "EditProduct",
  data() {
    return {
      productData: {
        title: null,
        price: null,
        amount: null,
      },
    };
  },
  computed: {
    ...mapGetters(["getProductById"]),
    productId() {
      // console.log(this.$route.params.productId);
      return this.$route.params.productId;
    },
  },
  methods: {
    ...mapActions(["updateProductData"]),
    onSave() {
      this.updateProductData(this.productData);
      this.$router.push({ name: "laptops" });
    },
    onCancel() {
      this.$router.push({ name: "laptops" });
    },
  },
  created() {
    if (this.productId)
      // console.log(this.productId);
      // console.log(this.getProductById(this.productId));
      return (this.productData = { ...this.getProductById(this.productId) });
  },
};
</script>

<style lang="scss" scoped></style>
