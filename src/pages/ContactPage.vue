<template>
  <div class="contact-page page-shell">
    <div class="page-hero page-hero--contact">
      <div class="page-hero-overlay">
        <div class="page-container">
          <div class="page-hero-content">
            <h1>Контакты</h1>
            <p>Заходите в гости — будем рады видеть вас</p>
          </div>
        </div>
      </div>
    </div>

    <div class="page-container">
      <div class="contact-content">
        <div class="contact-info">
          <div class="info-card addresses-card">
            <div class="info-icon">📍</div>
            <h3>Адреса</h3>
            <div class="addresses-list">
              <div
                v-for="city in cities"
                :key="city.name"
                class="city-block"
              >
                <strong>{{ city.name }}:</strong>
                <p>
                  <template v-for="(address, index) in city.addresses" :key="address">
                    {{ address }}<br v-if="index < city.addresses.length - 1">
                  </template>
                </p>
              </div>
            </div>
          </div>

          <div
            v-for="card in infoCards"
            :key="card.title"
            :class="['info-card', card.className]"
          >
            <div class="info-icon">{{ card.icon }}</div>
            <h3>{{ card.title }}</h3>
            <p>
              <template v-for="(line, index) in card.lines" :key="line">
                {{ line }}<br v-if="index < card.lines.length - 1">
              </template>
            </p>
          </div>
        </div>

        <div class="contact-side">
          <div class="contact-form-section">
            <h2>Написать нам</h2>
            <form @submit.prevent="submitContactForm" class="contact-form">
              <div v-for="field in formFields" :key="field.key" class="form-group">
                <input
                  v-model="contactForm[field.key]"
                  :type="field.type"
                  :placeholder="field.placeholder"
                  :aria-label="field.placeholder"
                  :required="field.required"
                  class="form-input"
                >
              </div>
              <div class="form-group">
                <textarea
                  v-model="contactForm.message"
                  placeholder="Текст сообщения"
                  aria-label="Текст сообщения"
                  rows="5"
                  required
                  class="form-textarea"
                ></textarea>
              </div>
              <button type="submit" class="submit-btn">Отправить</button>
            </form>
          </div>
        </div>
      </div>

      <div class="map-section map-section--full">
        <h2>Как нас найти</h2>
        <div class="map-container">
          <div ref="mapElement" class="map-canvas" aria-label="Карта кофейни Milty Coffee"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'

const mapElement = ref(null)
let mapInstance = null

const contactForm = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const cities = [
  {
    name: 'Москва',
    addresses: ['ул. Кофейная, 15', 'Арбат, 5', 'ул. Ленина, 20', 'пр. Мира, 10']
  },
  {
    name: 'Владимир',
    addresses: ['ул. Большая Московская, 1', 'ул. Мира, 30', 'пр. Ленина, 5']
  }
]

const infoCards = [
  {
    className: 'hours-card',
    icon: '🕒',
    title: 'Часы работы',
    lines: ['Пн–пт: 08:00–22:00', 'Сб–вс: 09:00–23:00']
  },
  {
    className: 'phone-card',
    icon: '📞',
    title: 'Телефон',
    lines: ['+7 (999) 123-45-67']
  },
  {
    className: 'email-card',
    icon: '📧',
    title: 'Email',
    lines: ['info@milty.ru']
  }
]

const formFields = [
  { key: 'name', type: 'text', placeholder: 'Ваше имя', required: true },
  { key: 'email', type: 'email', placeholder: 'Ваш email', required: true },
  { key: 'phone', type: 'tel', placeholder: 'Ваш телефон', required: false }
]

const branches = [
  { name: 'Москва, ул. Кофейная, 15', coords: [55.7558, 37.6176] },
  { name: 'Москва, Арбат, 5', coords: [55.7522, 37.5927] },
  { name: 'Москва, ул. Ленина, 20', coords: [55.761, 37.6183] },
  { name: 'Москва, пр. Мира, 10', coords: [55.7813, 37.6339] },
  { name: 'Владимир, ул. Большая Московская, 1', coords: [56.1293, 40.4066] },
  { name: 'Владимир, ул. Мира, 30', coords: [56.1365, 40.3987] },
  { name: 'Владимир, пр. Ленина, 5', coords: [56.1281, 40.3836] }
]

function loadYandexMaps() {
  if (window.ymaps) return Promise.resolve()

  return new Promise((resolve, reject) => {
    const existingScript = document.getElementById('yandex-maps-js')
    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(), { once: true })
      existingScript.addEventListener('error', () => reject(new Error('Yandex Maps failed to load')), { once: true })
      if (window.ymaps) resolve()
      return
    }

    const script = document.createElement('script')
    script.id = 'yandex-maps-js'
    const apiKey = import.meta.env.VITE_YANDEX_MAPS_API_KEY
    const base = 'https://api-maps.yandex.ru/2.1/'
    script.src = apiKey ? `${base}?apikey=${encodeURIComponent(apiKey)}&lang=ru_RU` : `${base}?lang=ru_RU`
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Yandex Maps failed to load'))
    document.body.appendChild(script)
  })
}

async function initMap() {
  if (!mapElement.value || mapInstance) return

  await loadYandexMaps()
  if (!window.ymaps) return

  await new Promise((resolve) => window.ymaps.ready(resolve))

  mapInstance = new window.ymaps.Map(
    mapElement.value,
    {
      center: branches[0]?.coords ?? [55.7558, 37.6176],
      zoom: 10,
      controls: ['zoomControl']
    },
    {
      suppressMapOpenBlock: true
    }
  )

  const placemarks = new window.ymaps.GeoObjectCollection(null, {
    preset: 'islands#brownDotIcon'
  })

  branches.forEach((branch) => {
    const placemark = new window.ymaps.Placemark(
      branch.coords,
      {
        balloonContentHeader: '<strong>Milty Coffee</strong>',
        balloonContentBody: branch.name
      },
      {
        openBalloonOnClick: true
      }
    )
    placemarks.add(placemark)
  })

  mapInstance.geoObjects.add(placemarks)

  const bounds = placemarks.getBounds?.()
  if (bounds) {
    mapInstance.setBounds(bounds, { checkZoomRange: true, zoomMargin: 35 })
  }
}

function submitContactForm() {
  // В реальном приложении здесь был бы запрос к API
  alert('Спасибо! Мы ответим вам в ближайшее время.')
  
  // Сброс формы
  contactForm.name = ''
  contactForm.email = ''
  contactForm.phone = ''
  contactForm.message = ''
}

onMounted(() => {
  initMap().catch(() => {
    // Fallback intentionally silent: page stays usable without map script.
  })
})

onBeforeUnmount(() => {
  if (mapInstance) {
    mapInstance.destroy()
    mapInstance = null
  }
})
</script>

<style scoped>
.page-hero--contact {
  background-image: url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1600');
}

.contact-content {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.25fr);
  gap: 1.25rem;
  margin-bottom: 1.25rem;
  align-items: start;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  align-content: start;
}

.contact-side {
  display: grid;
  gap: 1rem;
}

.phone-card,
.email-card {
  min-height: 185px;
}

.addresses-card {
  grid-column: 1 / -1;
  text-align: left;
  padding: 1.15rem 1.25rem;
}

.addresses-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.9rem;
}

.addresses-card h3,
.addresses-card .info-icon {
  text-align: center;
}

.city-block strong {
  display: block;
  color: #5d4037;
  margin-bottom: 0.2rem;
}

.city-block p {
  margin: 0;
  line-height: 1.5;
  font-size: 0.92rem;
}

.info-card {
  background: white;
  padding: 1.35rem 1.1rem;
  border-radius: 16px;
  box-shadow: var(--shadow-md);
  text-align: center;
  transition: transform var(--transition-med), box-shadow var(--transition-med), border-color var(--transition-med);
  border: var(--border-soft);
}

.info-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: #c9a66b;
}

.info-icon {
  font-size: 2.1rem;
  margin-bottom: 0.7rem;
}

.info-card h3 {
  color: #8b4513;
  margin-bottom: 0.5rem;
  font-weight: 700;
  font-size: 1.02rem;
}

.info-card p {
  color: #666;
  line-height: 1.45;
  font-size: 0.95rem;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.contact-form-section {
  background: white;
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow: var(--shadow-md);
  border: var(--border-soft);
}

.contact-form-section h2 {
  color: #8b4513;
  margin-bottom: 1.25rem;
  padding-bottom: 0.5rem;
  border-bottom: none;
  font-weight: 700;
  font-size: 1.8rem;
  letter-spacing: -0.3px;
  position: relative;
}

.contact-form-section h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #c9a66b, #d4af37);
  border-radius: 2px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-input,
.form-textarea {
  padding: 0.85rem;
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
  padding: 0.9rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.2rem;
  box-shadow: 0 4px 15px rgba(201, 166, 107, 0.4);
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(201, 166, 107, 0.6);
  background: linear-gradient(135deg, #d4af37 0%, #e6c86e 100%);
}

.map-section {
  background: white;
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow: var(--shadow-md);
  border: var(--border-soft);
}

.map-section--full {
  margin-bottom: 2rem;
}

.map-section h2 {
  color: #8b4513;
  margin-bottom: 1.1rem;
  padding-bottom: 0.5rem;
  border-bottom: none;
  font-weight: 700;
  font-size: 1.8rem;
  letter-spacing: -0.3px;
  position: relative;
}

.map-section h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #c9a66b, #d4af37);
  border-radius: 2px;
}

.map-container {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border: 1px solid #f0f0f0;
}

.map-canvas {
  width: 100%;
  height: 340px;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
  
  .contact-info {
    grid-template-columns: 1fr;
  }

  .addresses-list {
    grid-template-columns: 1fr;
    gap: 0.6rem;
  }

  .contact-form-section {
    padding: 1.25rem 1rem;
  }
  
  .map-section {
    padding: 1.1rem 0.9rem;
  }

  .map-section--full {
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 1024px) {
  .contact-content {
    grid-template-columns: 1fr;
  }

  .contact-info {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .contact-info .email-card {
    grid-column: 1 / -1;
  }
}
</style>
