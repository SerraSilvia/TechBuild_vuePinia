import { defineStore } from 'pinia';
import { groupBy } from 'lodash';

export const useCartStore = defineStore('cart', {
  state: () => ({
    // Intentamos cargar del localStorage al iniciar
    components: JSON.parse(localStorage.getItem('cart')) || []
  }),
  getters: {
    totalPrice: (state) => state.components.reduce((acc, item) => acc + item.price, 0),
    // La magia de Lodash para agrupar por CPU, GPU, etc.
    groupedByType: (state) => groupBy(state.components, 'type')
  },
  actions: {
    addComponent(product) {
      this.components.push(product);
      this.saveToLocalStorage();
    },
    removeComponent(id) {
      this.components = this.components.filter(item => item.id !== id);
      this.saveToLocalStorage();
    },
    // --- NUEVA ACCIÓN PARA EL RESETEO ---
clearCart() {
  this.components = []; // Limpiamos el estado reactivo
  localStorage.removeItem('cart'); // Borramos físicamente el archivo de caché
  console.log("SISTEMA: LocalStorage limpiado.");
},
    // ------------------------------------
    saveToLocalStorage() {
      localStorage.setItem('cart', JSON.stringify(this.components));
    },
    checkout() {
      alert(`Compra finalizada por un total de ${this.totalPrice}€`);
      this.clearCart(); // Reutilizamos clearCart aquí para no repetir código
    }
  }
});