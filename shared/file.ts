import { MimeType2d, MimeType3d } from './mime'

export type File2dContent = Blob

export interface File2d extends File {
  mime: MimeType2d
  blob: File2dContent
}

export type File3dContent = Blob

export interface File3d extends File {
  mime: MimeType3d
  blob: File2dContent
}
