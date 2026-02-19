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
  <div class="p-6">
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      <ComponentCard 
        v-for="item in productStore.products" 
        :key="item.id" 
        :product="item"
        @add="cartStore.addComponent"
      />
    </div>
  </div>
</template>