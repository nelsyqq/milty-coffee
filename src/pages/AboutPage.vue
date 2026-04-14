<template>
  <div class="about-page">
    <div class="hero-section">
      <div class="hero-overlay">
        <div class="container">
          <div class="hero-content">
            <h1>О Milty COFFEE</h1>
            <p>Наша история, философия и страсть к кофе</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="about-grid">
        <div class="about-card mission-card">
          <div class="card-image">
            <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800" alt="Coffee Art" />
          </div>
          <div class="card-content">
            <h2>Наша миссия</h2>
            <p>Мы создаем не просто кофе, а искусство в каждой чашке. Каждый день мы стремимся дарить нашим гостям уникальный опыт и самые лучшие вкусовые ощущения.</p>
          </div>
        </div>

        <div class="about-card quality-card">
          <div class="card-image">
            <img src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800" alt="Coffee Beans" />
          </div>
          <div class="card-content">
            <h2>Качество</h2>
            <p>Мы тщательно отбираем кофейные зерна только из проверенных плантаций Колумбии. Все зерна проходят тщательный отбор и обжарку по нашим уникальным рецептам.</p>
            <p>Наше оборудование — профессиональные итальянские кофемашины, которые обеспечивают идеальное приготовление кофе.</p>
          </div>
        </div>

        <div class="about-card team-card">
          <div class="card-image">
            <img src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800" alt="Barista" />
          </div>
          <div class="card-content">
            <h2>Наша команда</h2>
            <p>Наши бариста проходят строгий отбор и обучение. Каждый из них — настоящий художник, способный создать шедевр на поверхности вашего кофе.</p>
            <div class="team-members">
              <div class="team-member">
                <span class="member-name">Михаил</span>
                <span class="member-role">Специалист по эспрессо</span>
              </div>
              <div class="team-member">
                <span class="member-name">Павел</span>
                <span class="member-role">Мастер латте-арта</span>
              </div>
              <div class="team-member">
                <span class="member-name">Максим</span>
                <span class="member-role">Эксперт по альтернативным методам</span>
              </div>
            </div>
          </div>
        </div>

        <div class="about-card atmosphere-card">
          <div class="card-image">
            <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800" alt="Coffee Shop" />
          </div>
          <div class="card-content">
            <h2>Атмосфера</h2>
            <p>Milty Coffee — это не просто кофейня, это место, где царит уютная и творческая атмосфера. Мы создали пространство, где можно насладиться отличным кофе, поработать или просто отдохнуть.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
}

.hero-section {
  position: relative;
  height: 60vh;
  min-height: 400px;
  background-image: url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1600');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  margin-bottom: 4rem;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.85) 0%, rgba(45, 45, 45, 0.75) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  text-align: center;
  color: white;
  animation: fadeInUp 1s ease;
}

.hero-content h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  letter-spacing: 2px;
}

.hero-content p {
  font-size: 1.4rem;
  opacity: 0.95;
  font-weight: 300;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.about-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: fadeInUp 0.8s ease;
}

.about-card:nth-child(1) { animation-delay: 0.1s; }
.about-card:nth-child(2) { animation-delay: 0.2s; }
.about-card:nth-child(3) { animation-delay: 0.3s; }
.about-card:nth-child(4) { animation-delay: 0.4s; }

.about-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.card-image {
  height: 300px;
  overflow: hidden;
  position: relative;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.about-card:hover .card-image img {
  transform: scale(1.1);
}

.card-content {
  padding: 2rem;
}

.card-content h2 {
  color: #8B4513;
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 700;
  position: relative;
  padding-bottom: 0.5rem;
}

.card-content h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #c9a66b, #d4af37);
  border-radius: 2px;
}

.card-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #5D4037;
  margin-bottom: 1rem;
}

.team-members {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
}

.team-member {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: linear-gradient(135deg, rgba(201, 166, 107, 0.1), rgba(212, 175, 55, 0.05));
  border-radius: 10px;
  border-left: 3px solid #c9a66b;
  transition: all 0.3s ease;
}

.team-member:hover {
  background: linear-gradient(135deg, rgba(201, 166, 107, 0.2), rgba(212, 175, 55, 0.1));
  transform: translateX(5px);
}

.member-name {
  font-weight: 600;
  color: #8B4513;
  font-size: 1.1rem;
}

.member-role {
  color: #c9a66b;
  font-size: 0.95rem;
  font-weight: 500;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }

  .hero-content p {
    font-size: 1.1rem;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .card-image {
    height: 250px;
  }

  .card-content {
    padding: 1.5rem;
  }

  .card-content h2 {
    font-size: 1.6rem;
  }

  .card-content p {
    font-size: 1rem;
  }
}
</style>