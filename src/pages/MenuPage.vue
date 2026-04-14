<template>
  <div class="menu-page">
    <div class="container">
      <div class="menu-header">
        <h1>МЕНЮ И ЦЕНЫ</h1>
        <p>Актуальные цены на наши продукты</p>
      </div>
 
      <div class="menu-content">
        <!-- Кофе -->
        <section class="menu-section">
          <h2 class="section-title">☕ КОФЕ</h2>
          <div class="menu-items">
            <div class="menu-item">
              <div class="item-image">
                <img src="/menu-images/espresso.jpg" alt="Эспрессо" />
              </div>
              <div class="item-header">
                <h3>Эспрессо</h3>
                <span class="price">120 ₽</span>
              </div>
              <p>30 мл, крепкий и ароматный</p>
            </div>
            <div class="menu-item">
              <div class="item-image">
                <img src="/menu-images/americano.jpg" alt="Американо" />
              </div>
              <div class="item-header">
                <h3>Американо</h3>
                <span class="price">130 / 200 мл</span>
              </div>
              <p>Классический черный кофе</p>
            </div>
            <div class="menu-item">
              <div class="item-image">
                <img src="/menu-images/cappuccino.jpg" alt="Капучино" />
              </div>
              <div class="item-header">
                <h3>Капучино</h3>
                <span class="price">160 / 200 мл</span>
              </div>
              <p>С молочной пенкой и корицей</p>
            </div>
            <div class="menu-item">
              <div class="item-image">
                <img src="/menu-images/latte.jpg" alt="Латте" />
              </div>
              <div class="item-header">
                <h3>Латте</h3>
                <span class="price">170 / 300 мл</span>
              </div>
              <p>Нежный кофе с большим количеством молока</p>
            </div>
            <div class="menu-item">
              <div class="item-image">
                <img src="/menu-images/flat-white.jpg" alt="Флет-Уайт" />
              </div>
              <div class="item-header">
                <h3>Флет-Уайт</h3>
                <span class="price">190 / 200 мл</span>
              </div>
              <p>Идеальный баланс кофе и молока</p>
            </div>
            <div class="menu-item">
              <div class="item-image">
                <img src="/menu-images/raf.jpg" alt="Раф" />
              </div>
              <div class="item-header">
                <h3>Раф</h3>
                <span class="price">200 / 300 мл</span>
              </div>
              <p>Кофе со сливками и ванилью</p>
            </div>
          </div>
        </section>
 
        <!-- Десерты -->
        <section class="menu-section">
          <h2 class="section-title">🍰 ДЕСЕРТЫ</h2>
          <div class="menu-items">
            <div class="menu-item">
              <div class="item-image">
                <img src="/menu-images/tiramisu.jpg" alt="Тирамису" />
              </div>
              <div class="item-header">
                <h3>Тирамису</h3>
                <span class="price">250 ₽</span>
              </div>
              <p>Классический итальянский десерт</p>
            </div>
            <div class="menu-item">
              <div class="item-image">
                <img src="/menu-images/cheesecake.jpg" alt="Чизкейк Нью-Йорк" />
              </div>
              <div class="item-header">
                <h3>Чизкейк Нью-Йорк</h3>
                <span class="price">220 ₽</span>
              </div>
              <p>Нежный творожный десерт</p>
            </div>
            <div class="menu-item">
              <div class="item-image">
                <img src="/menu-images/medovik.jpg" alt="Медовик" />
              </div>
              <div class="item-header">
                <h3>Медовик</h3>
                <span class="price">180 ₽</span>
              </div>
              <p>Традиционный русский торт</p>
            </div>
            <div class="menu-item">
              <div class="item-image">
                <img src="/menu-images/macaron.jpg" alt="Макарон" />
              </div>
              <div class="item-header">
                <h3>Макарон</h3>
                <span class="price">90 ₽ / шт</span>
              </div>
              <p>Французское печенье с начинкой</p>
            </div>
          </div>
        </section>
 
        <!-- Дополнительно -->
        <section class="menu-section">
          <h2 class="section-title">➕ ДОПОЛНИТЕЛЬНО</h2>
          <div class="menu-items">
            <div class="menu-item">
              <div class="item-image">
                <img src="/menu-images/syrups.jpg" alt="Сиропы" />
              </div>
              <div class="item-header">
                <h3>Сиропы</h3>
                <span class="price">+30 ₽</span>
              </div>
              <p>Ваниль, карамель, кокос, лесной орех</p>
            </div>
            <div class="menu-item">
              <div class="item-image">
                <img src="/menu-images/alternative-milk.jpg" alt="Альтернативное молоко" />
              </div>
              <div class="item-header">
                <h3>Альтернативное молоко</h3>
                <span class="price">+20 ₽</span>
              </div>
              <p>Кокосовое, миндальное, соевое</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
 
<style scoped>
.menu-page {
  padding: 2.5rem 0;
  background: #ffffff;
  min-height: 100vh;
}
 
.menu-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 3.2rem 2rem;
  background-image: url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600');
  background-size: cover;
  background-position: center;
  color: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
}

.menu-header::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.82) 0%, rgba(45, 45, 45, 0.75) 100%);
}

.menu-header::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #c9a66b, #d4af37);
}
 
.menu-header h1 {
  font-size: 2.8rem;
  margin-bottom: 0.5rem;
  letter-spacing: 2px;
  position: relative;
  z-index: 1;
}
 
.menu-header p {
  font-size: 1.2rem;
  opacity: 0.9;
  font-weight: 300;
  position: relative;
  z-index: 1;
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
  letter-spacing: 1px;
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
}
 
.menu-item {
  background: white;
  padding: 0;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  border: 1px solid #E0E0E0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  animation: fadeInUp 0.6s ease;
}

.menu-item:nth-child(1) { animation-delay: 0.1s; }
.menu-item:nth-child(2) { animation-delay: 0.2s; }
.menu-item:nth-child(3) { animation-delay: 0.3s; }
.menu-item:nth-child(4) { animation-delay: 0.4s; }
.menu-item:nth-child(5) { animation-delay: 0.5s; }
.menu-item:nth-child(6) { animation-delay: 0.6s; }
 
.menu-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.15);
  border-color: #c9a66b;
}

.item-image {
  height: 200px;
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
  transition: transform 0.6s ease;
}

.menu-item:hover .item-image::after {
  background: rgba(109, 76, 65, 0);
}

.menu-item:hover .item-image img {
  transform: scale(1.1);
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
}
 
.item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}
 
.item-header h3 {
  margin: 0;
  color: #5D4037;
  font-size: 1.4rem;
  font-weight: 700;
}
 
.price {
  font-weight: bold;
  color: #8B4513;
  font-size: 1.3rem;
  background: linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%);
  padding: 0.4rem 1rem;
  border-radius: 25px;
  box-shadow: 0 2px 8px rgba(139, 69, 19, 0.2);
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
 
@media (min-width: 768px) {
  .menu-items {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .menu-items {
    grid-template-columns: 1fr;
  }
  
  .item-image {
    height: 180px;
  }
  
  .menu-header h1 {
    font-size: 2rem;
  }
  
  .menu-header p {
    font-size: 1rem;
  }
}
</style>