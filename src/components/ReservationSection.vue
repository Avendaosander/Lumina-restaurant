<template>
  <section
    id="reservations"
    class="w-full overflow-x-clip bg-black py-32 text-white max-md:py-20"
  >
    <div class="container min-w-0 max-w-full px-3 sm:px-4">

      <div
        class="mb-16 text-center max-md:mb-10"
        data-aos="fade-up"
      >
        <p class="mb-3 text-sm uppercase tracking-[0.25em] text-yellow-400 sm:tracking-[0.4em]">
          Reservas
        </p>

        <h2 class="text-3xl font-bold sm:text-4xl md:text-5xl">
          Reserva tu Mesa
        </h2>

        <p class="mx-auto mt-4 max-w-2xl px-1 text-sm leading-relaxed text-gray-400 sm:text-base">
          Reserva tu experiencia culinaria en Lúmina. Recomendamos reservar con anticipación para obtener asientos premium.
        </p>
      </div>

      <div
        class="mx-auto w-full max-w-3xl rounded-3xl border border-white/5 bg-[#111111] p-5 shadow-2xl sm:p-8 md:rounded-[2.5rem] md:p-10"
        data-aos="zoom-in"
      >
        <form class="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 md:gap-6">

          <div class="flex min-w-0 flex-col">
            <label class="mb-2 text-sm text-gray-400" for="name">Nombre Completo</label>
            <input
              type="text"
              id="name"
              name="name"
              autocomplete="name"
              placeholder="John Doe"
              class="w-full min-w-0 rounded-xl border border-gray-700 bg-black px-4 py-3.5 text-base focus:border-yellow-400 focus:outline-none sm:py-3"
            />
          </div>

          <div class="flex min-w-0 flex-col">
            <label class="mb-2 text-sm text-gray-400" for="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              autocomplete="email"
              placeholder="john@email.com"
              class="w-full min-w-0 rounded-xl border border-gray-700 bg-black px-4 py-3.5 text-base focus:border-yellow-400 focus:outline-none sm:py-3"
            />
          </div>

          <div class="flex min-w-0 flex-col">
            <label class="mb-2 text-sm text-gray-400" for="date">Fecha</label>
            <input
              type="date"
              id="date"
              name="date"
              class="w-full min-w-0 max-w-full rounded-xl border border-gray-700 bg-black px-4 py-3.5 text-base text-white focus:border-yellow-400 focus:outline-none sm:py-3 [color-scheme:dark]"
            />
          </div>

          <div class="flex min-w-0 flex-col">
            <label class="mb-2 text-sm text-gray-400" for="time">Hora</label>
            <input
              type="time"
              id="time"
              name="time"
              class="w-full min-w-0 max-w-full rounded-xl border border-gray-700 bg-black px-4 py-3.5 text-base text-white focus:border-yellow-400 focus:outline-none sm:py-3 [color-scheme:dark]"
            />
          </div>

          <div class="flex min-w-0 flex-col md:col-span-2">
            <label class="mb-2 text-sm text-gray-400" for="people">Invitados</label>
            <select
              id="people"
              name="people"
              class="w-full min-w-0 rounded-xl border border-gray-700 bg-black px-4 py-3.5 text-base focus:border-yellow-400 focus:outline-none sm:py-3"
            >
              <option>1 Persona</option>
              <option>2 Personas</option>
              <option>3 Personas</option>
              <option>4 Personas</option>
              <option>5+ Personas</option>
            </select>
          </div>

          <div class="md:col-span-2">
            <button
              type="submit"
              class="w-full rounded-full bg-yellow-400 py-3.5 text-base font-bold text-black shadow-xl transition duration-300 hover:bg-yellow-300 sm:py-4 md:hover:scale-105"
            >
              Confirmar Reserva
            </button>
          </div>

        </form>
      </div>

    </div>
  </section>
</template>
