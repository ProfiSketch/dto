import { URL } from '../shared/common'

export interface Review {
  rating: number
  text: string
  header?: string
  user_image: URL
}
