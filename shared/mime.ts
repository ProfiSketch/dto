/* 2D */

export type FileExtension2d = 'xml' | 'drawio'

export const MimeTypes2d_Map = {
  // FIXME: provide appropriate mime type for drawio
  DRAWIO: 'application/xml',
  XML_APP: 'application/xml',
  XML_TEXT: 'text/xml',
} as const

type MimeTypes2d_MapKeys = keyof typeof MimeTypes2d_Map
export type MimeType2d = typeof MimeTypes2d_Map[MimeTypes2d_MapKeys]

export const MimeTypeFileExtension2d_Map: Record<MimeType2d, FileExtension2d> =
  {
    [MimeTypes2d_Map.DRAWIO]: 'drawio',
    [MimeTypes2d_Map.XML_APP]: 'xml',
    [MimeTypes2d_Map.XML_TEXT]: 'xml',
  }

export const FileExtensionMimeType2d_Map: Record<FileExtension2d, MimeType2d> =
  {
    drawio: MimeTypes2d_Map.DRAWIO,
    xml: MimeTypes2d_Map.XML_APP,
  }

/* 3D */

export type FileExtension3d = 'gltf' | 'glb'

export const MimeTypes3d_Map = {
  GLTF_BIN: 'model/gltf-binary',
  GLTF_JSON: 'model/gltf+json',
  GLTF: 'model/gltf',
} as const

type MimeTypes3d_MapKeys = keyof typeof MimeTypes3d_Map
export type MimeType3d = typeof MimeTypes3d_Map[MimeTypes3d_MapKeys]

export const MimeTypeFileExtension3d_Map: Record<MimeType3d, FileExtension3d> =
  {
    [MimeTypes3d_Map.GLTF_BIN]: 'glb',
    [MimeTypes3d_Map.GLTF_JSON]: 'gltf',
    [MimeTypes3d_Map.GLTF]: 'gltf',
  } as const

export const FileExtensionMimeType3d_Map: Record<FileExtension3d, MimeType3d> =
  {
    glb: MimeTypes3d_Map.GLTF_BIN,
    gltf: MimeTypes3d_Map.GLTF,
  } as const
