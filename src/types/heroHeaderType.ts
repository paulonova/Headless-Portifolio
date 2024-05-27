// Types.ts
export interface HeroSliderImage {
  headerImages: {
    sourceUrl: string
    altText: string
  }
}

export interface HeroHeaderData {
  page: {
    heroheader: {
      headTitle: string
      descriptionArea: string
      imageHeader: {
        node: {
          sourceUrl: string
          altText: string
        }
      }
    }
  }
}

export interface HeroHeaderProps {
  data: HeroHeaderData
}

export interface SlideImages {
  altText: string
  srcSet: string
}

export interface HeroSlider {
  headTitle: string
  descriptionArea: string
  imageGallery: {
    nodes: SlideImages[]
  }
}

export interface Page {
  heroslider: HeroSlider
}
