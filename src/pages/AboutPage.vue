<template>
  <div class="about-page page-shell">
    <div class="page-hero page-hero--about">
      <div class="page-hero-overlay">
        <div class="page-container">
          <div class="page-hero-content">
            <h1>О Milty Coffee</h1>
            <p>История, философия и любовь к хорошему кофе</p>
          </div>
        </div>
      </div>
    </div>

    <div class="page-container">
      <div class="about-grid">
        <div
          v-for="card in aboutCards"
          :key="card.title"
          :class="['about-card', card.className]"
        >
          <div class="card-image">
            <img :src="card.image" :alt="card.alt" />
          </div>
          <div class="card-content">
            <h2>{{ card.title }}</h2>
            <p v-for="paragraph in card.paragraphs" :key="paragraph">{{ paragraph }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const aboutCards = [
  {
    className: 'mission-card',
    title: 'Наша миссия',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
    alt: 'Чашка кофе',
    paragraphs: [
      'Мы делаем не просто кофе — в каждой чашке внимание к деталям. Наша цель — дарить гостям яркие вкусы и спокойный, тёплый опыт.'
    ]
  },
  {
    className: 'quality-card',
    title: 'Качество',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800',
    alt: 'Кофейные зёрна',
    paragraphs: [
      'Зёрна отбираем на проверенных плантациях Колумбии, обжариваем по собственным профилям и следим за свежестью каждой партии.',
      'Готовим на профессиональных итальянских кофемашинах — стабильная экстракция и вкус в каждой чашке.'
    ]
  },
  {
    className: 'atmosphere-card',
    title: 'Атмосфера',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800',
    alt: 'Интерьер кофейни',
    paragraphs: [
      'Milty Coffee — место с уютной, «живой» атмосферой: можно встретиться с друзьями, поработать с ноутбуком или неспешно допить капучино у окна.'
    ]
  }
]
</script>

<style scoped>
.page-hero--about {
  background-image: url('/fononas.jpg');
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.about-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

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

@media (max-width: 768px) {
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