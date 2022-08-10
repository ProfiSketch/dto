import { ProtoframeDescriptor } from 'protoframe'

import { UUID } from '../typings'
import { ResponseStatus } from './typings'

const Editor2DProtocol: ProtoframeDescriptor<{
  setCellsSelected: {
    body: { ids: UUID[] }
    response: { status: ResponseStatus; description?: string }
  }
  cellsAreSelected: {
    body: { ids: UUID[] }
  }
}> = { type: 'editor2D' }

export default Editor2DProtocol
