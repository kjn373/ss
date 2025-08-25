import { Work_Sans, Poppins, Inter } from 'next/font/google'

export const workSans = Work_Sans({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-workSans',
    subsets: ['latin']
})

export const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-poppins',
    subsets: ['latin']
})

export const inter = Inter({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '---font-inter',
    subsets: ['latin']
})