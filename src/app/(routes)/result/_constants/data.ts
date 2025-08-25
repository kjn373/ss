export type ITitle = 'Plus Two' | 'School Level'
export type ICategory = string

export const categoriesByTitle = [
  {
    title: 'Plus Two',
    categories: ['All', 'Management', 'Humanities'],
  },
  {
    title: 'School Level',
    categories: ['All', 'Science', 'Arts'],
  },
]

// export const ResultData: IResultData[] = [
//   {
//     id: 1,
//     heading: 'Class 11 (Sec A) Result',
//     date: 'July 19, 2024',
//     type: 'Plus Two',
//     category: 'Management',
//     pdfUrl: 'https://www.princexml.com/samples/invoice/invoicesample.pdf',
//   },
//   {
//     id: 2,
//     heading: 'Class 11 (Sec A) Result',
//     date: 'July 19, 2024',
//     type: 'Plus Two',
//     category: 'Humanities',
//     pdfUrl: 'https://example.com/sample1.pdf',
//   },
//   {
//     id: 3,
//     heading: 'Class 11 (Sec A) Result',
//     date: 'July 19, 2024',
//     type: 'Plus Two',
//     category: 'Humanities',
//     pdfUrl: 'https://example.com/sample1.pdf',
//   },
//   {
//     id: 4,
//     heading: 'Class 11 (Sec A) Result',
//     date: 'July 19, 2024',
//     type: 'Plus Two',
//     category: 'Humanities',
//     pdfUrl: 'https://example.com/sample1.pdf',
//   },
//   {
//     id: 5,
//     heading: 'Class 11 (Sec A) Result',
//     date: 'July 19, 2024',
//     type: 'Plus Two',
//     category: 'Management',
//     pdfUrl: 'https://example.com/sample1.pdf',
//   },
//   {
//     id: 6,
//     heading: 'Class 11 (Sec A) Result',
//     date: 'July 19, 2024',
//     type: 'Plus Two',
//     category: 'Management',
//     pdfUrl: 'https://example.com/sample1.pdf',
//   },
//   {
//     id: 7,
//     heading: 'Class 11 (Sec A) Result',
//     date: 'July 19, 2024',
//     type: 'Plus Two',
//     category: 'Humanities',
//     pdfUrl: 'https://example.com/sample1.pdf',
//   },
//   {
//     id: 8,
//     heading: 'Class 10 (Sec A) Result',
//     date: 'July 19, 2024',
//     type: 'School Level',
//     category: 'Science',
//     pdfUrl: 'https://example.com/sample2.pdf',
//   },
//   {
//     id: 9,
//     heading: 'Class 9 (Sec A) Result',
//     date: 'July 19, 2024',
//     type: 'School Level',
//     category: 'Arts',
//     pdfUrl: 'https://example.com/sample3.pdf',
//   },
// ]

export const resultTab = [
  {
    title: 'Plus Two',
    key: 'PLUS_TWO',
  },
  {
    title: 'School Level',
    key: 'SCHOOL',
  },
]

export const PlusTwoDropdownList = [
  {
    title: 'All',
    value: 'all',
  },
  {
    title: 'Management',
    value: 'management',
  },
  {
    title: 'Humanities',
    value: 'humanities',
  },
  {
    title: 'Law',
    value: 'law',
  },
  {
    title: 'Education',
    value: 'education',
  },
]

export const SchoolLevelDropdownList = [
  {
    title: 'All',
    value: 'all',
  },
  {
    title: 'Pre-School (Kindergarten)',
    value: 'pre-school-kindergarten',
  },
  {
    title: 'Primary Level (One - Five)',
    value: 'primary-level-one-five',
  },
  {
    title: 'Basic Level (Six - Eight)',
    value: 'basic-level-six-eight',
  },
  {
    title: 'Senior Level (Nine - Ten)',
    value: 'senior-level-nine-ten',
  },
]
