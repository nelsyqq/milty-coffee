<template>
  <div class="home-page">
    <!-- Герой секция -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Milty Coffee</h1>
          <p class="hero-subtitle">Лучший кофе в городе</p>
          <router-link to="/menu" class="cta-button">
            СМОТРЕТЬ МЕНЮ
          </router-link>
        </div>
      </div>
    </section>

    <!-- Адреса кофеен -->
    <section class="locations">
      <div class="container">
        <h2 class="section-title">Наши кофейни</h2>
        <div class="locations-grid">
          <div class="city-group">
            <h3>Москва</h3>
            <ul>
              <li>ул. Кофейная, 15</li>
              <li>Арбат, 5</li>
              <li>ул. Ленина, 20</li>
              <li>пр. Мира, 10</li>
            </ul>
          </div>
          <div class="city-group">
            <h3>Владимир</h3>
            <ul>
              <li>ул. Большая Московская, 1</li>
              <li>ул. Мира, 30</li>
              <li>пр. Ленина, 5</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Призыв к действию -->
    <section class="cta-section">
      <div class="container">
        <h2>Попробуйте наш кофе уже сегодня!</h2>
        <p>Приходите и убедитесь сами в качестве нашего кофе</p>
        <router-link to="/contact" class="cta-button secondary">
          НАШИ КОНТАКТЫ
        </router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  padding: 0;
  background: #ffffff;
  min-height: 100vh;
}

.hero {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
              url('https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80');
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
  font-weight: 800;
  letter-spacing: -1px;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.4);
  line-height: 1.1;
  color: white;
}

.hero-subtitle {
  font-size: 1.6rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  font-weight: 300;
  letter-spacing: 0.5px;
}

.cta-button {
  display: inline-block;
  background: linear-gradient(135deg, #c9a66b 0%, #d4af37 100%);
  color: #1a1a1a;
  padding: 1.2rem 3rem;
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s ease;
  border: none;
  box-shadow: 0 4px 15px rgba(201, 166, 107, 0.4);
  letter-spacing: 0.5px;
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

.locations { padding: 5rem 0; background: #fdfbf7; color: #333; }
.locations .section-title { color: #5D4037; margin-bottom: 3rem; }
.locations-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; max-width: 900px; margin: 0 auto; padding: 0 2rem; }
.city-group { background: #fff; padding: 2rem; border-radius: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); border: 1px solid #f0f0f0; }
.city-group h3 { font-size: 1.5rem; margin-bottom: 1.5rem; color: #8B4513; }
.city-group ul { list-style: none; padding: 0; }
.city-group li { margin-bottom: 0.8rem; color: #555; position: relative; padding-left: 1.5rem; font-size: 1.1rem; }
.city-group li::before { content: '📍'; position: absolute; left: 0; }

.cta-section {
  background: #fdfbf7;
  padding: 6rem 0;
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
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
  
  .cta-section h2 {
    font-size: 1.8rem;
  }
}
</style>
