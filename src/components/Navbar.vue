<template>
  <nav
    class="navbar navbar-expand-lg fixed-top px-4 py-3 transition-all duration-300"
    :class="scrolled
      ? 'bg-black/90 backdrop-blur-md shadow-lg'
      : 'bg-transparent'"
  >
    <div class="container">

      <!-- LOGO -->
      <a
        href="#"
        class="navbar-brand text-yellow-400 text-3xl fw-bold"
      >
        LÚMINA
      </a>

      <!-- BUTTON MOBILE -->
      <button
        class="navbar-toggler border-0"
        type="button"
        @click="toggleMenu"
      >
        <span class="text-white fs-2">
          ☰
        </span>
      </button>

      <!-- MENU -->
      <div
        class="navbar-collapse"
        :class="[
          isOpen ? 'd-block' : 'd-none',
          'd-lg-flex justify-content-end'
        ]"
      >

        <ul
          class="navbar-nav gap-lg-4 text-center mt-4 mt-lg-0"
        >

          <li class="nav-item">
            <a
              href="#home"
              class="nav-link text-white hover:text-yellow-400 transition duration-300"
            >
              Inicio
            </a>
          </li>

          <li class="nav-item">
            <a
              href="#menu"
              class="nav-link text-white hover:text-yellow-400 transition duration-300"
            >
              Menú
            </a>
          </li>

          <li class="nav-item">
            <a
              href="#gallery"
              class="nav-link text-white hover:text-yellow-400 transition duration-300"
            >
              Galería
            </a>
          </li>

          <li class="nav-item">
            <a
              href="#reservations"
              class="nav-link text-white hover:text-yellow-400 transition duration-300"
            >
              Reservas
            </a>
          </li>

        </ul>

      </div>

    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const scrolled = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>