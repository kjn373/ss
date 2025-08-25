'use client'

import { ReactNode, useEffect } from 'react'
import Modal from 'react-modal'

export const CustomModal = ({
  children,
  isOpen,
}: {
  children: ReactNode
  isOpen: boolean
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }

    return () => {
      document.body.style.overflowY = 'auto'
    }
  }, [isOpen])
  const ModalCustomStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: '0px solid white',
      background: 'transparent',
    },
  }

  return (
    <Modal style={ModalCustomStyles} isOpen={isOpen} ariaHideApp={false}>
      {children}
    </Modal>
  )
}
