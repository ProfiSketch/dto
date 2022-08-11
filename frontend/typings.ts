import { Protoframe } from 'protoframe'
import { UUID } from '../typings'

export type ResponseStatus = 'success' | 'warning' | 'error'

type RequestResponse = { status: ResponseStatus; description?: string }

export type SchemeElemPort = string | number

export interface Editor2dProtocol extends Protoframe {
  /* Requests */
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
    body: { ports: SchemeElemPort[] }
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
  //   What about Ctrl + Z ?
}
