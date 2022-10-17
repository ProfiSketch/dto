import { MimeType2d, MimeType3d } from './mime'

export type File2dContent = Blob

export interface File2d extends File {
  type: MimeType2d
}

export type File3dContent = Blob

export interface File3d extends File {
  type: MimeType3d
}
