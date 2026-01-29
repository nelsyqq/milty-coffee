<template>
  <footer class="footer">
    <div class="container">
      <p>Футер &copy; {{ currentYear }} Мой сайт. Все права защищены.</p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())
</script>

<style scoped>
.footer {
  background-color: #2c3e50;
  color: white;
  padding: 1.5rem 0;
  margin-top: auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
}
</style>