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
        <h1 class="text-6xl text-sky-300 text-center font-semibold pt-10 pb-12">SERVICIOS</h1>
        <article class="mb-4">
          <h2 class="text-primary text-3xl font-bold mb-4">ETIQUETAS</h2>
          <p>
            En Fortelite contamos con las mejores etiquetas industriales y especializadas, diseñadas para soportar el alto desempeño, temperaturas extremas, humedad, químicos y condiciones extremas de uso.

          </p>
          <span>Disponibles en:</span>
          <ul class="list-outside list-disc mb-4 pl-6">
            <li>Papeles: </li>
            <li>Papel Texturizado</li>
            <li>Papel Hi-gloss</li>
            <li>Papel Semi coated</li>
            <li>Papel mate</li>
<li>Material Sintético:</li>
            <li>BOPP Transparente/blanco/metalizado </li>
            <li>PET Transparente/blanco/metalizado </li>
            <li>Vinil grado ingenieria</li>
          </ul>
          <p>
            Tecnología de impresión: Flexografía, Digital, Offset, Serigrafía.
          </p>
        </article>
        <article class="mb-4">
          <h2 class="text-primary text-3xl font-bold mb-4">NAMEPLATES</h2>
          <span>Nuestras placas de identificación son ideales para maquinaria, productos y equipos en entornos industriales rigurosos y exigentes.</span>
          <span>Disponibles en:</span>
          <ul class="list-outside list-disc mb-4 pl-6">
            <li>Aluminio.</li>
            <li>Acero inoxidable.</li>
            <li>Latón</li>
            <li>Aluminio anodizado.</li>
             <li>Gravoply.</li>  
            <li>Policarbonato</li> 
            <li>  Etiquetas encapsuladas</li> 
            <li>Trovicel</li> 
          </ul>
          <p>
            Placas para la identificación de equipos como motores electricos, maquinaria, industria química,
            aeroespacial y automotriz. 

          </p>
          <p class="mb-4">
            Fabricadas para durar y soportar ambientes agresivos, incluso las condiciones
            más extremas. Tecnología de impresión: Serigrafía y Grabado láser
          </p>
          <ul class="list-outside list-disc pl-6">
            <li>La identificación más duradera.</li>
            <li>Resistencia a agentes químicos.</li>
            <li>Alta resistencia a la oxidación, humedad y corrosión.</li>
            <li>Soportan altas temperaturas.</li>
          </ul>
        </article>
        <article class="mb-4">
         <h2 id="certificaciones" class="text-primary text-3xl font-bold mb-4">CUMPLIMIENTO NORMATIVO</h2>
          <p>
         Experiencia en regularización y cumplimiento normativo en estándares
          </p>
          <span>Como:</span>
          <ul class="list-outside list-disc mb-4 pl-6">
            <li>UL 969</li>
            <li>ANSI</li>
            <li>CSA</li>
          </ul>
        </article>
        <article>
          <h2 class="text-primary text-3xl font-bold mb-4">CERTIFICACIONES</h2>
          <span>Acreditado en:</span>
          <ul class="list-outside list-disc pl-6">
            <li>ISO 9001:2015</li>
            <li>Rumbo IATF 16949</li>
            <li>Rumbo a ISO14001</li>
          </ul>
           <p>
            Trabajamos proyectos con adaptabilidad dimensional y suajes personalizados
          </p>
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
#certificaciones {
  scroll-margin-top: 120px; /* ajusta según la altura de tu header */
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
