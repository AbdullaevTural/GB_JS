Vue.createApp({
  data() {
    return {
      products: [
        { id: 1, title: "Хлеб", price: 34 },
        { id: 2, title: "Молоко", price: 63 },
        { id: 3, title: "Соль", price: 28 },
        { id: 4, title: "Сахар", price: 66 },
      ],
    };
  },
  methods: {
    sortInAscendingOrder() {
      return this.products.sort((a, b) => a.price - b.price);
    },
    sortInDescendingOrder() {
      return this.products.sort((a, b) => b.price - a.price);
    },
  },
}).mount("#app");
