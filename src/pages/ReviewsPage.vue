<template>
  <div class="reviews-page">
    <div class="container">
      <div class="reviews-header">
        <h1>ОТЗЫВЫ</h1>
        <p>Что говорят наши гости</p>
      </div>

      <div class="reviews-content">
        <!-- Форма отзыва -->
        <div class="add-review">
          <h2>Оставить отзыв</h2>
          <form @submit.prevent="submitReview" class="review-form">
            <input 
              v-model="newReview.name" 
              type="text" 
              placeholder="Ваше имя" 
              required
              class="form-input"
            >
            <textarea 
              v-model="newReview.text" 
              placeholder="Ваш отзыв..." 
              rows="4" 
              required
              class="form-textarea"
            ></textarea>
            <div class="rating">
              <span>Оценка:</span>
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
            <button type="submit" class="submit-btn">Отправить отзыв</button>
          </form>
        </div>

        <!-- Список отзывов -->
        <div class="reviews-list">
          <h2>Отзывы клиентов</h2>
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
import { ref, reactive } from 'vue'

const newReview = reactive({
  name: '',
  text: '',
  rating: 5
})

const reviews = ref([
  {
    id: 1,
    name: 'Анна',
    text: 'Лучший кофе в городе! Бариста настоящие волшебники, каждый раз рисуют новый рисунок на пенке. Обязательно вернусь!',
    rating: 5,
    date: '2024-02-15'
  },
  {
    id: 2,
    name: 'Михаил',
    text: 'Отличное место для работы. Wi-Fi быстрый, кофе вкусный, атмосфера уютная. Рекомендую флет-уайт!',
    rating: 4,
    date: '2024-02-10'
  },
  {
    id: 3,
    name: 'Екатерина',
    text: 'Обожаю их десерты! Тирамису просто божественный. А кофе всегда свежеобжаренный и ароматный.',
    rating: 5,
    date: '2024-02-05'
  },
  {
    id: 4,
    name: 'Дмитрий',
    text: 'Цены адекватные для такого качества. Персонал вежливый, место чистое и стильное. Буду постоянным клиентом!',
    rating: 5,
    date: '2024-01-28'
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
  
  alert('Спасибо за ваш отзыв!')
}

function getInitials(name) {
  return name.split(' ').map(word => word[0]).join('').toUpperCase()
}

function formatDate(dateString) {
  const options = { day: 'numeric', month: 'long', year: 'numeric' }
  return new Date(dateString).toLocaleDateString('ru-RU', options)
}
</script>

<style scoped>
.reviews-page {
  padding: 2.5rem 0;
  background: #ffffff;
  min-height: 100vh;
}

.reviews-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 3.2rem 2rem;
  background-image: url('https://images.unsplash.com/photo-1459755486867-b55449bb39ff?w=1600');
  background-size: cover;
  background-position: center;
  color: white;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
}

.reviews-header::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.82) 0%, rgba(45, 45, 45, 0.75) 100%);
}

.reviews-header::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #c9a66b, #d4af37);
}

.reviews-header h1 {
  font-size: 2.8rem;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 1;
}

.reviews-header p {
  font-size: 1.2rem;
  opacity: 0.9;
  position: relative;
  z-index: 1;
}

.reviews-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.add-review, .reviews-list {
  background: white;
  padding: 2.2rem;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
}

.add-review h2, .reviews-list h2 {
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  padding-bottom: 0.8rem;
  border-bottom: 2px solid #f0f0f0;
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
}

.review-card {
  background: #fffaf3;
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #c9a66b;
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
  color: #1a1a1a;
}

.date {
  color: #8a8a8a;
  font-size: 0.9rem;
}

.review-text {
  color: #4f4f4f;
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 768px) {
  .reviews-content {
    grid-template-columns: 1fr;
  }
}
</style>
