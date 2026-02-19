<script setup>
import CartWidget from './CartWidget.vue'
import CuentaWidget from './CuentaWidget.vue'
</script>

<template>
  <header class="cyber-header">
    <div class="logo-container">
      <h1 class="neon-text">TECH<span>BUILDS</span></h1>
    </div>
    <div class="widgets">
      <CuentaWidget />
      <CartWidget />
    </div>
  </header>
</template>

<style scoped>
/* Header con efecto Glassmorphism (cristal) */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 2rem;
  background-color: rgba(11, 14, 20, 0.9); /* Fondo oscuro semitransparente */
  backdrop-filter: blur(10px); /* Desenfoque de fondo estilo cristal */
  border-bottom: 2px solid #00f2ff; /* Línea de neón inferior */
  box-shadow: 0 4px 15px rgba(0, 242, 255, 0.2);
  position: sticky;
  top: 0;
  z-index: 1000;
}

/* Título estilo Logo de juego futurista */
h1 {
  font-size: 1.8rem;
  margin: 0;
  color: #fff;
  font-family: 'Orbitron', sans-serif; /* Si no tienes Orbitron, usa una sans-serif ancha */
  letter-spacing: 3px;
  text-transform: uppercase;
}

/* El span le da el toque de contraste magenta */
h1 span {
  color: #ff00ff;
  text-shadow: 0 0 10px rgba(255, 0, 255, 0.8);
}

.neon-text {
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
}

.widgets {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

/* Efecto de "escaneo" sutil en el borde */
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