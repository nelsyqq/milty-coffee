<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Milty Coffee SHOP</h3>
          <p>Лучший кофе в городе с 2024 года</p>
          <p>Мы создаем искусство в каждой чашке</p>
        </div>
        
        <div class="footer-section">
          <h4>Быстрые ссылки</h4>
          <router-link to="/menu" class="footer-link">Меню</router-link>
          <router-link to="/about" class="footer-link">О нас</router-link>
          <router-link to="/reviews" class="footer-link">Отзывы</router-link>
          <router-link to="/contact" class="footer-link">Контакты</router-link>
        </div>
        
        <div class="footer-section">
          <h4>Контакты</h4>
          <p>📍 ул. Кофейная, 15, Москва</p>
          <p>📞 +7 (999) 123-45-67</p>
          <p>✉️ info@miltycoffee.ru</p>
        </div>
        
        <div class="footer-section">
          <h4>Часы работы</h4>
          <p>Пн-Пт: 8:00 - 22:00</p>
          <p>Сб-Вс: 9:00 - 23:00</p>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Milty Coffee SHOP. Все права защищены.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
  padding: 2rem 0 1rem;
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3, .footer-section h4 {
  color: #c9a66b;
  margin-bottom: 1rem;
}

.footer-section p {
  margin: 0.5rem 0;
  opacity: 0.9;
}

.footer-link {
  display: block;
  color: white;
  text-decoration: none;
  margin: 0.3rem 0;
  opacity: 0.9;
  transition: opacity 0.3s;
}

.footer-link:hover {
  opacity: 1;
  text-decoration: underline;
}

.footer-bottom {
  text-align: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0.8;
  font-size: 0.9rem;
}
</style>
