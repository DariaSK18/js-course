<template>
  <credit-card
  v-model:cardNum.separate="cardNum"
  v-model:expiryDate.slash="expiryDate"
  v-model:secureCode="secureCode"
/>

  {{ cardNum }}
  {{ expiryDate }}
  {{ secureCode }}
</template>

<script>
import CreditCard from "./components/CreditCard.vue";

export default {
  name: 'App',
  components: {
    CreditCard,
  },
  data() {
    return {
      cardNum: '',
      expiryDate: '',
      secureCode: ''
    }
  },
}
</script>

<style>

</style>
