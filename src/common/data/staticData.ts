import { IAdmissionResponse } from '@/app/(routes)/admission/_interface/admission'

export const facilityData = [
  {
    id: '1',
    images: {
      key: ['/ss/library.jpg'],
      bucket: ['facility-assets'],
      mimeType: ['image/jpeg'],
    },
    facilityTitle: 'Library',
    slug: 'library',
    articleTitle: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '2',
    images: {
      key: ['/ss/bus.jpg'],
      bucket: ['facility-assets'],
      mimeType: ['image/jpeg'],
    },
    facilityTitle: 'Transportation',
    slug: 'transportation',
    articleTitle: 'Lorem ipsum dolor sit amet',
    description:
      'lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '3',
    images: {
      key: ['/ss/canteen.jpg'],
      bucket: ['facility-assets'],
      mimeType: ['image/jpeg'],
    },
    facilityTitle: 'School Canteen',
    slug: 'school-canteen',
    articleTitle: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '4',
    images: {
      key: ['/ss/hero3.jpg'],
      bucket: ['facility-assets'],
      mimeType: ['image/jpeg'],
    },
    facilityTitle: 'Lab',
    slug: 'science-lab',
    articleTitle: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
]

export const newsData = {
  status: 200,
  message: 'Success',
  totalCount: 3,
  data: [
    {
      id: '1',
      title: 'एसईईमा ३.६ जीपीए आउँदैमा साइन्स नै पढ्नुपर्छ र ?',
      description:
        'एसईईको नतिजा संशोधन गरिएको निर्देशिकाबाट गर्ने कि पुरानो भन्ने विषयमा लामै बहस चल्याे । सरोकारवालाको बारम्बारको चासोपछि अन्ततः परीक्षा बोर्डले २०७९ सालको एसईईको नतिजा लेटर ग्रेडिङ निर्देशिका-२०७२ अनुसारै प्रकाशन गर्ने भयाे ।  जसअनुसार ३० देखि ४० प्रतिशत अंक अर्थात् १ दशमलव ६ ग्रेड प्वाइन्ट एभरेज (जीपीए) ल्याउने विद्यार्थीले कक्षा ११ मा पढाइने कुनै पनि समूह र विषय अध्ययन गर्न पाउनेछन् ।',
      images: {
        key: '/ss/news1.jpg',
        bucket: 'static-assets',
        mimeType: 'image/jpeg',
      },
      category: 'General',
      type: 'NEWS',
      status: 'published',
      publishedAt: '2024-01-15T10:00:00Z',
      createdAt: '2024-01-15T09:00:00Z',
      updatedAt: '2024-01-15T09:00:00Z',
      slug: 'lorem-ipsum-news-article',
    },
    {
      id: '2',
      title: 'Consectetur Adipiscing Event',
      description:
        'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
      images: {
        key: '/ss/news2.jpg',
        bucket: 'static-assets',
        mimeType: 'image/jpeg',
      },
      category: 'Events',
      type: 'NEWS',
      status: 'published',
      publishedAt: '2024-01-20T14:30:00Z',
      createdAt: '2024-01-20T13:30:00Z',
      updatedAt: '2024-01-20T13:30:00Z',
      slug: 'consectetur-adipiscing-event',
    },
    {
      id: '3',
      title: 'Tempor Incididunt Update',
      description:
        'Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      images: {
        key: '/ss/img3.jpg',
        bucket: 'static-assets',
        mimeType: 'image/jpeg',
      },
      category: 'Updates',
      type: 'NEWS',
      status: 'published',
      publishedAt: '2024-01-25T16:45:00Z',
      createdAt: '2024-01-25T15:45:00Z',
      updatedAt: '2024-01-25T15:45:00Z',
      slug: 'tempor-incididunt-update',
    },
  ],
}

export const noticeData = {
  status: 200,
  message: 'Success',
  totalCount: 5,
  data: [
    {
      id: '1',
      title: 'Bachelor 2nd year routine - Important Update',
      description: 'Bachelor 2nd year exam routine',
      images: {
        key: '/ss/notice2.jpg',
        bucket: 'static-assets',
        mimeType: 'image/jpeg',
      },
      category: 'General',
      type: 'NOTICE',
      status: 'published',
      publishedAt: '2024-01-10T09:00:00Z',
      createdAt: '2024-01-10T08:00:00Z',
      updatedAt: '2024-01-10T08:00:00Z',
      slug: 'lorem-ipsum-notice-important-update',
      isHoliday: false,
    },
    {
      id: '2',
      title: 'Holiday Notice ',
      description:
        'This is to inform all students and faculty members that the college will remain closed on 24th and 25th of Shrawan on the occasions of Raksha Bandhan andGai Jatra, respectively.Regular classes will resume Monday, 26th of Shrawan',
      images: {
        key: '/ss/notice1.jpg',
        bucket: 'static-assets',
        mimeType: 'image/jpeg',
      },
      category: 'Holiday',
      type: 'NOTICE',
      status: 'published',
      publishedAt: '2024-01-12T10:30:00Z',
      createdAt: '2024-01-12T09:30:00Z',
      updatedAt: '2024-01-12T09:30:00Z',
      slug: 'holiday-notice-consectetur-adipiscing',
      isHoliday: true,
    },
    {
      id: '3',
      title: 'Tempor Incididunt Administrative Notice',
      description:
        'Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      images: {
        key: '/ss/news1.jpg',
        bucket: 'static-assets',
        mimeType: 'image/jpeg',
      },
      category: 'Administrative',
      type: 'NOTICE',
      status: 'published',
      publishedAt: '2024-01-14T14:15:00Z',
      createdAt: '2024-01-14T13:15:00Z',
      updatedAt: '2024-01-14T13:15:00Z',
      slug: 'tempor-incididunt-administrative-notice',
      isHoliday: true,
    },
    {
      id: '4',
      title: 'Ullamco Laboris Examination Notice',
      description:
        'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.',
      images: {
        key: '/ss/hero4.jpg',
        bucket: 'static-assets',
        mimeType: 'image/jpeg',
      },
      category: 'Examination',
      type: 'NOTICE',
      status: 'published',
      publishedAt: '2024-01-16T11:45:00Z',
      createdAt: '2024-01-16T10:45:00Z',
      updatedAt: '2024-01-16T10:45:00Z',
      slug: 'ullamco-laboris-examination-notice',
      isHoliday: false,
    },
    {
      id: '5',
      title: 'Duis Aute Irure Academic Notice',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      images: {
        key: '/ss/hero3.jpg',
        bucket: 'static-assets',
        mimeType: 'image/jpeg',
      },
      category: 'Academic',
      type: 'NOTICE',
      status: 'published',
      publishedAt: '2024-01-18T15:20:00Z',
      createdAt: '2024-01-18T14:20:00Z',
      updatedAt: '2024-01-18T14:20:00Z',
      slug: 'duis-aute-irure-academic-notice',
      isHoliday: false,
    },
  ],
}

export const aboutData = {
  title: 'Nurturing Excellence in Education ',
  description: `
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum doloribus mollitia quaerat perspiciatis reprehenderit itaque perferendis natus quod quae commodi explicabo optio voluptates accusamus, eveniet, iure atque, exercitationem veritatis? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum doloribus mollitia quaerat perspiciatis reprehenderit itaque perferendis natus quod quae commodi explicabo optio voluptates accusamus, eveniet, iure atque, exercitationem veritatis? </p>
  `,
  features: [
    'ILorem, ipsum dolor sit amet',
    'Lorem, ipsum dolor sit amet',
    'Lorem, ipsum dolor sit amet',
    'Lorem, ipsum dolor sit amet',
    'Lorem, ipsum dolor sit amet',
    'Lorem, ipsum dolor sit amet',
  ],
}

export const staticTestimonialData = [
  {
    id: 1,
    name: 'Person 1',
    position: 'Class of 2023',
    image: {
      key: '/kws/person.svg',
      bucket: 'static',
      mimeType: 'image/jpeg',
    },
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum doloribus mollitia quaerat perspiciatis reprehenderit itaque perferendis natus quod quae commodi explicabo optio voluptates accusamus, eveniet, iure atque, exercitationem veritatis? ',
    organization: 'SS College',
  },
  {
    id: 2,
    name: 'Person 2',
    position: 'Parent',
    image: {
      key: '/kws/person.svg',
      bucket: 'static',
      mimeType: 'image/jpeg',
    },
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum doloribus mollitia quaerat perspiciatis reprehenderit itaque perferendis natus quod quae commodi explicabo optio voluptates accusamus, eveniet, iure atque, exercitationem veritatis? ',
    organization: 'Parent Community',
  },

  {
    id: 4,
    name: 'Person 3',
    position: 'Class of 2022',
    image: {
      key: '/kws/person.svg',
      bucket: 'static',
      mimeType: 'image/jpeg',
    },
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum doloribus mollitia quaerat perspiciatis reprehenderit itaque perferendis natus quod quae commodi explicabo optio voluptates accusamus, eveniet, iure atque, exercitationem veritatis? ',
    organization: 'SS College',
  },

  {
    id: 6,
    name: 'Person 4',
    position: 'Alumni - Class of 2019',
    image: {
      key: '/kws/person.svg',
      bucket: 'static',
      mimeType: 'image/jpeg',
    },
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum doloribus mollitia quaerat perspiciatis reprehenderit itaque perferendis natus quod quae commodi explicabo optio voluptates accusamus, eveniet, iure atque, exercitationem veritatis',
    organization: 'Business Analyst',
  },
]

export const contactData = {
  settings: [
    {
      key: 'Contact Number',
      value: '',
    },
    {
      key: 'Email',
      value: 'sscollegethimi14@gmail.com',
    },
    {
      key: 'College Time',
      value: 'Sun - Fri: 6:00 AM - 5:00 PM Sat Closed',
    },
  ],
  phoneNumbers: [
    {
      key: 'phone1',
      value: '+977-015639065',
    },
    {
      key: 'phone2',
      value: '+977-015639065',
    },
  ],
  telephoneNumbers: [
    {
      key: 'tel1',
      value: '+977-015639470',
    },
    {
      key: 'tel2',
      value: '+977-015639470',
    },
  ],
}

export const admissionData: IAdmissionResponse = {
  status: 200,
  message: 'Success',
  totalCount: 4,
  data: [
    {
      id: 1,
      admissionId: 'ADM001',
      articleTitle: 'Bachelor',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: {
        key: '/ss/hero2.jpg',
        bucket: 'static-assets',
        mimeType: 'image/jpeg',
      },
      programType: 'Lorem Ipsum',
      process: 'Lorem ipsum dolor sit amet',
      academics: {
        title: 'Bachelor',
        slug: 'bca',
      },
    },
    {
      id: 2,
      admissionId: 'ADM004',
      articleTitle: '+2',
      description:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
      image: {
        key: '/ss/hero1.jpg',
        bucket: 'static-assets',
        mimeType: 'image/jpeg',
      },
      programType: 'Voluptatem',
      process: 'Quia voluptas sit aspernatur',
      academics: {
        title: '+2 ',
        slug: 'bsc-it',
      },
    },
  ],
}

export const admissionDetailData = {
  bca: {
    status: 200,
    message: 'Success',
    data: {
      id: '1',
      academicId: 'ACD001',
      articleTitle: 'Bachelor - Detailed Information',
      description: `
        <h3>Bachelor Program Overview</h3>
        <p>Our Bachelor program provides comprehensive education in computer applications, preparing students for successful careers in the IT industry. This program combines theoretical knowledge with practical skills to ensure graduates are industry-ready.</p>
        
        <h3>Core Subjects</h3>
        <ul>
          <li>Programming Fundamentals</li>
          <li>Database Management Systems</li>
          <li>Web Development</li>
          <li>Software Engineering</li>
          <li>Computer Networks</li>
        </ul>
        
        <h3>Career Opportunities</h3>
        <ul>
          <li>Software Developer</li>
          <li>Web Developer</li>
          <li>Database Administrator</li>
          <li>System Analyst</li>
          <li>IT Consultant</li>
        </ul>
        
        <h3>Program Highlights</h3>
        <ul>
          <li>Industry-relevant curriculum</li>
          <li>Hands-on practical training</li>
          <li>Experienced faculty</li>
          <li>Modern computer labs</li>
          <li>Internship opportunities</li>
        </ul>
      `,
      image: {
        key: ['/ss/hero1.jpg', '/ss/hero2.jpg'],
        bucket: ['static-assets'],
        mimeType: ['image/jpeg'],
      },
      process:
        'Application process for Bachelor program includes entrance exam and interview',
      form: {
        key: '/ss/hero1.jpg',
        bucket: 'static-assets',
        mimeType: 'image/jpeg',
      },
      academics: {
        title: 'Bachelor Program',
        slug: 'bca',
      },
      programType: 'Bachelor Degree',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-15T00:00:00Z',
    },
  },
  'bsc-it': {
    status: 200,
    message: 'Success',
    data: {
      id: '2',
      academicId: 'ACD004',
      articleTitle: '+2 - Detailed Information',
      description: `
        <h3>+2 Program Overview</h3>
        <p>Our +2 program in Science stream provides a strong foundation for higher studies in science and technology. This program prepares students for entrance exams and university admissions while developing critical thinking skills.</p>
        
        <h3>Core Subjects</h3>
        <ul>
          <li>Physics</li>
          <li>Chemistry</li>
          <li>Mathematics</li>
          <li>Biology</li>
          <li>English</li>
        </ul>
        
        <h3>Future Pathways</h3>
        <ul>
          <li>Engineering Entrance Exams</li>
          <li>Medical Entrance Exams</li>
          <li>Bachelor in Science</li>
          <li>Bachelor in Technology</li>
          <li>Pharmacy Programs</li>
        </ul>
        
        <h3>Program Features</h3>
        <ul>
          <li>Experienced teaching staff</li>
          <li>Well-equipped laboratories</li>
          <li>Regular assessments</li>
          <li>Career counseling</li>
          <li>Entrance exam preparation</li>
        </ul>
      `,
      image: {
        key: ['/ss/hero1.jpg', '/ss/hero2.jpg'],
        bucket: ['static-assets', 'static-assets'],
        mimeType: ['image/jpeg', 'image/jpeg'],
      },
      process:
        'Admission process for +2 program includes SLC results verification and counseling',
      form: {
        key: '/kws/imagePlaceholder.svg',
        bucket: 'static-assets',
        mimeType: 'image/jpeg',
      },
      academics: {
        title: '+2 Science Program',
        slug: 'bsc-it',
      },
      programType: '+2 Science',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-15T00:00:00Z',
    },
  },
}

export const academicsData = {
  // Plus Two Programs
  science: {
    status: 200,
    message: 'Success',
    data: {
      id: '1',
      title: 'Management',
      slug: 'management',
      articleTitle: 'Lorem Ipsum Dolor Sit Amet',
      description: `
        <h3>Lorem Ipsum Overview</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        
        <h3>Sed Do Eiusmod</h3>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
        <h3>Ut Labore Et Dolore</h3>
        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipiscing elit</li>
          <li>Sed do eiusmod tempor incididunt</li>
          <li>Ut labore et dolore magna aliqua</li>
        </ul>
      `,
      image: {
        key: ['/kws/imagePlaceholder.svg'],
        bucket: ['static-assets'],
        mimeType: ['image/jpeg'],
      },
      programType: 'Plus Two',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-15T00:00:00Z',
    },
    banner: {
      id: '1',
      title: 'Lorem Ipsum Banner',
      image: {
        key: ['/kws/imagePlaceholder.svg'],
        bucket: ['static-assets'],
        mimeType: ['image/jpeg'],
      },
      link: '/apply',
      isEnabled: true,
      type: 'academic',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-15T00:00:00Z',
    },
  },
  management: {
    status: 200,
    message: 'Success',
    data: {
      id: '2',
      title: 'Management',
      slug: 'management',
      articleTitle: 'Lorem Ipsum Dolor Sit Amet',
      description: `
        <h3>Lorem Ipsum Overview</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        
        <h3>Sed Do Eiusmod</h3>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
        <h3>Ut Labore Et Dolore</h3>
        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipiscing elit</li>
          <li>Sed do eiusmod tempor incididunt</li>
          <li>Ut labore et dolore magna aliqua</li>
        </ul>
      `,
      image: {
        key: ['/kws/imagePlaceholder.svg'],
        bucket: ['static-assets'],
        mimeType: ['image/jpeg'],
      },
      programType: 'Plus Two',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-15T00:00:00Z',
    },
    banner: {
      id: '1',
      title: 'Lorem Ipsum Banner',
      image: {
        key: ['/kws/imagePlaceholder.svg'],
        bucket: ['static-assets'],
        mimeType: ['image/jpeg'],
      },
      link: '/apply',
      isEnabled: true,
      type: 'academic',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-15T00:00:00Z',
    },
  },
  humanities: {
    status: 200,
    message: 'Success',
    data: {
      id: '3',
      title: 'Humanities',
      slug: 'humanities',
      articleTitle: 'Consectetur Adipiscing Elit',
      description: `
        <h3>Consectetur Overview</h3>
        <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        
        <h3>Tempor Incididunt</h3>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
        
        <h3>Quis Nostrud</h3>
        <ul>
          <li>Ut enim ad minim veniam</li>
          <li>Quis nostrud exercitation</li>
          <li>Ullamco laboris nisi</li>
          <li>Ut aliquip ex ea commodo</li>
        </ul>
      `,
      image: {
        key: ['/kws/imagePlaceholder.svg'],
        bucket: ['static-assets'],
        mimeType: ['image/jpeg'],
      },
      programType: 'Plus Two',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-15T00:00:00Z',
    },
    banner: {
      id: '2',
      title: 'Consectetur Banner',
      image: {
        key: ['/kws/imagePlaceholder.svg'],
        bucket: ['static-assets'],
        mimeType: ['image/jpeg'],
      },
      link: '/apply',
      isEnabled: true,
      type: 'academic',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-15T00:00:00Z',
    },
  },

  // School Level Programs
  BBS: {
    status: 200,
    message: 'Success',
    data: {
      id: '5',
      title: 'Bachelor of Business Studies',
      slug: 'BBS',
      articleTitle: 'Et Harum Quidem Rerum',
      description: `
        <h3>Harum Quidem Overview</h3>
        <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>
        
        <h3>Facilis Est</h3>
        <p>Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
        
        <h3>Expedita Distinctio</h3>
        <ul>
          <li>Nam libero tempore</li>
          <li>Cum soluta nobis est</li>
          <li>Eligendi optio cumque</li>
          <li>Nihil impedit quo minus</li>
        </ul>
      `,
      image: {
        key: ['/kws/imagePlaceholder.svg'],
        bucket: ['static-assets'],
        mimeType: ['image/jpeg'],
      },
      programType: 'Bachelor',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-15T00:00:00Z',
    },
    banner: {
      id: '5',
      title: 'Harum Quidem Banner',
      image: {
        key: ['/kws/imagePlaceholder.svg'],
        bucket: ['static-assets'],
        mimeType: ['image/jpeg'],
      },
      link: '/apply',
      isEnabled: true,
      type: 'academic',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-15T00:00:00Z',
    },
  },
  'BA/BSW': {
    status: 200,
    message: 'Success',
    data: {
      id: '6',
      title: 'Bachelor of Arts',
      slug: 'BBS',
      articleTitle: 'Itaque Earum Rerum',
      description: `
        <h3>Earum Rerum Overview</h3>
        <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
        
        <h3>Sapiente Delectus</h3>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
        
        <h3>Reiciendis Voluptatibus</h3>
        <ul>
          <li>Maiores alias consequatur</li>
          <li>Aut perferendis doloribus</li>
          <li>Asperiores repellat</li>
          <li>Hic tenetur a sapiente</li>
        </ul>
      `,
      image: {
        key: ['/kws/imagePlaceholder.svg'],
        bucket: ['static-assets'],
        mimeType: ['image/jpeg'],
      },
      programType: 'Bachelor',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-15T00:00:00Z',
    },
    banner: {
      id: '6',
      title: 'Earum Rerum Banner',
      image: {
        key: ['/kws/imagePlaceholder.svg'],
        bucket: ['static-assets'],
        mimeType: ['image/jpeg'],
      },
      link: '/apply',
      isEnabled: true,
      type: 'academic',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-15T00:00:00Z',
    },
  },
}
export const brochureData = {
  status: 200,
  message: 'Success',
  totalCount: 3,
  data: [
    {
      id: '1',
      title: 'School Admission Brochure 2025',
      image: {
        key: '/kws/imagePlaceholder.svg',
        bucket: ['static-assets'],
        mimeType: ['image/jpeg'],
      },
      file: {
        key: '/downloads/admission-brochure.pdf',
        bucket: ['static-assets'],
        mimeType: ['application/pdf'],
      },
      status: 'PUBLISHED' as const,
      publishedAt: '2024-01-01T00:00:00Z',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-15T00:00:00Z',
    },
    {
      id: '2',
      title: 'Academic Programs Guide',
      image: {
        key: '/kws/imagePlaceholder.svg',
        bucket: ['static-assets'],
        mimeType: ['image/jpeg'],
      },
      file: {
        key: '/downloads/academic-guide.pdf',
        bucket: ['static-assets'],
        mimeType: ['application/pdf'],
      },
      status: 'PUBLISHED' as const,
      publishedAt: '2024-01-05T00:00:00Z',
      createdAt: '2024-01-05T00:00:00Z',
      updatedAt: '2024-01-15T00:00:00Z',
    },
    {
      id: '3',
      title: 'Facilities Overview',
      image: {
        key: '/kws/imagePlaceholder.svg',
        bucket: ['static-assets'],
        mimeType: ['image/jpeg'],
      },
      file: {
        key: '/downloads/facilities-overview.pdf',
        bucket: ['static-assets'],
        mimeType: ['application/pdf'],
      },
      status: 'PUBLISHED' as const,
      publishedAt: '2024-01-10T00:00:00Z',
      createdAt: '2024-01-10T00:00:00Z',
      updatedAt: '2024-01-15T00:00:00Z',
    },
  ],
}
