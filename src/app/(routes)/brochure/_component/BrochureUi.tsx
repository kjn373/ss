'use client'

import { CustomModal } from '@/common/components/Molecules/Modal'
import { useState } from 'react'
import { IBrochureItem } from '../interface/brochureType'
import { BrochureCardUi } from './BrochureCardUi'
import { PdfViewerModal } from './PdfViewerModal'

export const BrochureUi = ({ data }: { data: IBrochureItem[] | undefined }) => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [pdfSrc, setPdfSrc] = useState<string | null>(null)

  return (
    <>
      <div className="flex flex-col  gap-y-10 2lg:items-center">
        <p className="text-body font-workSans text-[16px] leading-[27.2px] font-normal text-center 2lg:max-w-[713px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat cum
          possimus consectetur omnis aliquid. Sit dolorum itaque nihil modi nisi
          qui tempora. Itaque nostrum nulla deserunt assumenda aut adipisci ex.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque rerum
          adipisci nemo illo, ducimus quas alias odit assumenda, est facere
          quos, nam voluptatem quo? Rem sunt voluptatum fuga ipsam iste.
        </p>
        <div className="grid  2lg:grid-cols-3 gap-6">
          {data &&
            data.map((notice) => (
              <BrochureCardUi
                data={notice}
                key={notice.id}
                handleBrochureClick={() => {
                  setOpenModal(true)
                  setPdfSrc(
                    `${process.env.NEXT_PUBLIC_IMAGE_URL}/${notice.file.key}`
                  )
                }}
              />
            ))}
        </div>
      </div>
      {openModal && (
        <CustomModal isOpen={openModal}>
          <PdfViewerModal setOpen={setOpenModal} src={pdfSrc} />
        </CustomModal>
      )}
    </>
  )
}
