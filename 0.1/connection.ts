import {
  PortAddress,
  UUID,
  RelativeMultiPoint,
  RelativePoint2d,
  RelativePoint3d,
} from '..'

import { Port_0_1 } from './port'
import { Versionised_0_1 } from './_version'

/*

Connection -- сущность, отвечающая за связь двух БИМ контейнеров

Connection имеет два контакта (Contact), каждый из которых 
либо совпадает с портом БИМ контейнера (Port, имеет адрес),
либо является просто относительной точкой (адрес не определен)

Между двумя контактами располагается Edge -- виртуальная линия,
которая отображается на 2д схеме и 3д модели. Может вырождаться в точку


# Connection (соединение)

Нами рассмотрены два варианта реализации процесса соединения

## Без использования виртуальных сущностей

Соединение двух объектов происходит с помощью соединителя

Например, насос + насос. Могут быть соединены с помощью трубы.

Таким образом, в роли соединителя выступает сама труба.

Итого, соединение описывается как бы тремя сущностями, насосом, трубой, и вторым насосом.

## Соединение с использованием виртуальных соединений

С точки зрения такого подхода, соединение -- это не объект, а факт соединения. Таким образом, оно является виртуальным по своей сути.

Таким образом, группа насос-труба-насос содержит ещё два соединителя (Connection). Таким образом, цепочка выглядит как

контейнер (насос) - connection - контейнер - connection - контейнер (насос)

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

export type ConnectionEdgeType_0_1 = 'straight' | 'spline' | 'segmented'

//

interface ContainerConnection<T> {
  from: {
    id: UUID
    port?: PortAddress
    contact?: T
  }
  to: {
    id: UUID
    port?: PortAddress
    contact?: T
  }
  type?: ConnectionEdgeType_0_1
}

export type ContainerConnection2d_0_1 = ContainerConnection<RelativePoint2d>

export type ContainerConnection3d_0_1 = ContainerConnection<RelativePoint3d>
