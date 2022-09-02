import { Point2d, Point3d } from './point'

export type Port2d = {
  name: string
  relative_coords: Point2d
}

export type Port3d = {
  name: string
  relative_coords: Point3d
}

export type Port = {
  _2d?: Port2d
  _3d?: Port3d
}
