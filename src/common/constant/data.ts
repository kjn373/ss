export const navLinks = [
  {
    id: 1,
    title: 'About Us',
    sublink: [
      {
        id: 1,
        title: 'Introduction',
        link: '/about',
      },
      {
        id: 2,
        title: 'Teams',
        link: '/teams',
      },
      {
        id: 3,
        title: 'Our Success',
        link: '/testimonials',
      },
    ],
    isDropDown: true,
  },
  {
    id: 2,
    title: 'Academics',
    isDropDown: true,
    sublink: [
      {
        id: 1,
        title: 'Overview',
        link: '/academics',
      },
      {
        id: 2,
        title: 'Plus Two',
        link: '',
        subsublink: [
          {
            id: 1,
            title: 'Science',
            link: '/academics/plustwo/science',
          },
          {
            id: 2,
            title: 'Management',
            link: '/academics/plustwo/management',
          },
          {
            id: 3,
            title: 'Humanities',
            link: '/academics/plustwo/humanities',
          },
        ],
      },
      {
        id: 3,
        title: 'Bachelor Level',
        link: '',
        subsublink: [
          {
            id: 1,
            title: 'Bachelor of Business Studies',
            link: '/academics/bachelor/BBS',
          },
          {
            id: 2,
            title: 'Bachelor of Arts',
            link: '/academics/bachelor/BBS',
          },
        ],
      },
      {
        id: 4,
        title: 'Admission',
        link: '/admission',
      },
    ],
  },
  {
    id: 3,
    title: 'Our facilities',
    link: '',
    isDropDown: true,
    sublink: [
      {
        id: 0,
        title: 'Overview',
        link: '/facilities',
      },

      {
        id: 1,
        title: 'Science Lab',
        link: '/facilities/science',
      },
      {
        id: 2,
        title: 'School Canteen',
        link: '/facilities/canteen',
      },
      {
        id: 3,
        title: 'Library',
        link: '/facilities/library',
      },
      {
        id: 4,
        title: 'Computer Lab',
        link: '/facilities/computer',
      },
      {
        id: 5,
        title: 'Transportation',
        link: '/facilities/transportation',
      },
      {
        id: 6,
        title: 'School-Hostel',
        link: '/facilities/hostel',
      },
      {
        id: 7,
        title: 'Sports',
        link: '/facilities/sports',
      },
    ],
  },
  {
    id: 4,
    title: 'Gallery',
    link: '/gallery',
    isDropDown: false,
    sublink: [],
  },
  {
    id: 5,
    title: 'News & Events',
    link: '',
    isDropDown: true,
    sublink: [
      {
        id: 1,
        title: 'News & Notices',
        link: '/news',
      },
      {
        id: 2,
        title: 'Events',
        link: '/events',
      },
      {
        id: 3,
        title: 'Downloads',
        link: '/brochure',
      },
    ],
  },
]

export const staticFooterLinksData = [
  {
    title: 'Quick Links',
    content: [
      { text: 'Introduction', url: '/' },
      { text: 'Our Success', url: '/testimonials' },
      { text: 'Our Team', url: '/teams' },
      { text: 'Gallery', url: '/gallery' },
      { text: 'Admission', url: '/admission' },
      { text: 'Contact', url: '/contact' },
    ],
  },
  {
    title: 'Plus Two',
    content: [
      { text: 'Science', url: '/academics/plustwo/science' },
      { text: 'Management', url: '/academics/plustwo/management' },
      { text: 'Humanities', url: '/academics/plustwo/humanities' },
    ],
  },
  {
    title: 'Important Links',
    content: [
      {
        text: 'Tribhuvan University',
        url: 'https://tu.edu.np/',
      },
      { text: 'National Examinations Board', url: 'https://neb.gov.np' },
      {
        text: 'Ministry of Education',
        url: 'https://moest.gov.np/',
      },
      {
        text: 'Office of the Controller of Examinations',
        url: 'https://www.see.gov.np/',
      },
      // {
      //   text: 'District Education Office, Lalitpur',
      //   url: 'https://daolalitpur.moha.gov.np/en',
      // },
    ],
  },
]
