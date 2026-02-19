<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <div class="app-container">
    <NavBar />
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style>
/* Reset global para que el fondo oscuro ocupe toda la pantalla */
body, html {
  margin: 0;
  padding: 0;
  background-color: #0b0e14;
}

.main-content {
  min-height: calc(100vh - 70px); /* Restamos la altura de la NavBar */
}

/* Animación de transición Cyberpunk */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>