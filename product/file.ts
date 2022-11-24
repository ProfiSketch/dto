import { Port3d_0_1 } from '../0.1/port'
import { ProductIFC } from './ifc'

export type CSVDocument = string

export type GLTFDocument = string

export type Image = 'webp' | 'png' | 'jpg' | 'svg' | 'tiff'

// 1D файлы

export type Product1dBom = CSVDocument

export type Product1dAttributes = CSVDocument

export type Product1dThumbnail = 'webp'

export type Product1dDoc = 'pdf'

export type Product1dIfc = ProductIFC

// 2D фигуры

export type Product2dFigureScheme = XMLDocument

export type Product2dFigurePlan = XMLDocument

export type Product2dFigureSection = XMLDocument

export type Product2dFigureAxonometry = XMLDocument

export type Product2dDraft = 'dwg' | 'svg'

// 3D секция

export type Product3dModel = GLTFDocument

export type Product3dOtherModels = 'ifc' | 'fbx' | 'dwg'

export type Product3dPort = Port3d_0_1
