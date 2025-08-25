'use client'
import { ITestimonialData } from '@/app/(routes)/testimonials/_interface/testimonial'
import { CloseButton } from '@/common/components/Atom/CloseButton'
import { ImageWithPlaceholder } from '@/common/components/ImageWithPlaceholder'
import { CustomModal } from '@/common/components/Molecules/Modal'
import { Dispatch, SetStateAction } from 'react'

const TestimonailModal = ({
  setOpen,
  card, // Accept card data
}: {
  setOpen: Dispatch<SetStateAction<boolean>>
  card: ITestimonialData // Define the card type
}) => {
  const handleCloseModal = () => {
    setOpen(false) // Close the modal
  }

  return (
    <CustomModal isOpen={true}>
      <div>
        <div className="bg-white flex flex-col relative rounded-xl max-w-[800px]">
          <div className="flex justify-between items-center bg-background px-6 py-4 rounded-t-xl">
            <h1 className="font-poppins text-xl font-semibold">{card.name}</h1>
            <CloseButton className="relative" handleClick={handleCloseModal} />
          </div>
          <div
            className="p-6 font-workSans font-[400] text-base leading-[27.2px] tracking-tight text-heading"
            dangerouslySetInnerHTML={{ __html: card.description }}
          ></div>
          <div className="px-6 py-6 flex gap-4 border-border-2 border-t-[1px] bottom-0">
            <ImageWithPlaceholder
              // src={card.image ? card.image.key : undefined}
              src={card.image.key}
              width={56}
              height={56}
              alt="stud"
              className="rounded-full w-14 h-14 object-cover"
            />
            <div className="flex flex-col justify-center space-y-[8px]">
              <h1 className="font-poppins font-medium text-base leading-4 text-heading">
                {card.name}
              </h1>
              <p className="text-sm font-workSans font-[400] text-body leading-4">
                {card.position}
              </p>
            </div>
          </div>
        </div>
      </div>
    </CustomModal>
  )
}

export default TestimonailModal
