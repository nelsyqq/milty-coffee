<template>
  <div class="menu-page page-shell">
    <div class="page-hero page-hero--menu">
      <div class="page-hero-overlay">
        <div class="page-container">
          <div class="page-hero-content">
            <h1>Меню и цены</h1>
            <p>Напитки и десерты — всё, что любят наши гости</p>
          </div>
        </div>
      </div>
    </div>

    <div class="page-container">
      <div class="menu-content">
        <section
          v-for="section in menuSections"
          :key="section.title"
          class="menu-section"
        >
          <h2 class="section-title">{{ section.title }}</h2>
          <div class="menu-items">
            <div v-for="item in section.items" :key="item.name" class="menu-item">
              <div class="item-image">
                <img :src="item.image" :alt="item.name" />
              </div>
              <div class="item-header">
                <h3>{{ item.name }}</h3>
                <span class="price">{{ item.price }}</span>
              </div>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
const menuSections = [
  {
    title: '☕ Кофе',
    items: [
      {
        name: 'Эспрессо',
        price: '120 ₽',
        description: '30 мл — крепкий и ароматный',
        image: '/expresso.jpg'
      },
      {
        name: 'Американо',
        price: '130 ₽ · 200 мл',
        description: 'Классический чёрный кофе',
        image: '/americano.jpg'
      },
      {
        name: 'Капучино',
        price: '160 ₽ · 200 мл',
        description: 'Эспрессо, молоко и нежная молочная пенка',
        image: '/capu4ino.jpg'
      },
      {
        name: 'Латте',
        price: '170 ₽ · 300 мл',
        description: 'Мягкий вкус: больше молока, деликатная горчинка',
        image: '/latte.jpg'
      },
      {
        name: 'Флэт-уайт',
        price: '190 ₽ · 200 мл',
        description: 'Идеальный баланс кофе и молока',
        image: '/flet.jpg'
      },
      {
        name: 'Раф',
        price: '200 ₽ · 300 мл',
        description: 'Эспрессо, сливки и сироп — нежная классика',
        image: '/expresso.jpg'
      }
    ]
  },
  {
    title: '🍰 Десерты',
    items: [
      {
        name: 'Тирамису',
        price: '250 ₽',
        description: 'Классический итальянский десерт',
        image: '/tiramisu.jpg'
      },
      {
        name: 'Чизкейк Нью-Йорк',
        price: '220 ₽',
        description: 'Нежный творожный десерт',
        image: '/4izcake.jpg'
      },
      {
        name: 'Медовик',
        price: '180 ₽',
        description: 'Традиционный русский торт',
        image: '/mdovik.jpg'
      },
      {
        name: 'Макарон',
        price: '90 ₽ / шт',
        description: 'Французское миндальное печенье с начинкой',
        image: '/makaron.jpg'
      }
    ]
  },
  {
    title: '➕ Дополнительно',
    items: [
      {
        name: 'Сиропы',
        price: '+30 ₽',
        description: 'Ваниль, карамель, кокос, лесной орех',
        image: '/siropi.jpg'
      },
      {
        name: 'Альтернативное молоко',
        price: '+20 ₽',
        description: 'Кокосовое, миндальное, соевое',
        image: '/altmoloko.jpg'
      }
    ]
  }
]
</script>

<style scoped>
.page-hero--menu {
  background-image: url('/fonmenu.jpg');
}
 
.menu-section {
  margin-bottom: 4rem;
}
 
.section-title {
  font-size: 2rem;
  color: #5D4037;
  border-left: none;
  padding-left: 0;
  margin-bottom: 2rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  position: relative;
  padding-bottom: 0.6rem;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 72px;
  height: 3px;
  background: linear-gradient(90deg, #c9a66b, #d4af37);
  border-radius: 2px;
}
 
.menu-items {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
}
 
.menu-item {
  background: white;
  padding: 0;
  border-radius: 15px;
  box-shadow: var(--shadow-sm);
  border: var(--border-soft);
  transition: transform var(--transition-med), box-shadow var(--transition-med), border-color var(--transition-med);
  overflow: hidden;
}
 
.menu-item:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: #c9a66b;
}

.item-image {
  height: 285px;
  overflow: hidden;
  position: relative;
  border-bottom: 3px solid #c9a66b;
}

.item-image::after {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(109, 76, 65, 0.15);
  pointer-events: none;
  transition: background 0.4s ease;
}

.item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.6s ease;
}

.menu-item:hover .item-image::after {
  background: rgba(109, 76, 65, 0);
}

.menu-item:hover .item-image img {
  transform: scale(1.06);
}
 
.menu-item .item-header {
  padding: 1.5rem 1.5rem 0.5rem;
}
 
.menu-item p {
  padding: 0 1.5rem 1.5rem;
  color: #6D4C41;
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
  min-height: 3.2rem;
}
 
.item-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  gap: 0.75rem;
}
 
.item-header h3 {
  margin: 0;
  color: #5D4037;
  font-size: 1.4rem;
  font-weight: 700;
}
 
.price {
  font-weight: 700;
  color: #8B4513;
  font-size: 1.05rem;
  white-space: nowrap;
  background: linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%);
  padding: 0.4rem 1rem;
  border-radius: 25px;
  box-shadow: 0 2px 10px rgba(139, 69, 19, 0.16);
}

@media (min-width: 900px) {
  .menu-items {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .item-image {
    height: 235px;
  }
}
</style>