import React, { ReactNode } from 'react'
import { Dialog, DialogContent } from '../ui/dialog'

export const CustomModal = ({
  children,
  isOpen,
}: {
  children: ReactNode
  isOpen: boolean
}) => {
  return (
    <Dialog open={isOpen}>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  )
}
