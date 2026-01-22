<template>
  <div class="">
    <header class="header__container flex items-center gap-20 pl-20 pr-8">
      <RouterLink to="/">
        <img class="w-[100px] h-[72px]" src="https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/09/LOGOFORTELITEMR.png" />
      </RouterLink>
      <nav class="ml-auto">
        <ul class="hidden lg:flex items-center gap-0">
          <li
            v-for="(navItem, navItemIndex) in navigationList"
            :key="`${navItem.text}_${navItemIndex}`"
            class="relative"
          >
            <RouterLink
              :to="navItem.to"
              class="nav__link relative block px-8 py-6 cursor-pointer hover:bg-secondary font-semibold"
              :class="{
                'bg-secondary active': route.path == navItem.to || (route.path.includes('segments') && navItem.to.includes('segments')),
              }"
              @mouseover="navItem.text === 'Segmentos' ? showDropdown = true : ''"
              @mouseleave="navItem.text === 'Segmentos' ? showDropdown = false : ''"
            >
              {{ navItem.text }}
              <!-- Dropdown for Segments (desktop) -->
              <div
                v-if="navItem.text === 'Segmentos' && showDropdown"
                class="dropdown absolute top-full left-0 bg-white border rounded shadow-lg"
              >
                <RouterLink
                  v-for="(segment, index) in segments"
                  :key="index"
                  :to="segment.to"
                  class="block px-4 py-2 text-black hover:bg-gray-200 cursor-pointer"
                >
                  {{ segment.text }}
                </RouterLink>
              </div>
            </RouterLink>
          </li>
        </ul>

        <!-- Mobile Menu Button -->
        <div class="lg:hidden">
          <button @click="toggleMenu" class="text-black focus:outline-none">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>

    <!-- Mobile Dropdown Menu -->
    <div :class="menuOpen ? 'block' : 'hidden'" class="lg:hidden flex flex-col space-y-2 mt-2">
      <div v-for="(navItem, navItemIndex) in navigationList" :key="`${navItem.text}_${navItemIndex}`">
        <RouterLink
          v-if="navItem.text !== 'Segmentos'"
          :to="navItem.to"
          class="text-black p-2 rounded"
        >
          {{ navItem.text }}
        </RouterLink>

        <!-- Dropdown for Segments in mobile -->
        <div v-else>
          <button @click="toggleMobileDropdown" class="text-black p-2 w-full text-left">
            {{ navItem.text }}
          </button>
          <div v-if="mobileDropdownOpen" class="flex flex-col mt-2 space-y-2">
            <RouterLink
              v-for="(segment, index) in segments"
              :key="index"
              :to="segment.to"
              class="text-black bg-gray-200 p-2 rounded"
            >
              {{ segment.text }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const menuOpen = ref(false)
const showDropdown = ref(false)
const mobileDropdownOpen = ref(false)

const navigationList = [
  { text: "Inicio", to: "/" },
  { text: "Servicios", to: "/services" },
  { text: "Acabados", to: "/acabados" }, // 👈 NUEVO ítem del menú principal
  { text: "Segmentos", to: "/segments" },
  { text: "Nosotros", to: "/clients" },
  { text: "Contacto", to: "/contact" },
]
const segments = [
  {text: "INDUSTRIAL", to: "/segments/industrial" },
  { text: "AUTOMOTRIZ", to: "/segments/automotriz"},
  {text: "LOGISTICA", to: "/segments/logistica"}, 
  {text: "FARMACEUTICO Y SUPLEMENTOS", to: "/segments/farmaceutica"},
  {text: "ALIMENTICIO", to: "/segments/alimentos-y-bebidas"},
  {text: "BELLEZA", to: "/segments/salud-y-belleza"},
  {text: "LIMPIEZA Y HOGAR", to: "/segments/hogar"},
  {text: "VETERINARIA / MASCOTAS", to: "/segments/vinos-y-licores"},
  {text: "ENTRETENIMIENTO", to: "/segments/entretenimiento"},
] 

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function toggleMobileDropdown() {
  mobileDropdownOpen.value = !mobileDropdownOpen.value
}
</script>

<style lang="scss" scoped>
.nav__link {
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 10px;
    background-color: #214583;
    opacity: 0;
  }

  &:hover::after {
    opacity: 0.5;
  }

  &.active::after {
    opacity: 1;
  }
}

.dropdown {
  z-index: 1000;
  cursor: pointer;
}
</style>
