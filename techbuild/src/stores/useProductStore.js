import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: []
  }),
  actions: {
    async loadHardware() {
      try {
        const data = await import('@/data/products.json');
        this.products = data.default;
        console.log("Hardware cargado con éxito");
      } catch (error) {
        console.error("Error cargando el hardware:", error);
      }
    }
  }
});