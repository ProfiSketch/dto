import { UUID } from '../lib'

import { URL, VersionisedURL } from '../shared/common'
import { TimeInfo } from '../shared/time'

export interface Product extends TimeInfo {
  pk: UUID

  fk_catalog: UUID
  fk_structure: UUID
  fk_vendor: UUID

  name: string

  data: {
    content: VersionisedURL
    specifications: Record<string, string>
    prev_image: URL
    price_avg: number
  }

  // reviews: Array<Review>
  // prices: Array<Price>
}
