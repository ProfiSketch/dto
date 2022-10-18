import { RelativeMultiPoint, RelativePoint2d, RelativePoint3d } from '..'

/*

Port -- фиксированное место БИМ контейнера, к которому можно прикрепить Connection

Отнаследован от RelativeMultiPoint.

В отличие от точки с относительными координатами Port обладает
конкретным именным указателем -- адресом PortAddress

*/

export interface Port_0_1 extends RelativeMultiPoint {
  address: PortAddress_0_1
}

export interface Port2d_0_1 extends RelativePoint2d {
  address: PortAddress_0_1
}

export interface Port3d_0_1 extends RelativePoint3d {
  address: PortAddress_0_1
}

// Что-то в духе P1, T10 и т.д.

export type PortAddress_0_1 = string
