<script setup>
  
import { CONTACT } from '@/constants/contact';
  import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { computed } from 'vue';
import { HOME_CAROUSEL_VIDEOS } from "@/constants";



const carouselVideos = computed(() => {
  return HOME_CAROUSEL_VIDEOS.map((video) => {
    return {
      src: video.src,
      type: video.type,
    };
  });
});

const topBannerImage = computed(() => CONTACT.top_banner);
const timelineImage = 'https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/08/Time-Line-Fortelite-Nosotros.png';
const certifications = 'https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/08/Certificaciones-Fortelite-Nosotros.png';


</script>

<style lang="scss" scoped>
.video__container {
  height: 300px;
  background-color: #214583;
}

.product__container {
  grid-template-columns: 1fr 1fr;
}

.carousel__item {
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
}

</style>


<template>
  <section class="bg-primary w-full">
        <img :src="topBannerImage" alt="">
  </section>

  <div class="flex justify-center pt-10">
    <ContainerComponent tag="article" class="py-0">
      <div class="self-center text-center">
        <h2 class="text-sky-300 text-6xl font-semibold">Nosotros</h2>
        <p class="text-4xl text-blue mt-2 font-semibold">
          Expertos en etiquetas industriales y especializadas
        </p>
      </div>
    </ContainerComponent>
    <BarComponent position="center" height="20" width="320" inverted />
  </div>
  
  <BarComponent position="top-left" height="20" width="320" inverted />
  
  <!-- Nueva sección de imagen -->
  <section class="w-full mt-8">
    <img :src="timelineImage" alt="Timeline Fortelite" class="w-full">
  </section>

  <section class="w-full mt-8">
    <img :src="certifications" alt="Timeline Fortelite" class="w-full">
  </section>
  <div>
    <carousel :items-to-show="4">
      <slide v-for="(video, idx) in carouselVideos" :key="idx">
        <div class="carousel__item">
          <video controls width="300px" height="400px">
              <source :src="video.src" :type="video.type">
              Tu navegador no soporta el elemento de video.
            
          </video>
        </div>
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

