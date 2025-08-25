import { Input } from '@/common/components/Atom/Input'
import { CustomDropdown } from '@/common/components/Molecules/CustomDropdown'
import { ImageDropZone } from '@/common/components/Molecules/ImageDropZone'
import { genderList, provinces } from '../../constant/data'
import { InputWithDate } from '@/common/components/Atom/InputWithDate'
import { ISchoolStepProps, IStepProps } from '../../interface/type'

export const StepOne = ({
  setFieldValue,
  errors,
  setFieldError,
  inputStyle,
  values,
  touched,
}: IStepProps | ISchoolStepProps) => {
  return (
    <div className="flex flex-col gap-6 ">
      <h1 className="text-heading font-poppins text-[20px] leading-[26px] font-medium">
        Personal Information
      </h1>
      <div className="flex flex-col gap-y-4  lg:flex-row gap-x-6">
        <Input
          label="First Name"
          isRequired
          labelClass={inputStyle.label}
          placeholder="Your name"
          name="firstName"
          error={errors!.firstName}
          className={inputStyle.input}
          isError={!!errors!.firstName && touched.firstName}
        />
        <Input
          label="Middle Name"
          isRequired={false}
          labelClass={inputStyle.label}
          placeholder="Your middle name"
          name="middleName"
          error={errors.middleName}
          className={inputStyle.input}
          isError={!!errors.middleName && touched.middleName}
        />
        <Input
          label="Last Name"
          isRequired
          labelClass={inputStyle.label}
          placeholder="Your last name"
          name="lastName"
          error={errors.lastName}
          className={inputStyle.input}
          isError={!!errors.lastName && touched.lastName}
        />
      </div>
      <div className="flex flex-col gap-y-4  lg:flex-row gap-x-6">
        <Input
          label="Street Address"
          isRequired
          labelClass={inputStyle.label}
          placeholder="Your Street Address"
          name="street"
          error={errors.street}
          className={inputStyle.input}
          isError={!!errors.street && touched.street}
        />
        <Input
          label="City"
          isRequired
          labelClass={inputStyle.label}
          placeholder="Your City"
          name="city"
          error={errors.city}
          className={inputStyle.input}
          isError={!!errors.city && touched.city}
        />

        <CustomDropdown
          setFieldValue={setFieldValue}
          isError={!!errors.province && touched.province}
          error={errors.province}
          list={provinces}
          placeHolder={'Select province no'}
          label="Province No"
          field={'province'}
          isRequired
          value={values!.province}
        />
      </div>

      <div className="flex flex-col gap-y-4  lg:flex-row gap-x-6">
        <CustomDropdown
          isRequired
          setFieldValue={setFieldValue}
          isError={!!errors.gender && touched.gender}
          error={errors.gender}
          list={genderList}
          placeHolder={'Select gender'}
          label="Gender"
          field="gender"
          value={values!.gender}
        />
        <InputWithDate
          label="Date Of Birth (AD)"
          setValue={setFieldValue}
          error={errors.dateOfBirth}
          isError={!!errors.dateOfBirth && touched.dateOfBirth}
          isRequired
          value={values!.dateOfBirth}
        />

        <Input
          label="Mobile No"
          isRequired
          labelClass={inputStyle.label}
          placeholder="Your mobile no"
          name="mobileNumber"
          error={errors.mobileNumber}
          className={inputStyle.input}
          isError={!!errors.mobileNumber && touched.mobileNumber}
        />
      </div>
      <Input
        label="Email"
        isRequired
        labelClass={inputStyle.label}
        placeholder="Your Email"
        name="email"
        error={errors.email}
        className={inputStyle.input}
        isError={!!errors.email && touched.email}
      />
      <ImageDropZone
        isError={!!errors.document}
        error={errors.document}
        setValue={setFieldValue}
        setError={setFieldError}
        values={values}
      />
    </div>
  )
}
