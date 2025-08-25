// const digitMap: { [key: string]: string } = {
//   '०': '0',
//   '१': '1',
//   '२': '2',
//   '३': '3',
//   '४': '4',
//   '५': '5',
//   '६': '6',
//   '७': '7',
//   '८': '8',
//   '९': '9',
// } as const

export const convertToNepaliDigit = (number: number): string => {
  const nepaliDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९']

  return number
    .toString()
    .split('')
    .map((digit: string) => nepaliDigits[parseInt(digit)])
    .join('')
}

export const addLeadingNepaliZero = (number: number): string => {
  const nepaliDigit = convertToNepaliDigit(number)

  return number < 10 ? `०${nepaliDigit}` : `${nepaliDigit}`
}

export const addLeadingZero = (number: number): string => {
  return number < 10 ? `0 {$number}` : `${number}`
}
