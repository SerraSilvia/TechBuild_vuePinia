<script setup>
// Recibimos el producto como prop desde Botiga.vue
defineProps(['product']);
// Emitimos el evento para añadir al carrito
defineEmits(['add']);
</script>

<template>
  <div class="cyber-card">
    <div class="image-wrapper">
      <img :src="product.image || 'https://via.placeholder.com/200x150/0b0e14/00f2ff?text=TECH'" :alt="product.name" />
      <div class="type-badge">{{ product.type }}</div>
    </div>

    <div class="card-info">
      <h3>{{ product.name }}</h3>
      <p class="description">{{ product.description }}</p>
      
      <div class="card-footer">
        <span class="price">{{ product.price }}€</span>
        <button class="add-btn" @click="$emit('add', product)">
          COMPRAR
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cyber-card {
  background: rgba(20, 24, 33, 0.9);
  border: 1px solid #00f2ff;
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  position: relative;
}

.cyber-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px rgba(0, 242, 255, 0.3);
  border-color: #ff00ff; /* Cambia a magenta al pasar el ratón */
}

.image-wrapper {
  position: relative;
  height: 180px;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-wrapper img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.type-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ff00ff;
  color: white;
  font-size: 0.6rem;
  padding: 2px 8px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: 'Orbitron', sans-serif;
}

.card-info {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

h3 {
  margin: 0;
  color: #fff;
  font-size: 1.1rem;
  font-family: 'Orbitron', sans-serif;
}

.description {
  color: #a0aec0;
  font-size: 0.85rem;
  margin: 1rem 0;
  flex-grow: 1;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 242, 255, 0.2);
}

.price {
  color: #00f2ff;
  font-size: 1.3rem;
  font-weight: bold;
  text-shadow: 0 0 5px rgba(0, 242, 255, 0.5);
}

.add-btn {
  background: transparent;
  border: 1px solid #ff00ff;
  color: #ff00ff;
  padding: 8px 15px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
  font-family: 'Orbitron', sans-serif;
  font-size: 0.8rem;
}

.add-btn:hover {
  background: #ff00ff;
  color: white;
  box-shadow: 0 0 15px #ff00ff;
}
</style>