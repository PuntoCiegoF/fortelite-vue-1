// src/constants/segments/wines-liquors.js  (o el path donde lo tengas)

const WINES_LIQUORS = {
  bannerTop: {
    image: 'https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/iStock-1495400812-scaled.jpg',
    text: 'Eleva el valor de tu marca.'
  },

  // Título temporal
  title: 'ANIMALES',

  // Texto arriba de la grilla (dejamos aviso mientras no hay imágenes del segmento)
  segmentImages: [
    {
      type: 'paragraph',
      text: '(Se agregarán imágenes correspondientes)'
    }
    // Cuando tengas las imágenes de ANIMALES, añade aquí los grupos { columns, images: [...] }
  ],

  // Texto + lista como en tu referencia
  infoList: {
    showBar: true,
    intro: `Etiquetas libres de alérgenos y con materiales seguros para productos farmacéuticos y alimentarios veterinarios. Alta adherencia en envases plásticos para accesorios y juguetes, con resistencia a temperaturas variables y ambientes húmedos.`,
    listTitle: 'Categorías:',
    list: [
      'Medicina veterinaria',
      'Alimento',
      'Juguetes y accesorios',
      'Productos de higiene',
    ],
  },

  // Dejamos los acabados como ya los tenías
  finishes: {
    showBar: true,
    list: [
      { text: 'Laminado mate', image: 'https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/mate.webp' },
      { text: 'Laminado brillante', image: 'https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/brillante-4.jpg' },
      { text: 'Hot foil', image: 'https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/hot-foil-2.jpg' },
      { text: 'Cold foil', image: 'https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/cold-foil-6.jpg' },
      { text: 'Barniz UV', image: 'https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/barniz-uv-6.jpg' },
      { text: 'Emboss', image: 'https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/emboss-6.jpg' },
      { text: 'Deboss', image: 'https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/deboss-2-6.webp' },
    ],
  }
};

export default WINES_LIQUORS;
