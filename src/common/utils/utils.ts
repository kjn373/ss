import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const byteToMb = (bytes: number) => (bytes / (1024 * 1024)).toFixed(2)
/**
 * Checks the file type based on its MIME type.
 * @param fileType - The MIME type of the file (e.g., 'image/jpeg', 'application/pdf').
 * @returns A string indicating the type of file ('image', 'pdf', or 'other').
 */
export const checkFileType = (fileType: string): 'image' | 'pdf' | 'other' => {
  if (fileType === 'application/pdf') {
    return 'pdf'
  } else {
    return 'other'
  }
}

export const convertFileToSrc = (file: File) => URL.createObjectURL(file)
