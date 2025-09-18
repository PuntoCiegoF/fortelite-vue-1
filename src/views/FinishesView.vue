<template>
  <div class="pb-20">
    <!-- Banner / título -->
    <div class="bg-primary text-white pt-10 pb-11">
      <h1 class="text-center text-6xl">ACABADOS</h1>
      <p class="text-center text-xl mt-4 opacity-90 px-4">
        Nuestros acabados se pueden aplicar en todos los segmentos. Mira estos ejemplos.
      </p>
    </div>

    <!-- Sección de ejemplos por segmento -->
    <section class="max-w-6xl mx-auto px-6 mt-14">
      <h2 class="text-primary text-4xl font-semibold text-center mb-10">
        Aplicables a todos los segmentos
      </h2>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(seg, i) in segmentsSamples"
          :key="i"
          class="relative rounded-2xl overflow-hidden group shadow-md"
        >
          <img
            class="w-full h-[240px] object-cover block"
            :src="seg.image"
            :alt="seg.title"
            loading="lazy"
          />
          <!-- overlay siempre visible y más oscuro en hover -->
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-opacity duration-300"></div>
          <div class="absolute inset-0 flex items-end p-4 z-10">
            <h3 class="text-white text-2xl font-semibold drop-shadow">
              {{ seg.title }}
            </h3>
          </div>
        </article>
      </div>

      <!-- CTA -->
      <div class="mt-12 flex flex-wrap items-center justify-center gap-4">
        <RouterLink
          to="/contact"
          class="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-white text-lg font-semibold hover:bg-secondary transition"
        >
          Solicitar asesoría de acabados
        </RouterLink>
        <RouterLink
          to="/services"
          class="inline-flex items-center justify-center rounded-full border-2 border-primary px-8 py-4 text-primary text-lg font-semibold hover:bg-primary hover:text-white transition"
        >
          Ver servicios
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
// Galería de ejemplos: 1 imagen representativa por segmento.
const segmentsSamples = [
  {
    title: 'Industrial',
    image:
      'https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/DSC_2273-1.jpg',
  },
  {
    title: 'Automotriz',
    image:
      'https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/MG_9975-1-scaled.jpg',
  },
  {
    title: 'Logística',
    image:
      'https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/iStock-1193312195-scaled.jpg',
  },
  {
    title: 'Farmacéutico y suplementos',
    image:
      'https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/farmaceutica.jpg',
  },
  {
    title: 'Alimenticio',
    image:
      'https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/09/alimentos-salsas.jpg',
  },
  {
    title: 'Belleza',
    image:
      'https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/D_Q_NP_960747-MLU72566096108_112023-O.webp',
  },
  {
    title: 'Limpieza y hogar',
    image:
      'https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/LIMPIEZA-HOGAR.jpg.webp',
  },
  {
    title: 'Veterinaria / Mascotas',
    image:
      'https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/mascotas.jpg',
  },
  {
    title: 'Entretenimiento',
    image:
      'https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/il_1588xN.4679353629_g27r.jpg',
  },
]
</script>

<style scoped>
/* sin estilos extra por ahora */
</style>
