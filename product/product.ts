import { UUID } from '../lib'
import { VersionisedURL } from '../shared/common'

export interface Product {
  pk: UUID
  fk_catalog: UUID
  content_url: VersionisedURL
}
