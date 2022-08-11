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
