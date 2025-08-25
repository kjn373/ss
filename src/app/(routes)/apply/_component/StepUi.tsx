import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

export const MultipleSteps = ({
  activeIndex,
  steps,
  completedIndex,
}: {
  activeIndex: number
  steps: number
  completedIndex: number[]
}) => {
  return (
    <div className="flex gap-x-3 w-full justify-center ">
      {Array.from({ length: steps }).map((_, i) => (
        <StepUi
          key={i}
          isActive={i === activeIndex}
          isCompleted={completedIndex.includes(i)}
        />
      ))}
    </div>
  )
}

export const StepUi = ({
  isActive,
  isCompleted,
}: {
  isActive: boolean
  isCompleted: boolean
}) => {
  return (
    <div className="flex items-center gap-x-3 w-full">
      <div
        className={cn('size-6 bg-white rounded-full', {
          ' border border-primary  p-1 transition-all duration-500': isActive,
        })}
      >
        <div
          className={cn(
            'bg-primaryLight rounded-full w-full h-full aspect-square ',
            {
              'bg-primary transition-all duration-500': isActive,
              'bg-primary flex justify-center items-center': isCompleted,
            }
          )}
        >
          {isCompleted && (
            <Image
              src={'/admission/check.svg'}
              alt="check icon"
              width={16}
              height={16}
              className="size-4"
            />
          )}
        </div>
      </div>
      <span
        className={cn(
          'md:min-w-[62px] w-full  h-1 bg-primaryLight rounded-full',
          {
            'bg-primary transition-all duration-500': isActive,
          }
        )}
      />
    </div>
  )
}
