import { ProductContent } from '../content'

const contentExample: ProductContent = {
  rev: '321',

  ps_1d: {
    attributes: 'https://nc.profiskecth.com/file_id?ver=123',
    bom: 'https://nc.profiskecth.com/file_id?ver=123',
    docs: [
      'https://nc.profiskecth.com/file_id?ver=123',
      'https://nc.profiskecth.com/file_id?ver=123',
    ],
    ifc: 'https://nc.profiskecth.com/file_id?ver=123',
    images: [
      'https://nc.profiskecth.com/file_id?ver=123',
      'https://nc.profiskecth.com/file_id?ver=123',
    ],
    thumbnail: 'https://nc.profiskecth.com/file_id?ver=123',
  },

  ps_2d: {
    figures: {
      axonometries: [
        'https://nc.profiskecth.com/file_id?ver=123',
        'https://nc.profiskecth.com/file_id?ver=123',
      ],
      plans: [
        'https://nc.profiskecth.com/file_id?ver=123',
        'https://nc.profiskecth.com/file_id?ver=123',
      ],
      schemes: [
        'https://nc.profiskecth.com/file_id?ver=123',
        'https://nc.profiskecth.com/file_id?ver=123',
      ],
      sections: [
        'https://nc.profiskecth.com/file_id?ver=123',
        'https://nc.profiskecth.com/file_id?ver=123',
      ],
    },
    drafts: [
      'https://nc.profiskecth.com/file_id?ver=123',
      'https://nc.profiskecth.com/file_id?ver=123',
    ],
  },

  ps_3d: {
    gltf_model: 'https://nc.profiskecth.com/file_id?ver=123',
    other_models: [
      'https://nc.profiskecth.com/file_id?ver=123',
      'https://nc.profiskecth.com/file_id?ver=123',
    ],
    helpers: {
      ports: 'https://nc.profiskecth.com/file_id?ver=123',
    },
  },
}

export { contentExample }
