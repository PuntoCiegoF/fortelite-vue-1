 <template>
  <div class="video__container text-white text-center">
    <!-- VIDEO -->
    <video muted autoplay controls loop playsinline class="video__element" ref="reproductor" @canplay="handleCanPlay" :style="{ display: videoVisible ? 'block' : 'none' }">
      <source src="https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/08/Institucional-ajustes.mp4" type="video/mp4">
      Tu navegador no soporta el elemento de video.
    </video>
   </div>

    <!-- IMAGEN + BOTÓN -->
    <div style="background-color: white; padding: 20px; text-align: center;">
  <div style="position: relative; display: inline-block;">
    <img
      loading="lazy"
      class="responsive-image-cert"
      style="margin-top: 20px; margin-bottom: 20px; margin-left: 5px; margin-right: 30px;"
      srcset="https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/08/cert030620253color3.png 1300w, 
              https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/08/cert030620253color3.png 715w"
      sizes="(max-width: 768px) 715px, 1300px"
    />
    <a
      href="https://iq.ul.com/ul/cert.aspx?ULID=104745228"
      target="_blank"
      class="btn-certificado-ul"
    >
      UL: MH67689
    </a>
  </div>
</div>

  <!-- CONTENIDO PRINCIPAL -->
  <div class="relative">
  <ContainerComponent tag="article">

    <!-- Imagen grande de ForteMR fuera del grid -->
    <div class="w-full flex justify-center my-8">
      <img
        src="https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/08/ForteMR.png"
        alt="Marca registrada Fortelite"
        style="width: 1200px; max-width: 100%; height: auto;"
      />
    </div>

    <!-- Grid original -->
    <div class="grid sm:grid-col-3 lg:grid-rows-3 lg:grid-flow-col gap-4 content-center product__container py-0">
      <div class="sm:col-span-24 content-center lg:row-span-3 mt">
        <img
          loading="lazy"
          class="w-full aspect-square"
          src="https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/08/lv_0_20240819142526.gif"
        />
      </div>

      <div class="sm:col-span-1 lg:col-span-1 mt">
        <h2 class="text-sky-300 text-5xl font-semibold">FORTELITE</h2>
        <p class="text-2xl text-blue mt-2 font-semibold">
          Expertos en etiquetas industriales y especializadas
        </p>
      </div>

      <div class="col-span-3 lg:col-span-2 pb-10">
        <p class="text-xl mt-3">
          Ofrecemos soluciones de etiquetas y nameplates impresas especializadas para la identificación de productos y control de procesos a nivel mundial.
          Esforzándonos día a día por ser los mejores líderes en el mercado de la industria de impresión de etiquetas y nameplates.
          Cumplimiento normativo UL, ANSI y CSA. Y operaciones certificadas bajo esquema IMMEX.
        </p>
      </div>
    </div>
  </ContainerComponent>

  <BarComponent position="top-left" height="20" width="320" inverted />

    <!-- SEGMENTOS -->
    <div class="bg-primary py-14">
      <ContainerComponent>
        <h2 class="text-center text-5xl text-white font-semibold mb-12">SEGMENTOS</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-y-16">
          <div v-for="(segment, segmentIndex) in HOME_SEGMENTS" :key="`${segment.text}_${segmentIndex}`" class="text-center">
            <RouterLink class="inline-block w-full" :to="segment.href">
              <img class="w-6/12 mx-auto aspect-square" :src="segment.icon" loading="lazy" />
            </RouterLink>
            <h3 class="text-white text-2xl font-semibold -mt-6 text-seg">{{ segment.text }}</h3>
          </div>
        </div>
      </ContainerComponent>
    </div>
  </div>

  <!-- SERVICIOS -->
  <div class="relative">
    <ContainerComponent class="py-10">
      <h2 class="text-center text-5xl text-primary font-semibold mb-12">SERVICIOS</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-y-16">
        <div v-for="({ text, src }, serviceIndex) in HOME_SERVICES" :key="`${text}_${serviceIndex}`" class="text-center">
          <img class="w-9/12 aspect-square rounded-full mx-auto mb-6 img-services" :src="src">
          <h3 class="text-sky-300 text-center text-2xl font-semibold">{{ text }}</h3>
        </div>
      </div>
      <p class="text-xl text-center w-7/12 mt-12 mb-24 mx-auto">
        Fortelite ofrece soluciones de impresión de etiquetas guiadas a través de asesoría personalizada, brindando opciones de materiales de la más alta calidad con certificaciones que lo avalan,
        asegurando distinción, alta definición de impresión y los mejores tiempos de entrega del mercado.
      </p>
    </ContainerComponent>
    <img class="absolute bottom-0 left-0 -z-10" src="https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/Captura-de-pantalla-2024-07-21-a-las-12.46.58%E2%80%AFp.m-e1721587699795.png" loading="lazy">
  </div>

  <!-- CLIENTES -->
  <hr />
  <ContainerComponent class="py-8">
    <h2 class="text-sky-300 text-2xl text-center font-semibold">ALGUNOS DE NUESTROS CLIENTES</h2>
    <div class="clients-container flex gap-2 flex-wrap">
      <img class="client__image" src="https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/08/logo-HyundaiTrue.png" />
      <img class="client__image" src="https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/08/NIPPON-SEIKI.png" />
      <img class="client__image" src="https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/08/Panasonic_brand-Logo.wine_.png" />
      <img class="client__image" src="https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/08/schweitzer-engineering-laboratories-sel-logo-vector.png" />
    </div>
  </ContainerComponent>
</template>

<script setup>
import BarComponent from "@/components/common/BarComponent.vue";
import ContainerComponent from "@/components/common/ContainerComponent.vue";
import { HOME_SEGMENTS, HOME_SERVICES } from "@/constants";
import { onMounted, ref } from "vue";

const videoVisible = ref(false);
const reproductor = ref(null);

function handleCanPlay() {
  videoVisible.value = true;
}

onMounted(() => {
  if (reproductor.value) {
    reproductor.value.play().catch((error) => {
      console.error("Error al intentar reproducir el video:", error);
    });
  }
});
</script>

<style lang="scss" scoped>
.video__container {
  min-height: 100%;
  background-color: #214583;
}
.product__container {
  grid-template-columns: 1fr 1fr;
}
.carousel__item {
  min-height: 450px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
}
.client__image {
  width: 250px;
}
.mt {
  margin-top: 30px;
}
.clients-container {
  display: flex;
  flex-direction: row;
}

.btn-certificado-ul {
  position: absolute;
  top: 35px;
  left: 220px;
  background-color: rgba(0, 123, 255, 0.9);
  color: white;
  padding: 3px 6px;
  border-radius: 4px;
  font-size: 12px;
  text-decoration: none;
}

@media (max-width: 768px) {
  .clients-container {
    flex-direction: column;
    align-items: center;
  }
  .text-seg {
    font-size: 100%;
  }
  .img-services {
    width: 50%;
  }
  .client__image {
    width: 50%;
    margin-bottom: 16px;
  }
  .video-placeholder {
    width: 100%;
    height: 500px;
    background-color: #000;
  }

  .btn-certificado-ul {
    top: 25px;
    left: 65px;
    font-size: 2px;
    padding: 1px 2px;
  }
}
</style>
