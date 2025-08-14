<template>
<div class="container">
  <laptops-section :laptopsList="laptops" :sellersList="sellers" :brandsList="brands"/></div>
  <!-- {{ sellers }}
  {{ brands }} -->
</template>

<script>
import { brands, sellers, laptops } from "@/listsForLaptops";
import LaptopsSection from "./components/LaptopsSection";

export default {
  name: 'App',
  components: {
    LaptopsSection,
  },
  data() {
    return {
      laptops,
      sellers,
      brands,
    }
  },
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
