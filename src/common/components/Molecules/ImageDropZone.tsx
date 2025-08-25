'use client'

import { byteToMb, cn } from '@/common/utils/utils'
import React, { useState } from 'react'
import { ErrorComponent } from '../Atom/Input'
import { FormikErrors } from 'formik'
import {
  ISchoolStepFields,
  IStepFields,
} from '@/app/(routes)/apply/interface/type'
import { UploadedFileUi } from './UploadFileUi'

interface IDropZoneProps {
  isError: boolean | undefined
  error: string | string[] | FormikErrors<File>[] | undefined
  setValue: (field: string, value: File[]) => void
  setError?: (field: string, message: string | undefined) => void
  values: IStepFields | ISchoolStepFields | undefined
}

export const ImageDropZone = ({
  isError,
  error = [],
  setValue,
  setError,
  values,
}: IDropZoneProps) => {
  const [isDragging, setDragging] = useState<boolean>(false)
  const handleMetaData = (files: File[]) => {
    const prevFiles = values?.document || []
    const combinedFiles = [...prevFiles, ...files].slice(0, 5)

    if (combinedFiles) {
      if (combinedFiles.length < 6) {
        setValue('document', combinedFiles)
      } else {
        if (setError) {
          setError('document', 'You can upload a maximum of 5 files')
        }
      }
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    setDragging(false)

    //Handle drop files
    const files = Array.from(e.dataTransfer.files)
    handleMetaData(files)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files) {
      setDragging(false)
      const files = Array.from(e.target.files)
      handleMetaData(files)
    }
  }

  const handleDelete = (index: number) => {
    if (values && values.document) {
      setValue(
        'document',
        values.document.filter((_, i) => i !== index)
      )
      if (setError) {
        setError(`document[${index}]`, undefined)
      }
    }
  }

  const getErrorMessage = (index: number): string | undefined => {
    const errorMessage = error[index]
    if (typeof errorMessage === 'string') {
      return errorMessage
    }
    return undefined
  }

  return (
    <>
      <label
        onDragEnter={() => setDragging(true)}
        onDragOver={() => setDragging(true)}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        className={cn(
          'rounded-[12px] p-6 image-dropzone-border border-[2px] flex justify-center  items-center relative',
          {
            'bg-secondary/30 animate-pulse': isDragging,
          }
        )}
      >
        <div className="flex flex-col gap-y-2 items-center">
          <p className="text-body text-[14px] font-medium font-workSans leading-4 text-center">
            Drop your file(s) here or {''}
            <input
              name="document"
              multiple
              type="file"
              title="document"
              onChange={handleInputChange}
              className="w-full  h-full absolute top-0 left-0 opacity-0"
            />
            <span className="text-secondary font-workSans">browse</span>
          </p>
          <div className="flex flex-col items-center">
            <p className="text-body font-workSans text-[14px] leading-4 mb-2">
              Upload Limit: Maximum 5 files
            </p>
            <p className="text-body font-workSans text-[14px] leading-4">
              File Size: Up to 10MB each (.pdf)
            </p>
          </div>
        </div>
      </label>
      <span className="font-workSans font-normal text-[14px] leading-4 text-body -mt-4">
        *Note : Include birth certificate. Character Certificate , Report card
        of last class & Parent Citizenship
      </span>
      {isError && !Array.isArray(error) ? (
        <ErrorComponent error={error} />
      ) : (
        <div className="flex w-full flex-wrap gap-4 ">
          {values &&
            values.document &&
            values?.document?.map((file, index) => {
              const errorMessage = getErrorMessage(index)
              return (
                <UploadedFileUi
                  key={index}
                  name={file.name}
                  size={byteToMb(file.size)}
                  index={index}
                  onDelete={() => handleDelete(index)}
                  isError={!!error[index]}
                  message={errorMessage}
                />
              )
            })}
        </div>
      )}
    </>
  )
}
