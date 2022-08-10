import { Protoframe } from 'protoframe'
import { UUID } from '../typings'

export type ResponseStatus = 'success' | 'warning' | 'error'

export interface Editor2dProtocol extends Protoframe {
  setCellsSelected: {
    body: { ids: UUID[] }
    response: { status: ResponseStatus; description: string }
  }
  cellsAreSelected: {
    body: { ids: UUID[] }
  }
}
