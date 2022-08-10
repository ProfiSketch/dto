import { ProtoframeDescriptor } from 'protoframe'

type ResponseStatus = 'success' | 'warning' | 'error'
type UUID = string

const Editor2DProtocol: ProtoframeDescriptor<{
  setCellsSelected: {
    body: { ids: UUID[] }
    response: { status: ResponseStatus; description: string }
  }
  cellsAreSelected: {
    body: { ids: UUID[] }
  }
}> = { type: 'editor2D' }

export default Editor2DProtocol
