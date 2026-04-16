<template>
  <div class="reviews-page page-shell">
    <div class="page-hero page-hero--reviews">
      <div class="page-hero-overlay">
        <div class="page-container">
          <div class="page-hero-content">
            <h1>Отзывы</h1>
            <p>Мнения тех, кто уже заходил к нам</p>
          </div>
        </div>
      </div>
    </div>

    <div class="page-container">
      <div class="reviews-content">
        <!-- Форма отзыва -->
        <div class="add-review">
          <h2>Ваш отзыв</h2>
          <form @submit.prevent="submitReview" class="review-form">
            <input 
              v-model="newReview.name" 
              type="text" 
              placeholder="Ваше имя" 
              aria-label="Ваше имя"
              required
              class="form-input"
            >
            <textarea 
              v-model="newReview.text" 
              placeholder="Расскажите, что понравилось" 
              aria-label="Ваш отзыв"
              rows="4" 
              required
              class="form-textarea"
            ></textarea>
            <div class="rating">
              <span class="rating-label">Оценка</span>
              <div class="stars">
                <span 
                  v-for="star in 5" 
                  :key="star"
                  @click="setRating(star)"
                  :class="['star', star <= newReview.rating ? 'active' : '']"
                >
                  ★
                </span>
              </div>
            </div>
            <button type="submit" class="submit-btn">Отправить</button>
          </form>
        </div>

        <!-- Список отзывов -->
        <div class="reviews-list">
          <h2>Что пишут гости</h2>
          <div class="review-cards">
            <div v-for="review in reviews" :key="review.id" class="review-card">
              <div class="review-header">
                <div class="reviewer-info">
                  <div class="avatar">{{ getInitials(review.name) }}</div>
                  <div>
                    <h3>{{ review.name }}</h3>
                    <div class="stars">
                      <span 
                        v-for="star in 5" 
                        :key="star"
                        :class="['star', star <= review.rating ? 'active' : '']"
                      >
                        ★
                      </span>
                    </div>
                  </div>
                </div>
                <div class="date">{{ formatDate(review.date) }}</div>
              </div>
              <p class="review-text">{{ review.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const newReview = reactive({
  name: '',
  text: '',
  rating: 5
})

const reviews = ref([
  {
    id: 1,
    name: 'Анна',
    text: 'Очень вкусный кофе и внимательные бариста — каждый раз украшают капучино узором. Обязательно вернусь.',
    rating: 5,
    date: '2026-02-15'
  },
  {
    id: 2,
    name: 'Михаил',
    text: 'Удобно работать с ноутбуком: Wi‑Fi стабильный, кофе вкусный, атмосфера спокойная. Советую флэт-уайт.',
    rating: 4,
    date: '2026-02-10'
  },
  {
    id: 3,
    name: 'Екатерина',
    text: 'Десерты — отдельная любовь: тирамису нежный, а кофе всегда свежий и ароматный.',
    rating: 5,
    date: '2026-02-05'
  },
  {
    id: 4,
    name: 'Дмитрий',
    text: 'Цены адекватные для такого качества. Персонал вежливый, всё чисто и аккуратно — хочу ходить сюда чаще.',
    rating: 5,
    date: '2026-01-28'
  }
])

function setRating(rating) {
  newReview.rating = rating
}

function submitReview() {
  if (!newReview.name.trim() || !newReview.text.trim()) return

  reviews.value.unshift({
    id: reviews.value.length + 1,
    name: newReview.name,
    text: newReview.text,
    rating: newReview.rating,
    date: new Date().toISOString().split('T')[0]
  })

  // Сброс формы
  newReview.name = ''
  newReview.text = ''
  newReview.rating = 5

  alert('Спасибо! Ваш отзыв появится в списке.')
}

function getInitials(name) {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}
</script>

<style scoped>
.page-hero--reviews {
  background-image: url('/fonotzyv.jpg');
}

.reviews-content {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 3rem;
  align-items: start;
}

.add-review, .reviews-list {
  background: white;
  padding: 2.2rem;
  border-radius: 20px;
  box-shadow: var(--shadow-md);
  border: var(--border-soft);
}

.add-review h2,
.reviews-list h2 {
  color: #8b4513;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: none;
  position: relative;
  font-weight: 700;
}

.add-review h2::after,
.reviews-list h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #c9a66b, #d4af37);
  border-radius: 2px;
}

.review-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-input,
.form-textarea {
  padding: 0.95rem;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  font-family: inherit;
  background: #fafafa;
  transition: all 0.3s ease;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #c9a66b;
  background: white;
  box-shadow: 0 0 0 3px rgba(201, 166, 107, 0.1);
}

.rating {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.rating-label {
  color: #5d4037;
  font-weight: 500;
  font-size: 0.95rem;
}

.stars {
  display: flex;
  gap: 0.3rem;
}

.star {
  font-size: 1.5rem;
  color: #E0E0E0;
  cursor: pointer;
  transition: color 0.2s;
}

.star.active {
  color: #FFD54F;
}

.star:hover {
  color: #FFD54F;
}

.submit-btn {
  background: linear-gradient(135deg, #c9a66b 0%, #d4af37 100%);
  color: #1a1a1a;
  border: none;
  padding: 0.9rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(201, 166, 107, 0.4);
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(201, 166, 107, 0.6);
  background: linear-gradient(135deg, #d4af37 0%, #e6c86e 100%);
}

.review-cards {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-height: 600px;
  overflow-y: auto;
  padding-right: 0.5rem;
  scrollbar-width: thin;
  scrollbar-color: #c9a66b #f3ede4;
}

.review-card {
  background: #fffaf3;
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #c9a66b;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-med), box-shadow var(--transition-med);
}

.review-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.review-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.reviewer-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.avatar {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #c9a66b 0%, #d4af37 100%);
  color: #1a1a1a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
}

.reviewer-info h3 {
  margin: 0 0 0.3rem 0;
  color: #5d4037;
}

.date {
  color: #8a8a8a;
  font-size: 0.9rem;
}

.review-text {
  color: #5d4037;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 1024px) {
  .reviews-content {
    grid-template-columns: 1fr;
  }
}
</style>
