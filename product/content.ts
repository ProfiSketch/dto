import { Price } from './price'
import { Review } from './review'
import { Figure2d, Model3d, File } from './file'
import { Spec } from './spec'
import { URL } from '../shared/common'

export type Revision = string

export interface ProductContentJSON {
  rev: Revision

  specifications: Array<Spec>
  prices: Array<Price>
  reviews: Array<Review>

  thumbnail: URL
  images: Array<URL>

  models: Array<Model3d>
  figures: Array<Figure2d>
  files: Array<File>
}
