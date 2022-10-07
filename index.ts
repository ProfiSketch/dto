/* Shared */

import { UUID } from './shared/id'
import { DecimalPercent } from './shared/numbers'
import {
  AbsolutePoint2d,
  AbsolutePoint3d,
  AbsoluteMultiPoint,
  RelativePoint2d,
  RelativePoint3d,
  RelativeMultiPoint,
} from './shared/point'
import { ResponseStatus, RequestResponse } from './shared/request'

export type {
  UUID,
  DecimalPercent,
  ResponseStatus,
  RequestResponse,
  AbsolutePoint2d,
  AbsolutePoint3d,
  AbsoluteMultiPoint,
  RelativePoint2d,
  RelativePoint3d,
  RelativeMultiPoint,
}

/* Mime types */

import {
  FileExtension2d,
  FileExtension3d,
  MimeType2d,
  MimeType3d,
} from './shared/mime'

export type { FileExtension2d, FileExtension3d, MimeType2d, MimeType3d }

import {
  FileExtensionMimeType2d_Map,
  FileExtensionMimeType3d_Map,
  MimeTypeFileExtension2d_Map,
  MimeTypeFileExtension3d_Map,
  MimeTypes2d_Map,
  MimeTypes3d_Map,
} from './shared/mime'

export {
  FileExtensionMimeType2d_Map,
  FileExtensionMimeType3d_Map,
  MimeTypeFileExtension2d_Map,
  MimeTypeFileExtension3d_Map,
  MimeTypes2d_Map,
  MimeTypes3d_Map,
}

/* Files */

import { File2d, File3d, File2dContent, File3dContent } from './shared/file'

export type { File2d, File3d, File2dContent, File3dContent }

/* 0.1 */

import { Connection_0_1, ConnectionContact_0_1 } from './0.1/connection'
export type {
  Connection_0_1 as Connection,
  ConnectionContact_0_1 as ConnectionContact,
}

import { Model3dUserData_0_1 } from './0.1/model3d'
export type { Model3dUserData_0_1 as Model3dUserData }

import { Port_0_1, PortAddress_0_1 } from './0.1/port'
export type { Port_0_1 as Port, PortAddress_0_1 as PortAddress }

/* Protoframe protocols and descriptors */

import { Editor2dProtocol, Editor3dProtocol } from './frontend/typings'
export type { Editor2dProtocol, Editor3dProtocol }

import { Editor2dDescriptor } from './frontend/2d-editor'
import { Editor3dDescriptor } from './frontend/3d-editor'

export { Editor2dDescriptor, Editor3dDescriptor }
