import React, { useMemo } from 'react'
import { Button } from './Atom/Button'
import { scrollToTop } from './ScrollToTop'

export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}: {
  totalCount: number
  pageSize: number
  siblingCount: number
  currentPage: number
}) => {
  const range = (start: number, end: number) => {
    const length = end - start + 1
    return Array.from({ length }, (_, idx) => idx + start)
  }

  const paginationRange = useMemo(() => {
    const Dots = <DotUi />
    const totalPageCount = Math.ceil(totalCount / pageSize)

    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5
    /*
      Case 1:
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount)
    }

    /*
          Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
      */
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    )

    /*
        We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
      */
    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

    const firstPageIndex = 1
    const lastPageIndex = totalPageCount

    /*
          Case 2: No left dots to show, but rights dots to be shown
      */
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount
      const leftRange = range(1, leftItemCount)

      return [...leftRange, Dots, totalPageCount]
    }

    /*
          Case 3: No right dots to show, but left dots to be shown
      */
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount
      const rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      )
      return [firstPageIndex, Dots, ...rightRange]
    }

    /*
          Case 4: Both left and right dots to be shown
      */
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex)
      return [firstPageIndex, Dots, ...middleRange, Dots, lastPageIndex]
    }
  }, [totalCount, pageSize, siblingCount, currentPage])

  return paginationRange
}

export const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage = 1,
  pageSize,
}: {
  onPageChange: (x: string | number) => void
  totalCount: number
  siblingCount?: number
  currentPage: number
  pageSize: number
}) => {
  const paginationRange: (React.JSX.Element | number)[] | undefined =
    usePagination({
      currentPage,
      totalCount,
      siblingCount,
      pageSize,
    })

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null
  }

  const onNext = () => {
    setTimeout(() => {
      scrollToTop(window.innerWidth < 1270 ? true : false)
    }, 100)

    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    setTimeout(() => {
      scrollToTop(window.innerWidth < 1270 ? true : false)
    }, 100)
    onPageChange(currentPage - 1)
  }

  const lastPage =
    paginationRange && paginationRange[paginationRange.length - 1]

  return (
    <ul
      style={{
        boxShadow: '3px 3.80528px 3.80528px rgba(255, 255, 255, 0.2)',
      }}
      className="h-[52px]  w-fit rounded-[24.73px] bg-dashboardColorPrimaryLight flex items-center justify-center gap-4 px-6"
    >
      {/* Left navigation arrow */}
      <Button
        variant={'outline'}
        onClick={onPrevious}
        disabled={currentPage === 1 ? true : false}
        className="hover:bg-primary p-3 rounded-[12px] text-heading font-medium leading-4 text-[16px] disabled:opacity-40 h-10 "
      >
        Previous Page
      </Button>

      <div className="items-center gap-1 hidden lg:flex">
        {paginationRange?.map(
          (pageNumber: string | number | React.JSX.Element) => {
            // If the pageItem is a DOT, render the DOTS unicode character
            if (pageNumber === '.') {
              return (
                <li className="rounded-[12px] p-3 h-10" key={'unique id'}>
                  ...
                </li>
              )
            }

            // Render our Page Pills

            return (
              <li
                key={'unique id'}
                onClick={() => {
                  if (typeof pageNumber === 'number') {
                    scrollToTop()
                    onPageChange(pageNumber)
                  }
                }}
                className={`${
                  currentPage === pageNumber
                    ? ' text-white  bg-primary'
                    : 'text-dashboardColorWhite border border-border'
                } font-medium font-workSans text-[16px] leading-4  flex items-center justify-center size-10 rounded-[12px] cursor-pointer h-10`}
              >
                {pageNumber}
              </li>
            )
          }
        )}
      </div>
      {/*  Right Navigation arrow */}
      <Button
        onClick={onNext}
        variant={'outline'}
        disabled={currentPage === lastPage ? true : false}
        className="hover:bg-primary p-3 rounded-[12px] text-heading font-medium leading-4 text-[16px] disabled:opacity-40 h-10"
      >
        Next Page
      </Button>
    </ul>
  )
}

const DotUi = () => {
  return <span className="rounded-[12px] p-3 border border-border">...</span>
}
