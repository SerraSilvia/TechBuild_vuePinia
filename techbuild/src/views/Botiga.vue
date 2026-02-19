<script setup>
import { onMounted } from 'vue';
import { useProductStore } from '@/stores/useProductStore';
import { useCartStore } from '@/stores/useCartStore';
import ComponentCard from '@/components/ComponentCard.vue';

const productStore = useProductStore();
const cartStore = useCartStore();

onMounted(() => {
  productStore.loadHardware();
});
</script>

<template>
  <div class="botiga-container">
    <h2 class="section-title">COMPONENTS <span>DISPONIBLES</span></h2>
    
    <div class="products-grid">
      <ComponentCard 
        v-for="item in productStore.products" 
        :key="item.id" 
        :product="item"
        @add="cartStore.addComponent"
      />
    </div>
  </div>
</template>

<style scoped>
.botiga-container {
  padding: 2rem;
  max-width: 1200px; /* Centramos el contenido */
  margin: 0 auto;
}

.section-title {
  color: #00f2ff;
  font-family: 'Orbitron', sans-serif;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.5rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); 
  gap: 1.5rem;
  justify-items: center; 
}
</style>