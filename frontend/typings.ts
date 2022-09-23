import { Protoframe } from 'protoframe'
import { UUID } from '../typings'
import { MimeType3d } from './mime'

import { Point2d, Point3d } from '../core/point'
import { Port } from '../core/port'

export type ResponseStatus = 'success' | 'warning' | 'error'

type RequestResponse = { status: ResponseStatus; description?: string }

// TODO: extract SchemeElemPort to 0.1 specs
export type SchemeElemPort = string | number

export interface Editor2dProtocol extends Protoframe {
  /* Tasks */
  selectElems: {
    body: { ids: UUID[] }
    response: RequestResponse
  }
  deleteElems: {
    body: { ids: UUID[] }
    response: RequestResponse
  }
  updateElemUuid: {
    body: { from: string; to: UUID }
    response: RequestResponse
  }
  moveElems: {
    body: { elems: { id: UUID; position: Point2d }[] }
    response: RequestResponse
  }

  /* Events */
  elemsAreAdded: {
    body: { elems: { id: UUID; ports: SchemeElemPort[]; position: Point2d }[] }
  }
  elemsAreSelected: {
    body: { ids: UUID[] }
  }
  elemsAreMoved: {
    body: { elems: { id: UUID; position: Point2d }[] }
  }
  elemsAreConnected: {
    body: { elems: { id: UUID; port: SchemeElemPort }[] }
  }
  elemsAreDisconnected: {
    body: { elems: { id: UUID; port: SchemeElemPort }[] }
  }
  elemsAreDeleted: {
    body: { ids: UUID[] }
  }
  elemsAreRestored: {
    body: { ids: UUID[] }
  }
}

export type File3d = { blob: Blob; mime: MimeType3d; filename: string }

export interface Editor3dProtocol extends Protoframe {
  /* Tasks */

  loadScene: {
    body: { file: File3d }
    response: RequestResponse
  }
  getScene: {
    body: {}
    response: RequestResponse & { blob: Blob }
  }

  //   Objects
  loadObjects: {
    body: {
      objects: {
        file: File3d
        id: UUID
        position?: Point3d
        ports?: Port[]
      }[]
    }
    response: RequestResponse
  }

  selectObjects: {
    body: { objects: { id: UUID; connections?: UUID[] }[] }
    response: RequestResponse
  }
  moveObjects: {
    body: { objects: { id: UUID; connections?: UUID[]; position: Point3d }[] }
    response: RequestResponse
  }
  deleteObjects: {
    body: { ids: UUID[] }
    response: RequestResponse
  }
  updateObjectUuid: {
    body: { from: string; to: UUID }
    response: RequestResponse
  }

  /* Events */

  objectIsAdded: {
    body: { id: UUID; position: Point3d }
  }
  objectsAreSelected: {
    body: { ids: UUID[] }
  }
  objectsAreMoved: {
    body: { objects: { id: UUID; position: Point3d }[] }
  }
  //   TODO: implement later
  //   objectsAreConnected: {
  //     body: { elems: { id: UUID; port: SchemeElemPort }[] }
  //   }
  objectsAreDeleted: {
    body: { ids: UUID[] }
  }
  objectsAreRestored: {
    body: { ids: UUID[] }
  }
}
