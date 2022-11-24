import { Product } from '../product'

const productExample: Product = {
  date_create: '2022-11-15',
  date_update: '2022-11-15',
  date_delete: '2022-11-15',
  data: {
    specifications: {},
    content: 'https://nc.profiskecth.com/file_id?ver=123',
    prev_image: 'https://nc.profiskecth.com/file_id',
    price_avg: 558.76
  },
  fk_catalog: 'uuid',
  fk_structure: 'uuid',
  fk_vendor: 'uuid',
  name: 'Product name',
  pk: 'uuid',
}

export { productExample }
