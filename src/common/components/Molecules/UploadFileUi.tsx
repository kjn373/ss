import { IFileMetadata } from '@/common/interface/type'
import { cn } from '@/common/utils/utils'
import { CircleAlert } from 'lucide-react'
import Image from 'next/image'
import { PiTrashSimpleFill } from 'react-icons/pi'
import { ActionToolTips } from '../Atom/CustomToolTip'

export const UploadedFileUi = ({
  name,
  size,
  onDelete,
  isError,
  message,
}: IFileMetadata & {
  index: number
  onDelete: () => void
  isError: boolean
  message?: string
}) => {
  const content = (
    <div
      className={cn(
        'relative border-border border rounded-[12px] p-2 flex justify-between items-center gap-x-12 w-full md:w-[520px]  2xl:w-[560px] ',
        {
          'border-error border ': isError,
        }
      )}
    >
      <div className="flex gap-x-4 items-center">
        <Image
          src={'/admission/pdf.png'}
          width={32}
          height={32}
          alt="pdf icon"
        />
        <div className="flex flex-col gap-y-1 ">
          <span className="font-workSans font-medium text-[14px] leading-4 text-heading line-clamp-1 break-all   max-w-[140px] 2lg:max-w-[245px] ">
            {name}
          </span>
          <span className="text-body font-workSans text-[14px] leading-4 font-normal">
            {size} MB
          </span>
        </div>
      </div>
      <div className="flex items-center">
        {isError && (
          <div className="flex items-center w-[140px] gap-x-1">
            <CircleAlert className={cn('size-4 text-error')} />
            <span className="text-error font-workSans font-normal text-[14px] leading-4">
              Upload Error
            </span>
          </div>
        )}

        <PiTrashSimpleFill
          onClick={onDelete}
          className="text-body size-[16px] hover:text-error cursor-pointer "
        />
      </div>
    </div>
  )

  return isError ? (
    <ActionToolTips label={message ? message : ''} side="top">
      {content}
    </ActionToolTips>
  ) : (
    <>{content}</>
  )
}
