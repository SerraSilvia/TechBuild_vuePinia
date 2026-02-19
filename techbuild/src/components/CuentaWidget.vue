<script setup>
import { useUsersStore } from "@/stores/useUsersStore.js";

const userStore = useUsersStore();

const cambiarPerfil = () => {
  userStore.switchProfile();
};
</script>

<template>
  <div class="user-container" v-if="userStore.currentUser">
    <div class="details" @click="cambiarPerfil" style="cursor:pointer">
      <span class="label">USER_ID:</span>
      <span class="name">{{ userStore.currentUser.userName }}</span>
    </div>
  </div>
</template>

<style scoped>
.user-container { color: white; font-family: 'Orbitron', sans-serif; }
.label { color: #00f2ff; font-size: 0.7rem; display: block; }
.name { font-weight: bold; border-bottom: 1px solid transparent; }
.name:hover { border-bottom: 1px solid #ff00ff; color: #ff00ff; }
</style>