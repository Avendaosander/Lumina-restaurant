<template>
  <section class="py-32 bg-black text-white">

    <div class="container">

      <div class="grid md:grid-cols-2 gap-16 items-center">

        <div
          class="relative group"
          data-aos="fade-right"
        >
          <img
            src="https://images.unsplash.com/photo-1543353071-087092ec393a"
            class="w-full h-[600px] object-cover rounded-[2.5rem] shadow-2xl group-hover:scale-105 transition duration-700"
          />

          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-[2.5rem]"></div>

          <div class="absolute top-6 left-6 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold tracking-widest">
            Jefe de Cocina
          </div>
        </div>

        <div data-aos="fade-left">

          <p class="uppercase tracking-[0.4em] text-yellow-400 mb-4">
            Genio Culinario
          </p>

          <h2 class="text-5xl font-bold mb-6 leading-tight">
            Creado con Pasión,<br/> Impulsado por la Perfección
          </h2>

          <p class="text-gray-400 text-lg leading-relaxed mb-10">
            En Lúmina, cada plato es un reflejo de años de experiencia,
            precisión y expresión artística. Nuestro chef principal combina tradición
            con innovación para crear experiencias gastronómicas inolvidables.
          </p>

          <div class="grid grid-cols-3 gap-6 mb-10">

            <div>
              <h3 class="text-3xl font-bold text-yellow-400">15+</h3>
              <p class="text-gray-400 text-sm">Años de Experiencia</p>
            </div>

            <div>
              <h3 class="text-3xl font-bold text-yellow-400">50+</h3>
              <p class="text-gray-400 text-sm">Platos Singulares</p>
            </div>

            <div>
              <h3 class="text-3xl font-bold text-yellow-400">20K+</h3>
              <p class="text-gray-400 text-sm">Clientes Satisfechos</p>
            </div>

          </div>

          <button
            class="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition hover:scale-105"
          >
            Conoce al Equipo
          </button>

        </div>

      </div>

    </div>

  </section>
</template>