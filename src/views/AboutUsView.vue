<template>
  <div class="carousel-iner w-full h-full">
    <carousel class="carrousel" :items-to-show="1">
      <slide v-for="(item, idx) in carouselImages" :key="idx">
        <div class="carousel__item h-[400px] w-full bg-cover bg-top" :style="{ backgroundImage: `url(${item.src})` }">
          <img class="w-full h-[400px] object-cover object-top" :src="item.src" :alt="item.alt" />
        </div>
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>




  <div class="">

    <div class="relative py-20">
      <h1 class="text-center text-sky-300 text-6xl font-bold mb-8">Nosotros</h1>
      <p class="text-center text-4xl font-semibold text-primary">
        El mejor tiempo de entrega en la industria es de Fortelite
      </p>
      <BarComponent position="top-left" height="20" width="320" inverted />
    </div>
    <!-- <div class="pb-10">
      <img class="w-full h-[700px]" src="https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/iStock-1214894854-scaled.jpg"/>
    </div> -->

    <template>
      <fwb-carousel :pictures="pictures" />
    </template>


    <ContainerComponent class="pb-20">
      <h2 class="text-primary text-center text-5xl font-bold mb-8">Nuestra Historia</h2>
      <p class="text-2xl text-about">
        Fortelite surge de la necesidad de etiquetas especializadas para diversos tipos de industria, nuestro equipo
        de expertos ha recorrido un largo camino en la búsqueda de la alta calidad y excelencia en cada producto
        que fabricamos, para asegurar así más resistencia, seguridad y una aliada silenciosa en ventas.
      </p>
      <img
        src="https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/08/Time-Line-Fortelite-Nosotros-e1723228748654.png" />
    </ContainerComponent>
    <hr class="my-10">
    <ContainerComponent class="pt-8 pb-20">
      <h2 class="text-sky-300 text-center text-5xl font-bold mb-8">Certificaciones:</h2>
      <div class="flex flex-col justify-center text-lg">
        <div class="grid gap-4 certifications">
          <img class="w-full aspect-square object-contain"
            src="https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/1.png" />
          <p class="text-descript">
            <span class="text-primary font-bold">ISO 9001:2015:</span>
            Estándar internacional enfocado en proporcionar productos y/o servicios que cumplan con los requerimientos
            internos y
            externos de maneraeficaz para controlar y mejorar su rendimiento.
          </p>
        </div> 
      </div>
    </ContainerComponent>
    <img class="w-2/12 absolute bottom-0 left-0 -z-10"
      src="https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/Captura-de-pantalla-2024-07-21-a-las-12.46.58%E2%80%AFp.m-e1721587699795.png"
      loading="lazy">
  </div>

  <div>
    <carousel :items-to-show="itemsToShow" :breakpoints="{
      768: {
        itemsToShow: 1
      },
      1024: {
        itemsToShow: 4
      }
    }">
      <slide v-for="(video, idx) in carouselVideos" :key="idx">
        <div class="carousel__item">
          <video controls width="300px" height="400px" autoplay loop muted>
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
<script setup>
import { computed } from 'vue';
import BarComponent from '@/components/common/BarComponent.vue';
import ContainerComponent from '@/components/common/ContainerComponent.vue';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { HOME_CAROUSEL_VIDEOS } from "@/constants";
import { HOME_CAROUSEL_IMAGES } from "@/constants";

const carouselVideos = computed(() => {
  return HOME_CAROUSEL_VIDEOS.map((video) => {
    return {
      src: video.src,
      type: video.type,
    };
  });
});

const carouselImages = computed(() => {
  return HOME_CAROUSEL_IMAGES.map((image) => {
    return {
      src: image.src,
      alt: image.alt,
    };
  });
});


</script>
<style scoped>
.certifications {
  grid-template-columns: 60px 1fr;
}

:deep(.carousel__prev) {
  background-color: transparent;
  color: white;
}

:deep(.carousel__next) {
  background-color: transparent;
  color: white;
}

.media-viewer-wrapper {
  flex-grow: 2;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* Ocupa el 100% de la altura de la ventana de visualización */
  padding: 20px;
  /* Ajusta el relleno si es necesario */
  box-sizing: border-box;
  /* Incluye el relleno en el tamaño total del contenedor */
}

.demo {
  width: 200px;
  height: 300px;
  object-fit: cover;
}

.sirv-media-viewer {
  width: 100%;
  height: 100%;
}



@media only screen and (max-width: 768px) {

  h1 {
    font-size: 250%;
  }


  p {
    font-size: 150%;
  }


  .text-about {
    font-size: 130%;
  }

  .text-descript {
    font-size: 100%;
  }

  h2 {
    font-size: 150%;
  }

  span {
    font-size: 80%;
  }



  .banner-top {
    .banner-top__text {
      transform: translateY(-50%);
    }


  }
}
</style>
