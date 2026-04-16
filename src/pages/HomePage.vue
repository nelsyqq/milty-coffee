<template>
  <div class="home-page">
    <!-- Герой секция -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Milty Coffee</h1>
          <p class="hero-subtitle">Кофе, к которому хочется возвращаться</p>
          <router-link to="/menu" class="cta-button">
            Смотреть меню
          </router-link>
        </div>
      </div>
    </section>

    <section class="highlights">
      <div class="container">
        <div class="highlights-grid">
          <article
            v-for="highlight in highlights"
            :key="highlight.title"
            class="highlight-card"
          >
            <h3>{{ highlight.title }}</h3>
            <p>{{ highlight.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Призыв к действию -->
    <section class="cta-section">
      <div class="container">
        <h2>Загляните к нам сегодня</h2>
        <p>Убедитесь в качестве зерна и сервиса — мы будем рады видеть вас</p>
        <router-link to="/contact" class="cta-button secondary">
          Контакты и адреса
        </router-link>
      </div>
    </section>

  </div>
</template>

<script setup>
const highlights = [
  {
    title: 'Свежая обжарка',
    text: 'Используем свежеобжаренные зерна и следим за стабильностью вкуса.'
  },
  {
    title: 'Уютная атмосфера',
    text: 'Пространство для встреч, работы и спокойного отдыха в течение дня.'
  },
  {
    title: 'Быстрый сервис',
    text: 'Готовим аккуратно и без лишнего ожидания даже в часы пик.'
  }
]
</script>

<style scoped>
.home-page {
  padding: 0;
  background: var(--coffee-bg, #fdfbf7);
  min-height: 100vh;
  font-family: inherit;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.hero {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
              url('/fonglavnaya.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 2rem;
  margin-bottom: 0;
  position: relative;
}


.hero-content {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.4);
  line-height: 1.15;
  color: white;
}

.hero-subtitle {
  font-size: 1.4rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  font-weight: 300;
  letter-spacing: 0.01em;
}

.cta-button {
  display: inline-block;
  background: linear-gradient(135deg, #c9a66b 0%, #d4af37 100%);
  color: #1a1a1a;
  padding: 1.2rem 3rem;
  font-size: 1.05rem;
  font-weight: 700;
  text-decoration: none;
  border-radius: 50px;
  transition: transform var(--transition-med), box-shadow var(--transition-med), background var(--transition-med), color var(--transition-med);
  border: none;
  box-shadow: 0 4px 15px rgba(201, 166, 107, 0.4);
  letter-spacing: 0.02em;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 25px rgba(201, 166, 107, 0.6);
  background: linear-gradient(135deg, #d4af37 0%, #e6c86e 100%);
}

.cta-button.secondary {
  background: transparent;
  border: 2px solid #c9a66b;
  color: #c9a66b;
  box-shadow: none;
}

.cta-button.secondary:hover {
  background: #c9a66b;
  color: #1a1a1a;
  border-color: #c9a66b;
}

.highlights {
  margin-top: -3rem;
  position: relative;
  z-index: 2;
  padding: 0 0 2rem;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
}

.highlight-card {
  background: #ffffff;
  border-radius: var(--radius-md);
  padding: 1.5rem;
  border: var(--border-soft);
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-med), box-shadow var(--transition-med);
}

.highlight-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}

.highlight-card h3 {
  color: #8b4513;
  margin: 0 0 0.75rem;
  font-size: 1.2rem;
}

.highlight-card p {
  color: #5d4037;
  margin: 0;
}

.cta-section {
  background: #fdfbf7;
  padding: 4rem 0 6rem;
  text-align: center;
  margin-top: 0;
  position: relative;
}

.cta-section h2 {
  color: #1a1a1a;
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.cta-section p {
  color: #666;
  margin-bottom: 2.5rem;
  font-size: 1.2rem;
  font-weight: 300;
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }

  .highlights {
    margin-top: -2rem;
  }

  .highlights-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-section h2 {
    font-size: 1.8rem;
  }
}

@media (max-width: 1024px) {
  .hero {
    background-attachment: scroll;
  }
}
</style>
