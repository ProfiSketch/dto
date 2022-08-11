import { Protoframe } from 'protoframe'
import { UUID } from '../typings'
import { MimeType3d } from './mime'

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

  /* Events */
  elemIsAdded: {
    body: { id: UUID; ports: SchemeElemPort[] }
  }
  elemsAreSelected: {
    body: { ids: UUID[] }
  }
  elemsAreConnected: {
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
  loadObjects: {
    body: { file: File3d; id: UUID }
    response: RequestResponse
  }
  selectObjects: {
    body: { ids: UUID[] }
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
    body: { id: UUID }
  }
  objectsAreSelected: {
    body: { ids: UUID[] }
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
