<script setup>
// imports
import CartWidget from './CartWidget.vue'
import CuentaWidget from './CuentaWidget.vue'
</script>

<template>
  <header>
    <h1>TechBuilds</h1>
    <div class="widgets">
      <CuentaWidget />
      <CartWidget />
    </div>
  </header>
</template>

<style scoped>
h1 {
  font-size: 1.5rem;
  color: #333;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f5f5f5;
}
.widgets {
  display: flex;
  gap: 1rem;
}
</style>
