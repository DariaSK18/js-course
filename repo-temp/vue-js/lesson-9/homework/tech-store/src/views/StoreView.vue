<template>
  <div>
    <h2>List of products</h2>
    <ul>
      <li>TVs</li>
      <li>
        <router-link
          :to="{
            name: 'laptops',
            // params: {
            //   linkId,
            // },
          }"
        >
          Laptops</router-link
        >
      </li>
      <li>Phones</li>
      <li>Tablets</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "StoreView",
};
</script>

<style lang="scss" scoped></style>
