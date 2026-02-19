import { defineStore } from 'pinia';
import usersData from '@/data/users.json';

export const useUsersStore = defineStore('users', {
  state: () => ({
    // Cargamos el primer usuario del JSON como usuario activo
    currentUser: usersData[0], 
    allUsers: usersData
  }),
  actions: {
    // Acción para cambiar de usuario (opcional por ahora)
    login(user) {
      this.currentUser = user;
    }
  }
});