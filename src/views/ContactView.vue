<script setup>
import { ref } from 'vue';
import { computed } from 'vue';
import { CONTACT } from '@/constants/contact';
import axios from 'axios';
const Swal = require('sweetalert2');
import { onMounted } from 'vue';
import { loadScript } from '@sirv/sirvjs-vue';



// // Estado para el carrusel
// const images = ref([
//     'https://i0.wp.com/robbreport.mx/wp-content/uploads/2022/07/captura-de-pantalla-2022-07-01-a-las-161353.jpg?fit=1277%2C796&ssl=1',
//     'https://via.placeholder.com/400x300/ff7f7f',
//     'https://via.placeholder.com/400x300/7f7fff'
// ]);

// const activeImage = ref(0);
// const zoom = ref(false);

const buttomImage = computed(() => CONTACT.buttom_image);
const title = computed(() => CONTACT.title);
const topBannerImage = computed(() => CONTACT.top_banner);
const formEndpoint = computed(() => CONTACT.form_endpoint);
const thanksMessage = computed(() => CONTACT.thanks_message);
const erroMessage = computed(() => CONTACT.error_message);

const formData = ref({
    fullName: '',
    email: '',
    phone: '',
    state: '',
    marketSector: '',
    piecesQuantity: '',
    origin: '',
    message: ''
});

const viewer = ref(null);
const id = ref('smv-test');

onMounted(() => {
  loadScript().then((sirv) => {
    sirv.start();
    sirv.on('viewer:ready', (e) => {
      if (e.id === 'smv-test') {
        viewer.value = e;
        console.log('viewer:ready', e);
      }
    });
  });
});

const handleSubmit = () => {
    for (const key in formData.value) {
        if (formData.value[key] === '') {
            alert(`El campo ${key} es requerido.`);
            return;
        }
    }
    axios.post(
        formEndpoint.value + "?type=contact_us",
        {
            data: JSON.stringify(formData.value)
        }
    ).then(() => {
        formData.value = {
            fullName: '',
            email: '',
            phone: '',
            state: '',
            marketSector: '',
            piecesQuantity: '',
            origin: '',
            message: ''
        };
        Swal.fire({
            text: thanksMessage.value,
            icon: 'success',
            confirmButtonText: 'OK'
        });
    }).catch(error => {
        Swal.fire({
            title: '¡Ups...!',
            text: erroMessage.value,
            icon: 'error',
            confirmButtonText: 'OK'
        });
        console.error(error);
    });
};



</script>

<template>
    <section class="bg-primary w-full">
        <img :src="topBannerImage" alt="" class="w-full">
    </section>

    <div class=" bg-primary container mx-auto px-6 py-8">
            <div class="flex items-center justify-center space-x-4">
                <!-- Carousel -->
                <div class="w-full max-w-4xl relative"> 
                    <sirv-media-viewer
                    :id="id"
                    data-options="thumbnails.type:crop"
                    :slides="[
                    {
                        src: 'https://fortelite.sirv.com/_MG_0407.jpg',
                        type: 'zoom',
                        dataOptions: {
                        mode: 'deep',
                        },
                    },
                    {
                        src: 'https://fortelite.sirv.com/_MG_0769.jpg',
                        type: 'zoom',
                        dataOptions: {
                        mode: 'deep',
                        },
                    },
                    {
                        src: 'https://fortelite.sirv.com/botella%20zoom.png',
                        type: 'zoom',
                        dataOptions: {
                        mode: 'deep',
                        },
                    },
                    {
                        src: 'https://fortelite.sirv.com/_MG_9993-Editar.jpg',
                        type: 'zoom',
                        dataOptions: {
                        mode: 'deep',
                        },
                    },
                    {
                        src: 'https://fortelite.sirv.com/_MG_9944-Editar.jpg',
                        type: 'zoom',
                        dataOptions: {
                        mode: 'deep',
                        },
                    },
                    ]"
                ></sirv-media-viewer>
                <div style = "width: 200px; height: 100px;">
                    <sirv-media-viewer
                    :id="id"
                    :slides="slides"
                    ></sirv-media-viewer>
                    <div class="flex justify-center mt-5">
                    </div>
                </div>
                </div>
            </div>

            
        </div>

    <div class="carousel-container">
        <div class="carousel">
        <div 
            v-for="(image, index) in images" 
            :key="index" 
            class="carousel-item" 
            @mouseover="currentImageIndex = index"
        >
            <img 
            :src="image" 
            :alt="'Image ' + (index + 1)" 
            :class="{ zoomed: currentImageIndex === index }"
            />
        </div>
        </div>
    </div>

    <section class="bg-white w-full">
        <section class="py-10">
            <h1 class="text-center text-5xl font-bold text-sky-200">{{ title }}</h1>
        </section>
        <section class="w-full bg-sky-100 flex justify-center ">
            <form @submit.prevent="handleSubmit" class="custom-padding rounded-lg w-4/5">
                <div class="grid grid-cols-1 md:grid-cols-1 gap-4 mb-4">
                    <div>
                        <label for="fullName" class="block text-gray-700 mb-2">Nombre completo</label>
                        <input type="text" id="fullName" v-model="formData.fullName"
                            class="border border-gray-300 p-2 w-full rounded" required minlength="3" />
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label for="email" class="block text-gray-700 mb-2">Correo</label>
                        <input type="email" id="email" v-model="formData.email"
                            class="border border-gray-300 p-2 w-full rounded" required />
                    </div>
                    <div>
                        <label for="phone" class="block text-gray-700 mb-2">Teléfono</label>
                        <input type="tel" id="phone" v-model="formData.phone"
                            class="border border-gray-300 p-2 w-full rounded" pattern="[0-9]{10}" required />
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <div class="mb-4">
                            <label for="state" class="block text-gray-700 mb-2">Estado</label>
                            <input type="text" id="state" v-model="formData.state"
                                class="border border-gray-300 p-2 w-full rounded" required />
                        </div>
                        <div class="mb-4">
                            <label for="marketSector" class="block text-gray-700 mb-2">Sector de mercado</label>
                            <input type="text" id="marketSector" v-model="formData.marketSector"
                                class="border border-gray-300 p-2 w-full rounded" required />
                        </div>
                        <div class="mb-4">
                            <label for="piecesQuantity" class="block text-gray-700 mb-2">Cantidad de piezas</label>
                            <input type="number" id="piecesQuantity" v-model="formData.piecesQuantity"
                                class="border border-gray-300 p-2 w-full rounded" min="1" required />
                        </div>
                    </div>
                    <div>
                        <label class="block text-gray-700 mb-2 mt-8">¿Cómo fue que nos conociste?</label>
                        <div class="flex flex-col">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                                <label class="mb-2">
                                    <input type="radio" name="origin" value="Google" v-model="formData.origin"
                                        class="mr-2" required /> Google
                                </label>
                                <label class="mb-2">
                                    <input type="radio" name="origin" value="Linkedin" v-model="formData.origin"
                                        class="mr-2" /> Linkedin
                                </label>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                                <label class="mb-2">
                                    <input type="radio" name="origin" value="Facebook" v-model="formData.origin"
                                        class="mr-2" /> Facebook
                                </label>
                                <label class="mb-2">
                                    <input type="radio" name="origin" value="Instagram" v-model="formData.origin"
                                        class="mr-2" /> Instagram
                                </label>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                                <label class="mb-2">
                                    <input type="radio" name="origin" value="Recomendacion" v-model="formData.origin"
                                        class="mr-2" /> Recomendación
                                </label>
                                <label class="mb-2">
                                    <input type="radio" name="origin" value="Otro" v-model="formData.origin"
                                        class="mr-2" /> Otro
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-4">
                    <label for="message" class="block text-gray-700 mb-2">Mensaje</label>
                    <textarea id="message" v-model="formData.message" class="border border-gray-300 p-2 w-full rounded"
                        rows="4" required></textarea>
                </div>
                <div class="flex justify-end">
                    <button type="submit" class="bg-primary text-white py-1 px-8 hover:bg-blue-700">Enviar</button>
                </div>
            </form>
        </section>
        <section class="w-full">
            <img :src="buttomImage" width="300">
        </section>
    </section>
</template>



<style scoped>
.carousel-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.carousel {
  display: flex;
  overflow: hidden;
  width: 80%;
  margin: auto;
}

.carousel-item {
  flex: 0 0 20%;
  margin: 0 10px;
  transition: transform 0.3s ease-in-out;
  position: relative;
}

.carousel-item img {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out;
}

.carousel-item img.zoomed {
  transform: scale(1.2); /* Zoom effect */
}




.custom-padding{
    padding: 5rem;
}

@media (max-width: 768px) {
    .custom-padding{
        padding: 1rem;
    }
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
  height: 100vh; /* Ocupa el 100% de la altura de la ventana de visualización */
  padding: 20px; /* Ajusta el relleno si es necesario */
  box-sizing: border-box; /* Incluye el relleno en el tamaño total del contenedor */
}


</style>