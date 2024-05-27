import { HeroHeaderProps } from '@/types/heroHeaderType'
import Image from 'next/image'

const HeroHeader: React.FC<HeroHeaderProps> = ({ data }) => {
  const headerData = data?.page.heroheader
  const headerImages = headerData.imageHeader.node

  const headerTitle = headerData.headTitle
  const headerSubtitle = headerData.descriptionArea

  return (
    <div className="relative w-full h-[700px]">
      <Image
        className="w-full h-full object-cover"
        src={headerImages.sourceUrl}
        alt={headerImages.altText}
        priority
        fill
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-indigo-900 text-5xl font-bold font-Montserrat drop-shadow-md">
          {headerTitle}
        </h1>
        <p className="text-indigo-900 text-2xl mt-2 font-Satisfy drop-shadow-md">
          {headerSubtitle}
        </p>
      </div>
    </div>
  )
}

export default HeroHeader
