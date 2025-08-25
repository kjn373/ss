import { ImageWithPlaceholder } from '@/common/components/ImageWithPlaceholder'
import Link from 'next/link'
import { BannerData } from '../../notice/_interface/type'

export const SidebarAd = ({ banner }: { banner?: BannerData }) => {
  return (
    <div draggable={false} className="md:size-[397px]">
      {banner ? (
        <Link href={banner.link ? banner.link : ''} target="_blank">
          <ImageWithPlaceholder
            src={banner?.image?.key}
            width={397}
            height={397}
            alt="admission"
            className="size-[300px] lg:size-[397px]"
          />
        </Link>
      ) : null}
    </div>
  )
}
