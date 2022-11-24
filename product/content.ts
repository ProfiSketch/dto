import { VersionisedURL } from '../shared/common'

export type Revision = string

export interface ProductContent {
  rev: Revision

  ps_1d: {
    // ГОСТ параметры
    bom: VersionisedURL

    // Остальная аттрибутивная информация
    attributes: VersionisedURL

    // Обложка (изображение)
    thumbnail: VersionisedURL

    images: Array<VersionisedURL>

    // Документы - pdf, ...
    docs: Array<VersionisedURL>

    ifc: VersionisedURL
  }

  ps_2d: {
    figures: {
      // Схемы
      schemes: Array<VersionisedURL>

      // Разрезы
      sections: Array<VersionisedURL>

      // Планы
      plans: Array<VersionisedURL>

      // Аксонометрии
      axonometries: Array<VersionisedURL>
    }

    // Чертежи
    drafts: Array<VersionisedURL>
  }

  ps_3d: {
    // Основная модель
    gltf_model: VersionisedURL

    // Дополнительные модели
    other_models: Array<VersionisedURL>

    // Вспомогательная геометрия
    helpers: {
      ports: VersionisedURL
    }
  }
}
