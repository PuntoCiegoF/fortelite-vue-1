<template>
  <div class="pb-20">
    <div class="banner__container relative overflow-hidden">
      <img class="w-full object-cover h-full" loading="lazy" :src="props.segment.bannerTop.image">
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
    <div
      v-if="props.segment.segmentImages"      
    >
      <div
        v-for="(group, groupIndex) in props.segment.segmentImages"
        :key="`group_${groupIndex}`"
        class="segment__images grid"  
        :style="`--columns: ${group.columns}`"
      >
        <div
          v-for="(image, imageIndex) in group.images"
          :key="`imagenNo_${imageIndex}`"
          class="image__wrapper relative"
        >
          <img class="w-full" :src="image.image" loading="lazy">
          <span class="image__text absolute text-white text-2xl font-semibold z-20">{{ image.text }}</span>  
        </div>
      </div>
    </div>
    <div
      v-if="props.segment.infoList"
      class="relative pt-20"
    >
      <BarComponent v-if="props.segment.infoList.showBar" height="280" width="20" />
      <div      
        class="segment__list mx-auto"
      >
        <ul class="text-primary text-3xl list-outside list-disc m-3">
          <li
            v-for="(item, itemIndex) in props.segment.infoList.list"
            :key="`itemNo_${itemIndex}`"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <div
      v-if="props.segment.bannerBottom"
      class="pt-20"
    >
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
          <img class="w-full" :src="image" loading="lazy">     
        </div>
      </div>
    </div>
    <div
      v-if="props.segment.finishes"
      class="segment__finishes relative pt-20"
    >
      <BarComponent v-if="props.segment.finishes.showBar" height="280" width="" />
      <h2 class="text-center text-5xl text-primary font-semibold">Acabados</h2>
      <div class="flex flex-wrap justify-center gap-y-16 mt-16">
        <div
          v-for="(finish, finishIndex) in props.segment.finishes.list"
          class="finishes__image-wrapper relative flex flex-wrap segment-img gap-6 items-center"
          :key="`finish_${finishIndex}`"
        >

         
          <img class="w-9/12 aspect-ratio-square rounded-full" :src="finish.image" loading="lazy" >
          
          <div class="flex justify between">

        <span class="d-block finish__text text-sky-300 text-2xl font-semibold text-acb">{{ finish.text }}</span>

        </div>

          
        </div>

        
      </div>
    </div>


  </div>
</template>
<script setup>
import { defineProps } from 'vue';
import BarComponent from '../common/BarComponent.vue';
const props = defineProps({
  segment: {
    type: Object,
    default () {
      return {
        title: "Industrial",
        segmentImages: [

        ],
        finishes: [

        ]
      }
    },
  }
});
</script>
<style lang="scss" scoped>
.segment__images {
  grid-template-columns: repeat(var(--columns), 1fr);
}

@media (max-width: 768px) {
  .segment__images {
    grid-template-columns: repeat(2, 1fr); /* Cambia 2 por el número de columnas que quieras en móviles */
    gap: 10px; /* Opcional: reduce el espacio entre las imágenes */
  }

  
  .segment__images img {
    width: 100%; /* Asegura que las imágenes ocupen todo el ancho de la columna */
    height: 150px; /* Ajusta la altura de las imágenes */
    object-fit: cover; /* Recorta la imagen para llenar el contenedor si es necesario */
  }

  .text-acb{
    font-size: 80%;
  }

  .text-seg{
    font-size: 250%;
  }

  .text-ayb{
    font-size: 150%;
  }
}

.image__wrapper {
  img {
    height: 380px;
  }

  &::after {
    content: "";
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

.segment-img{
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

.segment__finishes {
  padding-inline: 60px;

  .finishes__image-wrapper {
    flex-basis: calc(100% / 5);
    width: calc(100% / 5);

    @media (max-width: 768px) {
      flex-basis: calc(50%); /* Aquí estableces que en móviles cada elemento ocupe el 50% */
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
