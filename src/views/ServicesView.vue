<template>
  <div>
    <section class="banner-top relative grid grid-cols-4">
      <h2 class="banner__text banner-top__text text-white absolute left-0 right-0 text-center top-1/2 text-4xl font-bold bg-black bg-opacity-30 p-4 rounded ">
        Supera tus expectativas de impresión.
      </h2>
      <img class="w-full aspect-ratio-square" src="https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/FLEXO-1.jpg" loading="lazy">
      <img class="w-full" src="https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/MG_9975-1-scaled.jpg" loading="lazy">
      <img class="w-full" src="https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/DSC_2273-1.jpg" loading="lazy">
      <img class="w-full" src="https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/iStock-1127848486-1-scaled.jpg" loading="lazy">
    </section>
    <section class="relative text-xl pb-28">
      <BarComponent position="top-left" height="20" width="320" inverted />
      <div class="services__container">
        <h1 class="text-6xl text-sky-300 text-center font-semibold pt-10 pb-12">Servicios</h1>
        <article class="mb-4">
          <h2 class="text-primary text-3xl font-bold mb-4">FLEXOGRAFÍA</h2>
          <p>
            La flexografía es un método de impresión que utiliza placas flexibles
            para transferir tinta a una variedad de sustratos, perfecto para etiquetas.
          </p>
          <span>Ventajas:</span>
          <ul class="list-outside list-disc mb-4 pl-6">
            <li>Alta velocidad de producción.</li>
            <li>Versatilidad en materiales.</li>
            <li>Excelente calidad de impresión.</li>
            <li>Ideal para grandes volúmenes.</li>
            <li>Detalles precisos.</li>
          </ul>
          <p>
            La flexografía es una opción técnica y eficiente para etiquetas vibrantes
            y profesionales.
          </p>
        </article>
        <article class="mb-4">
          <h2 class="text-primary text-3xl font-bold mb-4">NAMEPLATES</h2>
          <span>Disponibles en:</span>
          <ul class="list-outside list-disc mb-4 pl-6">
            <li>Aluminio.</li>
            <li>Acero inoxidable.</li>
            <li>Latón</li>
            <li>Aluminio anodizado.</li>
          </ul>
          <p>
            Placas para la identificación de equipos como motores electricos, maquinaria, industria química,
            aeroespacial y automotriz.
          </p>
          <p class="mb-4">
            Fabricadas para durar y soportar ambientes agresivos, incluso las condiciones
            más extremas.
          </p>
          <ul class="list-outside list-disc pl-6">
            <li>La identificación más duradera.</li>
            <li>Resistencia a agentes químicos.</li>
            <li>Alta resistencia a la oxidación, humedad y corrosión.</li>
            <li>Soportan altas temperaturas.</li>
          </ul>
        </article>
        <article class="mb-4">
          <h2 class="text-primary text-3xl font-bold mb-4">DIGITAL</h2>
          <p>
            La impresión digital utiliza tecnología avanzada para imprimir directamente desde
            archivos digitales, sin necesidad de placas.
          </p>
          <span>Ventajas:</span>
          <ul class="list-outside list-disc mb-4 pl-6">
            <li>Tiempos de respuesta rápidos.</li>
            <li>Personalización y variabilidad en una misma corrida.</li>
            <li>Calidad en definición excepcional.</li>
            <li>Reproducción precisa del color.</li>
          </ul>
          <p>
            La impresión digital ofrece etiquetas de alta calidad y flexibilidad sin igual.
          </p>
        </article>
        <article>
          <h2 class="text-primary text-3xl font-bold mb-4">OFFSET</h2>
          <p class="mb-4">
            La impresión offset es un método en el que la imagen de tinta se transfiere de una plancha
            metálica a un cilindro de caucho y luego al papel u otro material.
          </p>
          <span>Ventajas:</span>
          <ul class="list-outside list-disc pl-6">
            <li>Reproducción precisa y de alta calidad de textos e imágenes.</li>
            <li>Eficiencia en grandes volúmenes.</li>
            <li>Puede aplicarse sobre una amplia variedad de superficies y materiales.</li>
          </ul>
        </article>
      </div>
      <img class="absolute bottom-0 left-0 -z-10" src="https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/Captura-de-pantalla-2024-07-21-a-las-12.46.58%E2%80%AFp.m-e1721587699795.png" loading="lazy">
    </section>
  </div>
</template>
<script setup>
import BarComponent from '@/components/common/BarComponent.vue';


</script>
<style lang="scss" scoped>
.banner-top {
  .banner-top__text {
    transform: translateY(-50%);
  }

  img {
    aspect-ratio: 2 / 1;
  }
}

.services__container {
  width: calc(100% - 200px * 2);
  margin-inline: auto;
}

@media only screen and (max-width: 768px) {
  .services__container {
    width: calc(100% - 40px); /* Reduce los márgenes laterales en móviles */
    padding: 0 10px;
  }

  h1{
    font-size: 90%;
  }

  h2{
    font-size: 90%;
  }

  p{
    font-size: 90%;
  }

  span{
    font-size: 80%;
  }

  li{
    font-size: 70%;
  }

  .banner-top {
  .banner-top__text {
    transform: translateY(-50%);
  }

  .banner__text {
  text-shadow: 0 0 1.5px black;
}
  img {
    height: 150px;
  }
}
}
</style>
