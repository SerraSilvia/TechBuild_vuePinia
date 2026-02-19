<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const goToStore = () => {
  router.push('/botiga')
}
</script>


<template>
  <div class="home-container">
    <div class="hero-content">
      <h1 class="hero-title">CONSTRUEIX EL TEU FUTUR PC</h1>
      
      <div class="image-wrapper">
        <img 
          src="https://backiee.com/static/wallpapers/1000x563/336524.jpg" 
          alt="PC Master Race" 
          class="hero-image"
        />
        <div class="neon-overlay"></div>
      </div>

      <p class="hero-subtitle">
        Selecciona els components d'última generació i domina la galàxia amb <span class="highlight">TechBuilds</span>.
      </p>

      <button class="cta-button" @click="goToStore">
        COMENÇA A CONSTRUIR
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Contenedor principal con fondo oscuro espacial */
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0b0e14; /* Fondo oscuro profundo */
  background-image: radial-gradient(circle at center, #1a1f2c 0%, #0b0e14 100%);
  padding: 1rem;
  overflow: hidden;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 1;
}

/* Título con resplandor neón Cyan */
.hero-title {
  font-size: 3.5rem;
  color: #00f2ff;
  text-shadow: 0 0 10px rgba(0, 242, 255, 0.7), 0 0 20px rgba(0, 242, 255, 0.3);
  margin-bottom: 2rem;
  font-family: 'Orbitron', 'Segoe UI', sans-serif; /* Orbitron queda genial aquí */
  font-weight: 900;
  letter-spacing: 2px;
}

/* Wrapper de imagen con marco de neón magenta */
.image-wrapper {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin-bottom: 2rem;
  border-radius: 15px;
  padding: 5px;
  background: linear-gradient(45deg, #ff00ff, #00f2ff);
  box-shadow: 0 0 30px rgba(255, 0, 255, 0.3);
}

.hero-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 10px;
}

/* Subtítulo con contraste suave */
.hero-subtitle {
  font-size: 1.2rem;
  color: #a0aec0;
  margin-bottom: 3rem;
  max-width: 600px;
  line-height: 1.6;
}

.highlight {
  color: #ff00ff;
  font-weight: bold;
  text-shadow: 0 0 5px rgba(255, 0, 255, 0.5);
}

/* Botón CTA Neón Vibrante */
.cta-button {
  position: relative;
  background: linear-gradient(90deg, #7000ff, #ff00ff);
  color: white;
  font-size: 1.1rem;
  font-weight: 800;
  letter-spacing: 1px;
  padding: 1.2rem 3rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  box-shadow: 0 0 15px rgba(112, 0, 255, 0.5);
}

.cta-button:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 0 30px rgba(255, 0, 255, 0.8);
  filter: brightness(1.2);
}

</style>