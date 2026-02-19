import { defineStore } from 'pinia';
import usersData from '@/data/users.json';
// Importamos la store del carrito
import { useCartStore } from './useCartStore.js'; 

export const useUsersStore = defineStore('users', {
  state: () => ({
    currentUser: usersData[0],
    allUsers: usersData,
    currentIndex: 0
  }),
  actions: {
    switchProfile() {
      // 1. Cambiamos el índice y el usuario
      this.currentIndex = (this.currentIndex + 1) % this.allUsers.length;
      this.currentUser = this.allUsers[this.currentIndex];

      // 2. Ejecutamos la limpieza del carrito llamando a la store aquí mismo
      const cartStore = useCartStore();
      cartStore.clearCart(); 

      console.log("SISTEMA: Usuario rotado. Carrito reseteado.");
    }
  }
});