import { UUID } from '../shared/id'
import { RelativeMultiPoint } from '../shared/point'
import { Port_0_1 } from './port'
import { Versionised_0_1 } from './_version'

/*

Connection -- сущность, отвечающая за связь двух БИМ контейнеров

Connection имеет два контакта (Contact), каждый из которых 
либо совпадает с портом БИМ контейнера (Port, имеет адрес),
либо является просто относительной точкой (адрес не определен)

Между двумя контактами располагается Edge -- виртуальная линия,
которая отображается на 2д схеме и 3д модели

*/

export interface Connection_0_1 extends Versionised_0_1 {
  contacts: [ConnectionContact_0_1, ConnectionContact_0_1]
  edge: ConnectionEdge_0_1
}

export type ConnectionContact_0_1 = { containerUuid: UUID } & (
  | RelativeMultiPoint
  | Port_0_1
)

interface ConnectionEdge_0_1 extends Versionised_0_1 {
  _2d?: {
    type: ConnectionEdgeType_0_1
  }
  _3d?: {
    type: ConnectionEdgeType_0_1
    // vertices: AbsolutePoint3d[]
  }
}

type ConnectionEdgeType_0_1 =
  | 'straight'
  | 'spline'
  | 'segmented'
  | 'segmentedWithVertices'
