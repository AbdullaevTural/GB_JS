<template>
  <div>
      <img :src="product.image" />
      <p>name: {{ product.name }}</p>
      <p>price: {{ formattedPrice }}</p>
      <p v-if="product.available">Available</p>
      <p v-else>Out of stock</p>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",

  data() {
      return {
          product:
          {
              image: require("../assets/image.webp"),
              name: 'Ubik',
              price: 99.99,
              available: false,
          },
      };
  },

  computed: {
      formattedPrice: function () {
          return `$${this.product.price}`;
      }
  }
}
</script>

<style scoped lang="scss">
img {
  width: 25%;
}

div {
  display: inline;
  font-size: 24px;
}
</style>