<template>
  <footer class="bg-primary py-10 md:py-20">
    <ContainerComponent class="footer__container grid gap-10 text-white">
      <article>
        <h2 class="mb-4 font-semibold">Grupo Fortelite México</h2>
        <nav>
          <ul class="flex flex-col font-light">
            <li>www.fortelitelabels.mx</li>
            <li >
              Teléfono: +52 8118725333
              
            </li>
            <li>
              +52 8110296350
            </li>
            <li>
              <a href="mailto:info@fortelite.mx">info@fortelite.mx</a>
            </li>
            <li class="mt-4">Texcoco #57, Col. Paraíso</li>
            <li>Guadalupe, N.L., México</li>
          </ul>
        </nav>
      </article>
      <article>
        <h2 class="mb-4 font-semibold">Nosotros</h2>
        <nav>
          <ul class="flex flex-col gap-5 font-light">
            <li>
              <RouterLink to="/clients">¿Quiénes somos?</RouterLink>
            </li>
            <li>
              <RouterLink to="/contact">Contacto</RouterLink>
            </li>
            <li>
              <a href="https://maps.app.goo.gl/BFzSL7aj5bkU2pFW6?g_st=iw" target="_blank" title="Fortelite Ubicacion">Ubicación</a>
            </li>
          </ul>
        </nav>
      </article>
      <article>
        <h2 class="mb-4 font-semibold">Soluciones</h2>
        <nav>
          <ul class="flex flex-col gap-1 font-light">
            <li>Etiquetas removibles y reposicionables</li>
            <li>Etiquetas para impresora láser</li>
            <li>Etiquetas sensibles a la presión</li>
            <li>Etiquetas "Placard label holder"</li>
            <li>Etiquetas Place label here</li>
            <li>Etiquetas permanentes</li>
            <li>Etiquetas resistentes a la temperatura</li>
          </ul>
        </nav>
      </article>
      <article class="flex flex-col items-center">
        <h2 class="mb-4 font-semibold">¡SÍGUENOS!</h2>
        <nav>
          <ul class="grid social-networks gap-4 place-items-center mx-auto">
            <li>
              <a href="https://www.facebook.com/fortelitedurablelabels/" target="_blank">
                <img class="w-[30px] aspect-square" src="https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/fb-icon.svg" />
              </a>
            </li>
            <li>
              <a href="https://mx.linkedin.com/company/fortelite" target="_blank">
                <img class="w-[30px] aspect-square" src="https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/linkedin-icon.svg" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/fortelite_labels/" target="_blank">
                <img class="w-[30px] aspect-square" src="https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/instagram-icon.svg" />
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@fortelitelabels?_t=8pmpUvhnjkc&_r=1" target="_blank">
                <img class="w-[30px] aspect-square" src="https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/tiktok-icon.svg" />
              </a>
            </li>
          </ul>
        </nav>
      </article>
    </ContainerComponent>
    <ContainerComponent class="text-center mt-8">
    <img class="w-[120px] md:w-[150px] ml-4 mb-4" src="https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/09/logo-abajo.svg" alt="">
    </ContainerComponent>
    <h2 style="color: white; text-align: center; font-size: 12px;">
      Las imágenes usadas en esta página son utilizadas con fines demostrativos sobre nuestras capacidades. Descargo de Responsabilidad otorgado por la sección 107 de la ley de Propiedad intelectual sobre el “Uso Justo”.
    </h2>
  </footer>
</template>

<script setup>
import ContainerComponent from "./ContainerComponent.vue";
</script>

<style lang="scss" scoped>
.footer__container {
  grid-template-columns: 1fr;
  text-align: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    text-align: left;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.social-networks {
  grid-template-columns: repeat(4, 30px);
  place-items: center;
  justify-content: center; /* Para centrar la lista horizontalmente */
}
</style>
