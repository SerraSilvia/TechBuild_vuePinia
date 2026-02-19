<script setup>
import CuentaWidget from './CuentaWidget.vue';
import CartWidget from './CartWidget.vue';
</script>

<template>
  <header class="cyber-header">
    <div class="logo-container">
      <router-link to="/" class="logo-link">
        <h1 class="neon-text">TECH<span>BUILDS</span></h1>
      </router-link>
    </div>

    <nav class="cyber-nav">
      <router-link to="/" class="nav-link">HOME</router-link>
      <router-link to="/botiga" class="nav-link">BOTIGA</router-link>
    </nav>

    <div class="widgets">
      <CuentaWidget />
      <CartWidget />
    </div>
  </header>
</template>

<style scoped>
.cyber-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 2rem;
  background-color: rgba(11, 14, 20, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 2px solid #00f2ff;
  box-shadow: 0 4px 15px rgba(0, 242, 255, 0.2);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo-link {
  text-decoration: none;
}

/* --- SOLUCIÓN AL APRETAMIENTO --- */
.cyber-nav {
  display: flex;
  gap: 2.5rem; /* Espacio generoso entre Home y Botiga */
}

.nav-link {
  color: #a0aec0; /* Color apagado por defecto */
  text-decoration: none;
  font-family: 'Orbitron', sans-serif;
  font-size: 1rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  position: relative;
}

.nav-link:hover {
  color: #00f2ff;
  text-shadow: 0 0 8px rgba(0, 242, 255, 0.6);
}

/* --- MARCADO DE RUTA ACTIVA --- */
/* Vue Router aplica esta clase automáticamente al link de la página actual */
.router-link-active {
  color: #ff00ff !important; /* Magenta neón */
  font-weight: 900; /* Negrita máxima */
  text-shadow: 0 0 10px rgba(255, 0, 255, 0.8);
}

/* Opcional: una barrita debajo del link activo */
.router-link-active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 15%;
  width: 70%;
  height: 2px;
  background: #ff00ff;
  box-shadow: 0 0 8px #ff00ff;
}

/* Estilos de Logo que ya tenías */
h1 {
  font-size: 1.8rem;
  margin: 0;
  color: #fff;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 3px;
}

h1 span {
  color: #ff00ff;
  text-shadow: 0 0 10px rgba(255, 0, 255, 0.8);
}

.widgets {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.cyber-header::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #ff00ff, #00f2ff, transparent);
  animation: scan 3s linear infinite;
}

@keyframes scan {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
</style>