<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <router-link to="/" class="logo-link">
          <img src="/logo.png" alt="Milty Coffee Logo" class="logo-image" />
        </router-link>
      </div>
      <nav class="nav">
        <router-link
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="nav-link"
          active-class="active"
        >
          <span class="nav-text">{{ link.label }}</span>
          <span class="nav-indicator"></span>
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
const navLinks = [
  { to: '/', label: 'Главная' },
  { to: '/menu', label: 'Меню' },
  { to: '/about', label: 'О нас' },
  { to: '/reviews', label: 'Отзывы' },
  { to: '/contact', label: 'Контакты' }
]
</script>

<style scoped>
.header {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
  padding: 0.6rem 0;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(201, 166, 107, 0.1);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.logo-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
}

.logo-link:hover {
  transform: scale(1.05);
}

.logo-image {
  width: 130px;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.4));
}

.nav {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  padding: 0.5rem 1.2rem;
  border-radius: 25px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 500;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(201, 166, 107, 0.2), transparent);
  transition: left 0.5s ease;
}

.nav-link:hover::before {
  left: 100%;
}

.nav-text {
  position: relative;
  z-index: 1;
}

.nav-indicator {
  position: absolute;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #c9a66b, #d4af37);
  border-radius: 2px;
  transition: width 0.3s ease;
}

.nav-link:hover {
  background: rgba(201, 166, 107, 0.15);
  border-color: rgba(201, 166, 107, 0.3);
  color: #d4af37;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(201, 166, 107, 0.2);
}

.nav-link:hover .nav-indicator {
  width: 70%;
}

.nav-link.active {
  background: linear-gradient(135deg, rgba(201, 166, 107, 0.2), rgba(212, 175, 55, 0.15));
  border-color: rgba(201, 166, 107, 0.4);
  color: #c9a66b;
  font-weight: 600;
  box-shadow: 0 2px 10px rgba(201, 166, 107, 0.15);
}

.nav-link.active .nav-indicator {
  width: 70%;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    gap: 1rem;
    padding: 0 1rem;
  }

  .logo-image {
    width: 110px;
  }

  .nav {
    justify-content: center;
    gap: 0.4rem;
  }

  .nav-link {
    padding: 0.4rem 1rem;
    font-size: 0.85rem;
  }
}
</style>
