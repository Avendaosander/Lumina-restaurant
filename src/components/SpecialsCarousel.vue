<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

const dishes = [
  {
    title: 'Pasta con Trufa',
    price: '$32',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9',
  },
  {
    title: 'Filete Premium',
    price: '$48',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947',
  },
  {
    title: 'Salmón Deluxe',
    price: '$36',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288',
  },
  {
    title: 'Pastel de Chocolate Fundido',
    price: '$18',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307',
  },
  {
    title: 'Hamburguesa Gourmet',
    price: '$28',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349',
  },
  {
    title: 'Ensalada César Premium',
    price: '$22',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1',
  },
]
</script>

<template>
  <section
    id="menu"
    class="specials-section relative w-full overflow-x-clip bg-[#111111] py-32 max-md:py-20"
  >
    <div class="container min-w-0 max-w-full">

      <div class="mb-16 text-center max-md:mb-10">
        <p class="mb-3 text-sm uppercase tracking-[0.25em] text-yellow-400 sm:tracking-[0.4em]">
          Platos del chef
        </p>
        <h2 class="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Obras culinarias exclusivas
        </h2>
      </div>

      <div class="specials-carousel relative min-w-0 w-full max-w-full">

        <Swiper
          class="specials-swiper w-full max-w-full"
          :modules="[Autoplay, Navigation]"
          :slides-per-view="1"
          :space-between="16"
          :loop="true"
          :loop-additional-slides="2"
          :grab-cursor="true"
          :observer="true"
          :observe-parents="true"
          :resize-observer="true"
          :autoplay="{ delay: 2500, disableOnInteraction: false }"
          :navigation="{
            nextEl: '.specials-next',
            prevEl: '.specials-prev',
          }"
          :breakpoints="{
            640: { spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1200: { slidesPerView: 3, spaceBetween: 30 },
          }"
        >
          <SwiperSlide
            v-for="dish in dishes"
            :key="dish.title"
            class="specials-slide !h-auto"
          >
            <article
              class="specials-card group overflow-hidden rounded-3xl border border-white/5 bg-[#1a1a1a] shadow-lg transition hover:border-yellow-400/30 md:rounded-[2.5rem] md:shadow-2xl"
            >
              <div class="overflow-hidden">
                <img
                  :src="dish.image"
                  :alt="dish.title"
                  class="h-[260px] w-full max-w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[320px] md:h-[400px]"
                />
              </div>

              <div class="p-4 sm:p-6">
                <div class="mb-3 flex items-start justify-between gap-3">
                  <h3 class="min-w-0 flex-1 break-words text-lg font-semibold text-white sm:text-2xl">
                    {{ dish.title }}
                  </h3>
                  <span class="shrink-0 font-bold text-yellow-400">
                    {{ dish.price }}
                  </span>
                </div>

                <p class="text-sm text-gray-400 sm:text-base">
                  Elaborado con ingredientes de primera calidad.
                </p>

                <button
                  type="button"
                  class="mt-6 w-full rounded-full bg-yellow-400 py-3 font-semibold text-black transition hover:bg-yellow-300"
                >
                  Pedir Ahora
                </button>
              </div>
            </article>
          </SwiperSlide>
        </Swiper>

        <div
          class="pointer-events-none absolute inset-y-0 left-0 right-0 z-20 hidden items-center justify-between px-1 md:flex md:px-2"
          aria-hidden="true"
        >
          <button
            type="button"
            class="specials-prev pointer-events-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black/70 text-xl text-white shadow-lg transition hover:bg-yellow-400 hover:text-black"
          >
            ‹
          </button>
          <button
            type="button"
            class="specials-next pointer-events-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black/70 text-xl text-white shadow-lg transition hover:bg-yellow-400 hover:text-black"
          >
            ›
          </button>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
.specials-section,
.specials-carousel,
.specials-swiper {
  max-width: 100%;
}

.specials-swiper :deep(.swiper),
.specials-swiper {
  width: 100% !important;
  max-width: 100% !important;
  overflow: hidden !important;
}

.specials-swiper :deep(.swiper-wrapper) {
  box-sizing: border-box;
}

.specials-swiper :deep(.swiper-slide) {
  box-sizing: border-box;
  height: auto;
  overflow: hidden;
}

.specials-card {
  max-width: 100%;
}
</style>
