<script setup>
import { ref } from 'vue';
import { useCartStore } from '@/stores/useCartStore';

const cartStore = useCartStore();
const isModalOpen = ref(false);

// Función para alternar el modal
const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};
</script>

<template>
  <div class="cart-widget-container">
    <div class="cart-button" @click="toggleModal">
      <span class="icon">🛒</span>
      <span class="badge" v-if="cartStore.components.length > 0">
        {{ cartStore.components.length }}
      </span>
      <span class="total">{{ cartStore.totalPrice }}€</span>
    </div>

    <div v-if="isModalOpen" class="modal-overlay" @click.self="toggleModal">
      <div class="modal-content">
        <h3>El teu PC</h3>
        <button class="close-btn" @click="toggleModal">✕</button>
        
        <div v-for="(items, type) in cartStore.groupedByType" :key="type" class="type-group">
           <h4>{{ type }}</h4>
           <ul>
             <li v-for="item in items" :key="item.id">
               {{ item.name }} - <strong>{{ item.price }}€</strong>
             </li>
           </ul>
        </div>

        <div class="modal-footer">
          <p>Total: {{ cartStore.totalPrice }}€</p>
          <button @click="cartStore.checkout" class="checkout-btn">Finalitzar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-button {
  height: 40px;
  min-width: 120px;
  padding: 0 15px;
  background-color: rgba(0, 242, 255, 0.1); /* Fondo cyan translúcido */
  color: #00f2ff;
  border: 1px solid #00f2ff;
  border-radius: 4px; /* Bordes más rectos para look tech */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-sizing: border-box;
  transition: all 0.3s ease;
  box-shadow: inset 0 0 5px rgba(0, 242, 255, 0.2);
}

.cart-button:hover {
  background-color: rgba(0, 242, 255, 0.2);
  box-shadow: 0 0 15px rgba(0, 242, 255, 0.4);
}

.badge {
  background: #ff00ff; /* Magenta para destacar */
  color: white;
  font-size: 0.7rem;
  padding: 2px 6px;
  border-radius: 2px;
  font-weight: bold;
  box-shadow: 0 0 10px rgba(255, 0, 255, 0.5);
}

.total {
  font-weight: bold;
  border-left: 1px solid rgba(0, 242, 255, 0.5);
  padding-left: 8px;
}

/* Modal Estilo Terminal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  background: #0b0e14;
  color: #00f2ff;
  padding: 2rem;
  border: 2px solid #ff00ff; /* Borde magenta brillante */
  border-radius: 0; /* Ángulos rectos para estética futurista */
  width: 450px;
  max-height: 80vh;
  box-shadow: 0 0 40px rgba(255, 0, 255, 0.2);
}

.type-group h4 {
  color: #ff00ff;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(255, 0, 255, 0.3);
  margin-top: 1rem;
}

.checkout-btn {
  background: #ff00ff;
  color: white;
  border: none;
  padding: 10px 20px;
  width: 100%;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
}
</style>