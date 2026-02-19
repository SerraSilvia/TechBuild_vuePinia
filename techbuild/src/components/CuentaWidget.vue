<script setup>
import { useUsersStore } from "@/stores/useUsersStore.js";

const userStore = useUsersStore();

const visitarGithub = () => {
  window.open(userStore.currentUser.github, '_blank');
};
</script>

<template>
  <div class="user-info">
    <div class="details">
      <p class="label">Usuari:</p>
      <p class="name">{{ userStore.currentUser.userName }}</p>
    </div>
    <button @click="visitarGithub" class="github-btn" title="Ver perfil">
      GitHub
    </button>
  </div>
</template>

<style scoped>
.user-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: 'Orbitron', sans-serif;
}

.label {
  font-size: 0.6rem;
  color: #00f2ff; /* Cyan para etiquetas */
  text-transform: uppercase;
  margin: 0;
  letter-spacing: 1px;
}

.name {
  font-weight: bold;
  color: #fff;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  margin: 0;
  font-size: 0.9rem;
}

.github-btn {
  height: 40px;
  min-width: 100px;
  padding: 0 15px;
  background-color: transparent;
  color: #ff00ff; /* Magenta */
  border: 1px solid #ff00ff;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.github-btn:hover {
  background-color: rgba(255, 0, 255, 0.1);
  box-shadow: 0 0 15px rgba(255, 0, 255, 0.5);
  transform: translateY(-2px);
}
</style>