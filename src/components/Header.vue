<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <router-link to="/" class="nav-link" active-class="active">
          Главная
        </router-link>
        <router-link to="/about" class="nav-link" active-class="active">
          О нас
        </router-link>
        <button class="btn" @click="handleClick">
          Кнопка
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
const handleClick = () => {
  alert('Кнопка нажата!')
}
</script>

<style scoped>
.header {
  background-color: #2c3e50;
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.nav {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 0;
  position: relative;
}

.nav-link:hover {
  opacity: 0.8;
}

.nav-link.active {
  font-weight: bold;
  border-bottom: 2px solid #42b983;
}

.btn {
  margin-left: auto;
  background-color: #42b983;
}

.btn:hover {
  background-color: #359768;
}
</style>