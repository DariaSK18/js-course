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
import { mapActions } from "vuex";
export default {
  name: "AddProduct",
  data() {
    return {
      productData: {
        title: null,
        price: null,
        amount: null,
      },
    };
  },
  methods: {
    ...mapActions(["addNewProduct"]),
    onSave() {
      this.addNewProduct(this.productData);
      this.$router.push({
        name: "laptops",
      });
    },
    onCancel() {
      this.$router.push({
        name: "laptops",
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
