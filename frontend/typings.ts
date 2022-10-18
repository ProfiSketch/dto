import { Protoframe } from 'protoframe'

import { AbsolutePoint2d, AbsolutePoint3d } from '../shared/point'
import { File2dContent, File3d } from '../shared/file'
import { RequestResponse } from '../shared/request'

import { ContainerConnection2d, ContainerConnection3d, Port2d, UUID } from '..'

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
        ports?: Array<Port2d>
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
    body: { elems: Array<ContainerConnection2d> }
  }

  elemsAreDisconnected: {
    body: { elems: Array<ContainerConnection2d> }
  }

  elemsAreDeleted: {
    body: { ids: Array<UUID> }
  }

  elemsAreRestored: {
    body: { ids: Array<UUID> }
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
        connections?: Array<ContainerConnection3d>
      }>
    }
    response: RequestResponse
  }

  moveObjects: {
    body: {
      objects: Array<{
        id: UUID
        connections?: Array<ContainerConnection3d>
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
