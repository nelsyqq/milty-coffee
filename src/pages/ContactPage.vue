<template>
  <div class="contact-page">
    <div class="container">
      <div class="contact-header">
        <h1>КОНТАКТЫ</h1>
        <p>Приходите к нам за вкусным кофе</p>
      </div>

      <div class="contact-content">
        <div class="contact-info">
          <div class="info-card addresses-card">
            <div class="info-icon">📍</div>
            <h3>Адреса</h3>
            <p>
              <strong>Москва:</strong><br>
              ул. Кофейная, 15<br>
              Арбат, 5<br>
              ул. Ленина, 20<br>
              пр. Мира, 10<br><br>
              <strong>Владимир:</strong><br>
              ул. Большая Московская, 1<br>
              ул. Мира, 30<br>
              пр. Ленина, 5
            </p>
          </div>

          <div class="info-card">
            <div class="info-icon">🕒</div>
            <h3>Часы работы</h3>
            <p>
              Пн: 08:00 - 22:00<br>
              Вт: 08:00 - 22:00<br>
              Ср: 08:00 - 22:00<br>
              Чт: 08:00 - 22:00<br>
              Пт: 08:00 - 22:00<br>
              Сб: 09:00 - 23:00<br>
              Вс: 09:00 - 23:00
            </p>
          </div>

          <div class="info-card">
            <div class="info-icon">📞</div>
            <h3>Телефон</h3>
            <p>+7 (999) 123-45-67</p>
          </div>

          <div class="info-card">
            <div class="info-icon">📧</div>
            <h3>Email</h3>
            <p>info@Miltycoffee.ru</p>
          </div>
        </div>

        <div class="contact-form-section">
          <h2>Свяжитесь с нами</h2>
          <form @submit.prevent="submitContactForm" class="contact-form">
            <div class="form-group">
              <input 
                v-model="contactForm.name" 
                type="text" 
                placeholder="Ваше имя" 
                required
                class="form-input"
              >
            </div>
            <div class="form-group">
              <input 
                v-model="contactForm.email" 
                type="email" 
                placeholder="Ваш email" 
                required
                class="form-input"
              >
            </div>
            <div class="form-group">
              <input 
                v-model="contactForm.phone" 
                type="tel" 
                placeholder="Ваш телефон" 
                class="form-input"
              >
            </div>
            <div class="form-group">
              <textarea 
                v-model="contactForm.message" 
                placeholder="Ваше сообщение..." 
                rows="5" 
                required
                class="form-textarea"
              ></textarea>
            </div>
            <button type="submit" class="submit-btn">Отправить сообщение</button>
          </form>
        </div>
      </div>

      <div class="map-section">
        <h2>Мы на карте</h2>
        <div class="map-container">
          <iframe 
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0&source=constructor" 
            width="100%" 
            height="400" 
            frameborder="0" 
            style="border-radius: 10px;"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const contactForm = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

function submitContactForm() {
  // В реальном приложении здесь был бы запрос к API
  alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.')
  
  // Сброс формы
  contactForm.name = ''
  contactForm.email = ''
  contactForm.phone = ''
  contactForm.message = ''
}
</script>

<style scoped>
.contact-page {
  padding: 2.5rem 0;
  background: #ffffff;
  min-height: 100vh;
}

.contact-header {
  text-align: center;
  margin-bottom: 4rem;
  padding: 3.3rem 2rem;
  background-image: url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1600');
  background-size: cover;
  background-position: center;
  color: white;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
}

.contact-header::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.82) 0%, rgba(45, 45, 45, 0.75) 100%);
}

.contact-header::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #c9a66b, #d4af37);
}

.contact-header h1 {
  font-size: 3rem;
  margin-bottom: 0.8rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  position: relative;
  z-index: 1;
}

.contact-header p {
  font-size: 1.3rem;
  opacity: 0.9;
  font-weight: 300;
  position: relative;
  z-index: 1;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem;
}

.contact-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.addresses-card {
  grid-column: 1 / -1;
  text-align: left;
}

.addresses-card h3,
.addresses-card .info-icon {
  text-align: center;
}

.info-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
}

.info-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  border-color: #c9a66b;
}

.info-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.info-card h3 {
  color: #1a1a1a;
  margin-bottom: 0.8rem;
  font-weight: 700;
  font-size: 1.1rem;
}

.info-card p {
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
}

.contact-form-section {
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
}

.contact-form-section h2 {
  color: #1a1a1a;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f0f0f0;
  font-weight: 700;
  font-size: 1.8rem;
  letter-spacing: -0.3px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-input,
.form-textarea {
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
  background: #fafafa;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #c9a66b;
  background: white;
  box-shadow: 0 0 0 3px rgba(201, 166, 107, 0.1);
}

.submit-btn {
  background: linear-gradient(135deg, #c9a66b 0%, #d4af37 100%);
  color: #1a1a1a;
  border: none;
  padding: 1rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5rem;
  box-shadow: 0 4px 15px rgba(201, 166, 107, 0.4);
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(201, 166, 107, 0.6);
  background: linear-gradient(135deg, #d4af37 0%, #e6c86e 100%);
}

.map-section {
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
  max-width: 1200px;
  margin: 0 auto;
}

.map-section h2 {
  color: #1a1a1a;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f0f0f0;
  font-weight: 700;
  font-size: 1.8rem;
  letter-spacing: -0.3px;
}

.map-container {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid #f0f0f0;
}

.map-container iframe {
  display: block;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
  
  .contact-info {
    grid-template-columns: 1fr;
  }
  
  .contact-header h1 {
    font-size: 2rem;
  }
  
  .contact-header p {
    font-size: 1.1rem;
  }
  
  .map-section {
    padding: 0 1rem 1.5rem 1rem;
  }
}
</style>
