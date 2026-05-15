<template>
  <section class="py-32 bg-black text-white" id="reservations">

    <div class="container">

      <!-- HEADER -->
      <div class="text-center mb-16" data-aos="fade-up">

        <p class="uppercase tracking-[0.4em] text-yellow-400 mb-3">
          Reservations
        </p>

        <h2 class="text-5xl font-bold">
          Book Your Table
        </h2>

        <p class="text-gray-400 mt-4 max-w-2xl mx-auto">
          Reserve your culinary experience at Lúmina. We recommend booking in advance for premium seating.
        </p>

      </div>

      <!-- FORM -->
      <div class="max-w-3xl mx-auto bg-[#111111] p-10 rounded-[2.5rem] shadow-2xl border border-white/5"
           data-aos="zoom-in">

        <form class="grid md:grid-cols-2 gap-6">

          <!-- NAME -->
          <div class="flex flex-col">
            <label class="text-sm mb-2 text-gray-400" for="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              class="bg-black border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400"
            />
          </div>

          <!-- EMAIL -->
          <div class="flex flex-col">
            <label class="text-sm mb-2 text-gray-400" for="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="john@email.com"
              class="bg-black border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400"
            />
          </div>

          <!-- DATE -->
          <div class="flex flex-col">
            <label class="text-sm mb-2 text-gray-400" for="date">Date</label>
            <input
              type="date"
              id="date"
              class="bg-black border placeholder-white border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400"
            />
          </div>

          <!-- TIME -->
          <div class="flex flex-col">
            <label class="text-sm mb-2 text-gray-400" for="time">Time</label>
            <input
              type="time"
              id="time"
              class="bg-black border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400"
            />
          </div>

          <!-- PEOPLE -->
          <div class="flex flex-col md:col-span-2">
            <label class="text-sm mb-2 text-gray-400" for="people">Guests</label>
            <select
              id="people"
              class="bg-black border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400"
            >
              <option>1 Person</option>
              <option>2 People</option>
              <option>3 People</option>
              <option>4 People</option>
              <option>5+ People</option>
            </select>
          </div>

          <!-- BUTTON -->
          <div class="md:col-span-2">
            <button
              type="submit"
              class="w-full py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-full transition duration-300 hover:scale-105 shadow-xl"
            >
              Confirm Reservation
            </button>
          </div>

        </form>

      </div>

    </div>

  </section>
</template>