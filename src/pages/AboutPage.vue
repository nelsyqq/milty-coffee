<template>
  <div class="about-page">
    <h1>О нас</h1>
    <div class="content">
      <p>Это страница "О нас" вашего Vue.js приложения.</p>
      <p>Здесь вы можете разместить информацию о вашем проекте или компании.</p>
      
      <div class="info-cards">
        <div class="card">
          <h3>---</h3>
          <p>---</p>
        </div>
        <div class="card">
          <h3>Технологии</h3>
          <p>Vue.js 3, TypeScript, Vite, Vue Router</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  padding: 2rem 0;
}

.about-page h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.content {
  max-width: 800px;
  margin: 0 auto;
}

.info-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}
</style>