<template>
  <section
    class="relative h-screen overflow-hidden"
    id="home"
  >

    <!-- BACKGROUND IMAGE -->
    <div
      class="absolute inset-0"
    >
      <img
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
        alt="Restaurant Background"
        class="w-full h-full object-cover scale-110"
      />

      <!-- DARK OVERLAY -->
      <div
        class="absolute inset-0 bg-black/70"
      ></div>

      <!-- GRADIENT OVERLAY -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"
      ></div>
    </div>

    <!-- CONTENT -->
    <div
      class="relative z-10 h-full flex items-center"
    >
      <div class="container">

        <div class="max-w-3xl">

          <!-- SUBTITLE -->
          <p
            class="uppercase tracking-[0.4em] text-yellow-400 mb-4 text-sm md:text-base"
          >
            Fine Dining Experience
          </p>

          <!-- TITLE -->
          <h1
            class="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white mb-6"
          >
            A Culinary Journey Beyond Taste
          </h1>

          <!-- DESCRIPTION -->
          <p
            class="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl"
          >
            Discover a luxurious gastronomic experience where every dish
            is crafted with passion, elegance and unforgettable flavor.
          </p>

          <!-- BUTTONS -->
          <div
            class="flex flex-col sm:flex-row gap-4"
          >

            <!-- PRIMARY BUTTON -->
            <button
              class="btn px-5 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded-full transition duration-300 shadow-2xl hover:scale-105"
            >
              Reserve a Table
            </button>

            <!-- SECONDARY BUTTON -->
            <button
              class="btn px-5 py-3 border border-white text-white hover:bg-white hover:text-black rounded-full transition duration-300"
            >
              Explore Menu
            </button>

          </div>

        </div>
      </div>
    </div>

    <!-- SCROLL INDICATOR -->
    <div
      class="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
    >
      <div
        class="w-7 h-12 border-2 border-white rounded-full flex justify-center"
      >
        <div
          class="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"
        ></div>
      </div>
    </div>

  </section>
</template>