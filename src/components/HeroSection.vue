<template>
  <section
    class="relative min-h-[100dvh] h-[100dvh] overflow-hidden"
    id="home"
  >

    <div class="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
        alt="Restaurant Background"
        class="h-full w-full scale-110 object-cover"
      />

      <div class="absolute inset-0 bg-black/70"></div>

      <div
        class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"
      ></div>
    </div>

    <div
      class="relative z-10 flex h-full max-md:flex-col max-md:justify-end max-md:pt-28 max-md:pb-28 md:items-center"
    >
      <div class="container w-full">
        <div class="max-w-3xl">

          <p
            class="mb-4 text-sm uppercase tracking-[0.4em] text-yellow-400 max-md:mb-3 max-md:text-xs max-md:tracking-[0.25em] md:text-base"
          >
            Mas alla del gusto
          </p>

          <h1
            class="mb-6 text-4xl font-bold leading-[1.1] text-white max-md:mb-4 sm:text-5xl md:mb-6 md:text-7xl md:leading-tight lg:text-8xl"
          >
            Un viaje culinario inolvidable
          </h1>

          <p
            class="mb-8 max-w-2xl text-base leading-relaxed text-gray-300 max-md:mb-6 md:text-xl"
          >
            Descubra una lujosa experiencia gastronómica donde cada plato está elaborado con pasión, elegancia y un sabor inolvidable.
          </p>

          <div class="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a href="#reservations" class="max-md:block max-md:w-full">
              <button
                class="w-full rounded-full bg-yellow-400 px-5 py-3 font-semibold text-black shadow-2xl transition duration-300 hover:scale-105 hover:bg-yellow-300 max-md:py-3.5 sm:w-auto"
              >
                Reserva tu mesa
              </button>
            </a>

            <a href="#menu" class="max-md:block max-md:w-full">
              <button
                class="w-full rounded-full border border-white px-5 py-3 text-white transition duration-300 hover:bg-white hover:!text-black max-md:py-3.5 sm:w-auto"
              >
                Ver el menú
              </button>
            </a>
          </div>

        </div>
      </div>
    </div>

    <div
      class="pointer-events-none absolute bottom-10 left-1/2 z-10 -translate-x-1/2 max-md:bottom-5 md:bottom-10"
    >
      <div
        class="flex h-12 w-7 justify-center rounded-full border-2 border-white max-md:h-9 max-md:w-5"
      >
        <div
          class="mt-2 h-3 w-1 animate-bounce rounded-full bg-white max-md:mt-1.5 max-md:h-2"
        ></div>
      </div>
    </div>

  </section>
</template>
