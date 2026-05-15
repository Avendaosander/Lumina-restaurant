<template>
  <nav
    class="navbar navbar-expand-lg fixed-top px-4 py-3 transition-all duration-300"
    :class="scrolled
      ? 'bg-black/90 backdrop-blur-md shadow-2xl'
      : 'bg-transparent'"
  >
    <div class="container">

      <!-- LOGO -->
      <a
        class="navbar-brand text-3xl font-bold tracking-[0.3em] text-yellow-400"
        href="#"
      >
        LÚMINA
      </a>

      <!-- TOGGLER -->
      <button
        class="navbar-toggler border-0 shadow-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
      >
        <span class="text-white text-3xl">
          ☰
        </span>
      </button>

      <!-- LINKS -->
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarContent"
      >
        <ul class="navbar-nav gap-lg-4 text-center mt-4 mt-lg-0">

          <li class="nav-item">
            <a
              class="nav-link text-white hover:text-yellow-400 transition duration-300 text-lg"
              href="#"
            >
              Inicio
            </a>
          </li>

          <li class="nav-item">
            <a
              class="nav-link text-white hover:text-yellow-400 transition duration-300 text-lg"
              href="#"
            >
              Menú
            </a>
          </li>

          <li class="nav-item">
            <a
              class="nav-link text-white hover:text-yellow-400 transition duration-300 text-lg"
              href="#"
            >
              Galería
            </a>
          </li>

          <li class="nav-item">
            <a
              class="nav-link text-white hover:text-yellow-400 transition duration-300 text-lg"
              href="#"
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

const scrolled = ref(false)

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