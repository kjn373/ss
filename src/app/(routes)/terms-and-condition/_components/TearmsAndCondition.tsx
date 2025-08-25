import { CoverImage } from '@/common/components/Molecules/CoverImage'
// import { NoDataFound } from '@/common/components/NoDataFound'
// import { UseServerFetch } from '@/common/hook/useServerFetch'
import { format } from 'date-fns'
// import { ITermsResponse } from '../_interface/Terms'
import './terms.css'

const TearmsAndCondition = () => {
  // Static data instead of API response
  const staticTermsData = {
    id: '1',
    description: `
      <h2>Terms and Conditions</h2>
      <p>Welcome to SS College. These terms and conditions outline the rules and regulations for the use of our services and facilities.</p>
      
      <h3>1. Acceptance of Terms</h3>
      <p>By enrolling your child at SS College, you agree to comply with and be bound by these terms and conditions.</p>
      
      <h3>2. Admission Policy</h3>
      <ul>
        <li>All admissions are subject to availability and meeting our admission criteria</li>
        <li>Required documents must be submitted within the specified timeframe</li>
        <li>Age requirements must be met as per our admission guidelines</li>
        <li>Medical certificates and vaccination records are mandatory</li>
      </ul>
      
      <h3>3. Fee Structure and Payment</h3>
      <ul>
        <li>School fees must be paid within the due date specified</li>
        <li>Late payment may result in additional charges</li>
        <li>Fees once paid are non-refundable except in exceptional circumstances</li>
        <li>Fee structure is subject to annual review and modification</li>
      </ul>
      
      <h3>4. Academic Policies</h3>
      <ul>
        <li>Regular attendance is mandatory for all students</li>
        <li>Students must maintain academic and behavioral standards</li>
        <li>Parents are required to attend parent-teacher meetings</li>
        <li>Academic progress will be communicated through regular reports</li>
      </ul>
      
      <h3>5. Code of Conduct</h3>
      <ul>
        <li>Students must follow the school's code of conduct at all times</li>
        <li>Disciplinary actions may be taken for violations</li>
        <li>Respect for teachers, staff, and fellow students is expected</li>
        <li>School property must be treated with care and respect</li>
      </ul>
      
      <h3>6. Health and Safety</h3>
      <ul>
        <li>The school maintains comprehensive health and safety protocols</li>
        <li>Emergency contact information must be kept updated</li>
        <li>Students with medical conditions must inform the school administration</li>
        <li>The school reserves the right to take necessary medical action in emergencies</li>
      </ul>
      
      <h3>7. Privacy Policy</h3>
      <p>We are committed to protecting the privacy of our students and their families. Personal information will be used solely for educational and administrative purposes.</p>
      
      <h3>8. Modifications</h3>
      <p>The school reserves the right to modify these terms and conditions at any time. Changes will be communicated to parents and guardians in advance.</p>
      
      <h3>9. Contact Information</h3>
      <p>For any questions regarding these terms and conditions, please contact the school administration office.</p>
    `,
    updatedAt: '2024-01-15T10:30:00Z',
    createdAt: '2023-08-01T09:00:00Z',
  }

  // const response: ITermsResponse | undefined = await UseServerFetch(
  //   '/api/v1/terms-and-conditions'
  // )

  const renderTermsUi = () => {
    // Using static data instead of API response
    return (
      <div>
        <div className="font-workSans font-normal text-[14px] leading-4 text-body">
          Last Update:{' '}
          {staticTermsData.updatedAt
            ? format(new Date(staticTermsData.updatedAt), 'MMMM dd, yyyy')
            : 'N/A'}
        </div>
        <div
          className="terms-content custom-list"
          dangerouslySetInnerHTML={{ __html: staticTermsData.description }}
        ></div>
      </div>
    )

    // Original dynamic data logic (commented out)
    // if (response?.data && response.data.length > 0) {
    //   const terms = response.data[0]
    //   return (
    //     <div>
    //       <div className="font-workSans font-normal text-[14px] leading-4 text-body">
    //         Last Update:{' '}
    //         {terms.updatedAt
    //           ? format(new Date(terms.updatedAt), 'MMMM dd, yyyy')
    //           : 'N/A'}
    //       </div>
    //       <div
    //         className="terms-content custom-list"
    //         dangerouslySetInnerHTML={{ __html: terms.description }}
    //       ></div>
    //     </div>
    //   )
    // } else {
    //   return (
    //     <div>
    //       <NoDataFound title="No Terms and Condition Data Found" />
    //     </div>
    //   )
    // }
  }

  return (
    <div>
      <CoverImage
        title="Terms and Conditions"
        list={[{ link: null, title: 'Terms and Condition' }]}
      />
      <div className="w-full px-4 md:px-12 lg:px-[60px] 2xl:px-[200px] 2xl_lg:px-[240px]  3xl:px-[540px]  py-[56px] ">
        {renderTermsUi()}
      </div>
    </div>
  )
}

export default TearmsAndCondition
