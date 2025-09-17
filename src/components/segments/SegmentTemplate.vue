<template>
  <div class="pb-20">
    <div class="banner__container relative overflow-hidden">
      <img class="w-full object-cover h-full" loading="lazy" :src="props.segment.bannerTop.image" />
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="banner__text text-white md:text-3xl lg:text-5xl font-bold bg-black bg-opacity-30 p-1 rounded">
          {{ props.segment.bannerTop.text }}
        </div>
      </div>
    </div>

    <div class="relative">
      <BarComponent position="top-left" height="20" width="320" inverted />
      <h2 class="text-center text-sky-300 text-6xl font-semibold pt-10 pb-11 text-seg">SEGMENTOS</h2>
    </div>

    <div class="bg-primary text-white pt-10 pb-11">
      <h1 class="text-center text-6xl text-ayb">{{ props.segment.title }}</h1>
    </div>

    <!-- ======= BLOQUE DE IMÁGENES + PÁRRAFOS ======= -->
    <div v-if="props.segment.segmentImages">
      <div
        v-for="(group, groupIndex) in props.segment.segmentImages"
        :key="`group_${groupIndex}`"
      >
        <!-- Párrafo (solo aquí) -->
        <div v-if="group.type === 'paragraph'" class="segment__intro mx-auto">
          <p class="intro-paragraph text-primary">
            {{ group.text }}
          </p>
        </div>

        <!-- Grupo de imágenes -->
        <div
          v-else
          class="segment__images grid"
          :style="`--columns: ${group.columns}`"
        >
          <div
            v-for="(image, imageIndex) in group.images"
            :key="`imagenNo_${imageIndex}`"
            class="image__wrapper relative"
          >
            <img class="w-full" :src="image.image" loading="lazy" />
            <span class="image__text absolute text-white text-2xl font-semibold z-20">
              {{ image.text }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- ======= /BLOQUE DE IMÁGENES + PÁRRAFOS ======= -->

    <!-- ¡OJO!: ya NO ponemos el bloque "Párrafo (antes de Acabados)". -->

    <div v-if="props.segment.bannerBottom" class="pt-20">
      <div
        v-for="(group, groupIndex) in props.segment.bannerBottom"
        :key="`groupBottom_${groupIndex}`"
        class="segment__images grid"
        :style="`--columns: ${group.columns}`"
      >
        <div
          v-for="(image, imageIndex) in group.images"
          :key="`imagenBottomNo_${imageIndex}`"
          class="banner-bottom relative"
        >
          <img class="w-full" :src="image" loading="lazy" />
        </div>
      </div>
    </div>

    <div v-if="props.segment.finishes" class="segment__finishes relative pt-20">
      <BarComponent v-if="props.segment.finishes.showBar" height="280" width="" />
      <h2 class="text-center text-5xl text-primary font-semibold">Acabados</h2>
      <div class="flex flex-wrap justify-center gap-y-16 mt-16">
        <div
          v-for="(finish, finishIndex) in props.segment.finishes.list"
          :key="`finish_${finishIndex}`"
          class="finishes__image-wrapper relative flex flex-wrap segment-img gap-6 items-center"
        >
          <img class="w-9/12 aspect-ratio-square rounded-full" :src="finish.image" loading="lazy" />
          <div class="flex justify between">
            <span class="d-block finish__text text-sky-300 text-2xl font-semibold text-acb">{{ finish.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import BarComponent from '../common/BarComponent.vue'

const props = defineProps({
  segment: {
    type: Object,
    default() {
      return {
        title: 'Industrial',
        segmentImages: [],
        finishes: []
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.segment__images {
  grid-template-columns: repeat(var(--columns), 1fr);
}

@media (max-width: 768px) {
  .segment__images {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .segment__images img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  .text-acb {
    font-size: 80%;
  }

  .text-seg {
    font-size: 250%;
  }

  .text-ayb {
    font-size: 150%;
  }
}

.image__wrapper {
  img {
    height: 380px;
  }

  &::after {
    content: '';
    z-index: 1;
    position: absolute;
    inset: 0;
    background-color: #00000073;
    opacity: 0;
    transition: opacity 500ms ease;
  }

  .image__text {
    top: 50%;
    left: 0;
    right: 0;
    text-align: center;
    transform: translateY(-50%);
  }

  &:hover {
    &::after {
      opacity: 1;
    }
  }
}

.banner-bottom {
  img {
    height: 300px;
  }
}

.segment-img {
  flex-direction: column;
}

@media (max-width: 768px) {
  .segment-img {
    flex-direction: column;
    align-items: center;
  }
}

.segment__list {
  width: min(90%, 940px);
}

/* === NUEVO: formato del párrafo introductorio === */
.segment__intro {
  width: min(90%, 940px);
  margin-top: 16px;
  margin-bottom: 8px;
}

.intro-paragraph {
  font-size: clamp(18px, 2.1vw, 24px);
  line-height: 1.65;
  text-align: justify;
  margin: 0 12px;
}

@media (max-width: 400px) {
  .intro-paragraph {
    font-size: 16px;
  }
}
/* === /NUEVO === */

.segment__finishes {
  padding-inline: 60px;

  .finishes__image-wrapper {
    flex-basis: calc(100% / 5);
    width: calc(100% / 5);

    @media (max-width: 768px) {
      flex-basis: calc(50%);
      width: 100%;
      justify-content: center;
    }
  }
}

.banner__text {
  text-shadow: 0 0 1.5px black;
}

.banner__container {
  height: 45vh;
}
</style>
