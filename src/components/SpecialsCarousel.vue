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
  <section class="py-32 bg-[#111111] relative" id="menu">

    <div class="container">

      <!-- TITULO -->
      <div class="text-center mb-16">
        <p class="uppercase tracking-[0.4em] text-yellow-400 mb-3">
          Platos del chef
        </p>
        <h2 class="text-5xl font-bold text-white">
          Obras culinarias exclusivas
        </h2>
      </div>

      <!-- WRAPPER RELATIVO -->
      <div class="relative overflow-hidden px-8">

        <!-- SWIPER -->
        <Swiper
          :modules="[Autoplay, Navigation]"
          :slides-per-view="1"
          :space-between="30"
          :loop="true"
          :grab-cursor="true"
          :autoplay="{ delay: 2500, disableOnInteraction: false }"
          :navigation="{
            nextEl: '.next-btn',
            prevEl: '.prev-btn'
          }"
          :breakpoints="{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 }
          }"
        >

          <SwiperSlide v-for="dish in dishes" :key="dish.title">

            <!-- CARD -->
            <div class="group bg-[#1a1a1a] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5 hover:border-yellow-400/30 transition">

              <img
                :src="dish.image"
                class="w-full h-[400px] object-cover group-hover:scale-110 transition duration-700"
              />

              <div class="p-6">
                <div class="flex justify-between items-center mb-3">
                  <h3 class="text-2xl text-white font-semibold">
                    {{ dish.title }}
                  </h3>
                  <span class="text-yellow-400 font-bold">
                    {{ dish.price }}
                  </span>
                </div>

                <p class="text-gray-400">
                  Elaborado con ingredientes de primera calidad.
                </p>

                <button class="mt-6 w-full py-3 bg-yellow-400 hover:bg-yellow-300 text-black rounded-full font-semibold transition">
                  Pedir Ahora
                </button>
              </div>

            </div>

          </SwiperSlide>

        </Swiper>

        <!-- FLECHA IZQUIERDA -->
        <button
          class="prev-btn absolute left-4 top-1/2 -translate-y-1/2
                 w-12 h-12 bg-black/60 hover:bg-yellow-400 text-white hover:text-black
                 rounded-full flex items-center justify-center transition shadow-xl z-20"
        >
          ‹
        </button>

        <!-- FLECHA DERECHA -->
        <button
          class="next-btn absolute right-4 top-1/2 -translate-y-1/2
                 w-12 h-12 bg-black/60 hover:bg-yellow-400 text-white hover:text-black
                 rounded-full flex items-center justify-center transition shadow-xl z-20"
        >
          ›
        </button>

      </div>

    </div>

  </section>
</template>