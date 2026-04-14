<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Milty Coffee</h3>
          <p>Кофейня с 2024 года</p>
          <p>Внимание к зерну, вкусу и гостям</p>
          <router-link to="/" class="footer-logo-link" aria-label="Milty Coffee — на главную">
            <img src="/logo.png" alt="Milty Coffee Logo" class="footer-logo-image" />
          </router-link>
        </div>
        
        <div class="footer-section">
          <h4>Быстрые ссылки</h4>
          <router-link
            v-for="link in quickLinks"
            :key="link.to"
            :to="link.to"
            class="footer-link"
          >
            {{ link.label }}
          </router-link>
        </div>
        
        <div class="footer-section">
          <h4>Контакты</h4>
          <p>📍 ул. Кофейная, 15, Москва</p>
          <p>📞 +7 (999) 123-45-67</p>
          <p>✉️ info@milty.ru</p>
        </div>
        
        <div class="footer-section">
          <h4>Часы работы</h4>
          <p>Пн–пт: 08:00–22:00</p>
          <p>Сб–вс: 09:00–23:00</p>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Milty Coffee. Все права защищены.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())

const quickLinks = [
  { to: '/menu', label: 'Меню' },
  { to: '/about', label: 'О нас' },
  { to: '/reviews', label: 'Отзывы' },
  { to: '/contact', label: 'Контакты' }
]
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
  padding: 2rem 0 1rem;
  margin-top: auto;
}

.container {
  max-width: var(--container-max, 1200px);
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
  align-items: start;
}

.footer-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.footer-section h3,
.footer-section h4 {
  color: #c9a66b;
  margin: 0 0 0.85rem;
}

.footer-logo-link {
  display: inline-flex;
  margin-top: 0.6rem;
  text-decoration: none;
}

.footer-logo-image {
  width: 165px;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 3px 8px rgba(0, 0, 0, 0.35));
}

.footer-section p {
  margin: 0 0 0.45rem;
  opacity: 0.9;
  line-height: 1.45;
}

.footer-link {
  display: block;
  color: white;
  text-decoration: none;
  margin: 0 0 0.45rem;
  opacity: 0.9;
  transition: opacity 0.3s, transform 0.3s;
}

.footer-link:hover {
  opacity: 1;
  transform: translateX(3px);
  text-decoration: underline;
}

.footer-bottom {
  text-align: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0.8;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer {
    padding-top: 1.5rem;
  }

  .container {
    padding: 0 1rem;
  }

  .footer-content {
    gap: 1.5rem;
  }
}
</style>
