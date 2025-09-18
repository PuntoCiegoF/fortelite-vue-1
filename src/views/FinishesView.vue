<template>
  <div class="pb-20">
    <div class="bg-primary text-white pt-10 pb-11">
      <h1 class="text-center text-6xl">ACABADOS</h1>
      <p class="text-center text-xl mt-4 opacity-90 px-4">
        Los mismos acabados, aplicables a cualquier segmento. Las imágenes son sólo ejemplos de distintos sectores.
      </p>
    </div>

    <section class="max-w-6xl mx-auto px-6 mt-14">
      <div class="flex flex-wrap justify-center gap-y-16 gap-x-10">
        <div
          v-for="(finish, i) in finishes"
          :key="i"
          class="flex flex-col items-center w-[260px] sm:w-[280px]"
        >
          <div class="w-[220px] h-[220px] sm:w-[240px] sm:h-[240px] rounded-full overflow-hidden shadow-md">
            <img
              :src="finish.image"
              :alt="finish.text"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <span class="mt-4 text-sky-300 text-2xl font-semibold text-center">
            {{ finish.text }}
          </span>
        </div>
      </div>

      <div class="mt-12 flex flex-wrap items-center justify-center gap-4">
        <RouterLink
          to="/services"
          class="inline-flex items-center justify-center rounded-full border-2 border-primary px-8 py-4 text-primary text-lg font-semibold hover:bg-primary hover:text-white transition"
        >
          Ver servicios
        </RouterLink>
        <RouterLink
          :to="{ path: '/services', hash: '#certificaciones' }"
          class="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-white text-lg font-semibold hover:bg-secondary transition"
        >
          Ver certificaciones
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
const finishes = [
  // Alimenticio
  {
    text: 'Laminado mate',
    image:
      'https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/09/alimentos-salsas.jpg',
  },
  // Automotriz / nameplate
  {
    text: 'Laminado brillante',
    image:
      'https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/MG_9975-1-scaled.jpg',
  },
  // Industrial
  {
    text: 'Hot foil',
    image:
      'https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/DSC_2273-1.jpg',
  },
  // Logística
  {
    text: 'Cold foil',
    image:
      'https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/iStock-1193312195-scaled.jpg',
  },
  // Belleza / Higiene
  {
    text: 'Barniz UV',
    image:
      'https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/D_Q_NP_960747-MLU72566096108_112023-O.webp',
  },
  // Farmacéutico
  {
    text: 'Emboss',
    image:
      'https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/farmaceutica.jpg',
  },
  // Hogar
  {
    text: 'Deboss',
    image:
      'https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/LIMPIEZA-HOGAR.jpg.webp',
  },
  // Entretenimiento (bebidas/jugos como mock)
  {
    text: 'Texturizado / Especial',
    image:
      'https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/il_1588xN.4679353629_g27r.jpg',
  },
]
</script>

<style scoped>
/* El layout circular se logra con rounded-full + overflow-hidden + object-cover */
</style>
