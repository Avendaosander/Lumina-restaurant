<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled || isOpen
      ? 'bg-black/95 shadow-lg backdrop-blur-md'
      : 'bg-transparent'"
  >
    <div class="container px-3 sm:px-4">
      <div class="flex min-h-[3.25rem] items-center justify-between gap-3 sm:min-h-14">

        <a
          href="#home"
          class="navbar-brand shrink-0 text-xl font-bold tracking-wide text-yellow-400 transition duration-300 hover:scale-105 hover:text-yellow-500 sm:text-2xl lg:text-3xl"
          @click="closeMenu"
        >
          LÚMINA
        </a>

        <button
          type="button"
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white transition hover:bg-white/10 md:hidden"
          :aria-expanded="isOpen"
          aria-controls="navbar-menu"
          aria-label="Abrir menú de navegación"
          @click="toggleMenu"
        >
          <span class="sr-only">{{ isOpen ? 'Cerrar menú' : 'Abrir menú' }}</span>
          <svg
            v-if="!isOpen"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <svg
            v-else
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <path stroke-linecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <ul class="hidden items-center gap-6 md:flex lg:gap-8">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              class="nav-link whitespace-nowrap text-sm text-white transition duration-300 hover:text-yellow-400 lg:text-base"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>

      </div>

      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-show="isOpen"
          id="navbar-menu"
          class="border-t border-white/10 pb-4 pt-2 md:hidden"
        >
          <ul class="flex flex-col">
            <li v-for="link in navLinks" :key="link.href">
              <a
                :href="link.href"
                class="nav-link block px-1 py-3.5 text-center text-base text-white transition duration-300 hover:bg-white/5 hover:text-yellow-400"
                @click="closeMenu"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'

const navLinks = [
  { href: '#home', label: 'Inicio' },
  { href: '#menu', label: 'Menú' },
  { href: '#gallery', label: 'Galería' },
  { href: '#reservations', label: 'Reservas' },
]

const isOpen = ref(false)
const scrolled = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

const handleResize = () => {
  if (window.innerWidth >= 768) {
    closeMenu()
  }
}

watch(isOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleResize)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
  document.body.style.overflow = ''
})
</script>
