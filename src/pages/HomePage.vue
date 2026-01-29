<template>
  <div class="home-page">
    <div class="hero">
      <h1>Добро пожаловать на наш сайт!</h1>
      <p>Это главная страница вашего Vue.js приложения</p>
    </div>
    
    <div class="content">
      <div class="features">
        <div class="feature-card">
          <h3>🚀 Быстро</h3>
          <p>Современный стек Vue 3 + Vite</p>
        </div>
        <div class="feature-card">
          <h3>⚡ Эффективно</h3>
          <p>Оптимизированная производительность</p>
        </div>
        <div class="feature-card">
          <h3>🎨 Красиво</h3>
          <p>Чистый и современный дизайн</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  padding: 2rem 0;
}

.hero {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 10px;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: white;
}

.hero p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}
</style>