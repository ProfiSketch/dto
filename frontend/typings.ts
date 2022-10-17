import { Protoframe } from 'protoframe'

import { AbsolutePoint2d, AbsolutePoint3d } from '../shared/point'
import { File2dContent, File3d } from '../shared/file'
import { RequestResponse } from '../shared/request'
import { UUID } from '../shared/id'

import { Connection_0_1, ConnectionContact_0_1 } from '../0.1/connection'
import { Port_0_1 } from '../0.1/port'
import { PortAddress, RelativePoint3d } from '..'

export interface Editor2dProtocol extends Protoframe {
  /* Tasks */

  busCheck: {
    body: {}
    response: RequestResponse<{ ver: string }>
  }

  getScheme: {
    body: {}
    response: RequestResponse<{ blob: File2dContent }>
  }

  // 2d scheme elements

  selectElems: {
    body: { ids: Array<UUID> }
    response: RequestResponse
  }

  deleteElems: {
    body: { ids: Array<UUID> }
    response: RequestResponse
  }

  updateElemUuid: {
    body: { from: string; to: UUID }
    response: RequestResponse
  }

  moveElems: {
    body: { elems: Array<{ id: UUID; position: AbsolutePoint2d }> }
    response: RequestResponse
  }

  /* Events */

  elemsAreAdded: {
    body: {
      elems: Array<{
        id: UUID
        ports?: Array<Port_0_1>
        position: AbsolutePoint2d
      }>
    }
  }

  elemsAreSelected: {
    body: { ids: Array<UUID> }
  }

  elemsAreMoved: {
    body: { elems: Array<{ id: UUID; position: AbsolutePoint2d }> }
  }

  elemsAreConnected: {
    body: { elems: Array<ConnectionContact_0_1> }
  }

  elemsAreDisconnected: {
    body: { elems: Array<ConnectionContact_0_1> }
  }

  elemsAreDeleted: {
    body: { ids: Array<UUID> }
  }

  elemsAreRestored: {
    body: { ids: Array<UUID> }
  }
}

export interface Container3dConnection {
  from: {
    port?: PortAddress
    contact?: RelativePoint3d
  }
  to: {
    uuid: UUID
    port?: PortAddress
    contact?: RelativePoint3d
  }
}

export interface Editor3dProtocol extends Protoframe {
  /* Tasks */

  busCheck: {
    body: {}
    response: RequestResponse<{ ver: string }>
  }

  loadScene: {
    body: { file: File3d }
    response: RequestResponse
  }

  getScene: {
    body: {}
    response: RequestResponse<{ blob: Blob }>
  }

  // 3d model objects

  loadObjects: {
    body: {
      objects: {
        file: File3d
        id: UUID
        position?: AbsolutePoint3d
      }[]
    }
    response: RequestResponse
  }

  selectObjects: {
    body: {
      objects: Array<{
        id: UUID
        connections?: Array<Container3dConnection>
      }>
    }
    response: RequestResponse
  }

  moveObjects: {
    body: {
      objects: Array<{
        id: UUID
        connections?: Array<Container3dConnection>
        position: AbsolutePoint3d
      }>
    }
    response: RequestResponse
  }

  deleteObjects: {
    body: { ids: Array<UUID> }
    response: RequestResponse
  }

  updateObjectUuid: {
    body: { from: string; to: UUID }
    response: RequestResponse
  }

  /* Events */

  objectIsAdded: {
    body: { id: UUID; position: AbsolutePoint3d }
  }

  objectsAreSelected: {
    body: { ids: Array<UUID> }
  }

  objectsAreMoved: {
    body: { objects: Array<{ id: UUID; position: AbsolutePoint3d }> }
  }

  //   TODO: implement later
  //   objectsAreConnected: {
  //     body: { elems: Array<{ id: UUID; port: SchemeElemPort }> }
  //   }

  objectsAreDeleted: {
    body: { ids: Array<UUID> }
  }

  objectsAreRestored: {
    body: { ids: Array<UUID> }
  }
}
