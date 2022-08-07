import { ProtoframeDescriptor } from 'protoframe'

type ResponseStatus = 'success' | 'warning' | 'error'

const editor2DProtocol: ProtoframeDescriptor<{
  setCellsSelected: {
    body: { ids: UUID[] }
    response: { status: ResponseStatus; description: string }
  }
  cellsAreSelected: {
    body: { ids: UUID[] }
  }
}> = { type: 'editor2D' }

export default editor2DProtocol
