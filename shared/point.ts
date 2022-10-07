import { DecimalPercent } from './numbers'

export type AbsolutePoint2d = {
  x: number
  y: number
}

export type RelativePoint2d = {
  x: DecimalPercent
  y: DecimalPercent
}

export type AbsolutePoint3d = {
  x: number
  y: number
  z: number
}

export type RelativePoint3d = {
  x: DecimalPercent
  y: DecimalPercent
  z: DecimalPercent
}

export type AbsoluteMultiPoint = {
  _2d?: AbsolutePoint2d
  _3d?: AbsolutePoint3d
}

export type RelativeMultiPoint = {
  _2d?: RelativePoint2d
  _3d?: RelativePoint3d
}
