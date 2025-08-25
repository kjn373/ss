import { Input } from '@/common/components/Atom/Input'
import { IStepProps } from '../../interface/type'

export const StepTwo = ({ errors, inputStyle, touched }: IStepProps) => {
  return (
    <div className="flex flex-col gap-6 ">
      <h1 className="text-heading font-poppins text-[20px] leading-[26px] font-medium">
        Family Details
      </h1>
      <div className="flex flex-col gap-y-4  lg:flex-row gap-x-6">
        <Input
          label="Father's Name"
          isRequired
          labelClass={inputStyle.label}
          placeholder="Your father's name"
          name="fatherName"
          error={errors!.fatherName}
          className={inputStyle.input}
          isError={!!errors!.fatherName && touched.fatherName}
        />
        <Input
          label="Father's Profession"
          labelClass={inputStyle.label}
          placeholder="Your father's profession"
          name="fatherProfession"
          error={errors!.fatherProfession}
          className={inputStyle.input}
          isError={!!errors!.fatherProfession && touched.fatherProfession}
        />
        <Input
          label="Father's Mobile No."
          isRequired
          labelClass={inputStyle.label}
          placeholder="Your father's mobile no."
          name="fatherMobileNumber"
          error={errors!.fatherMobileNumber}
          className={inputStyle.input}
          isError={!!errors!.fatherMobileNumber && touched.fatherMobileNumber}
        />
      </div>
      <div className="flex flex-col gap-y-4  lg:flex-row gap-x-6">
        <Input
          label="Local Guardian's Name"
          labelClass={inputStyle.label}
          placeholder="Your local guardian's name"
          name="localGuardianName"
          error={errors!.localGuardianName}
          className={inputStyle.input}
          isError={!!errors!.localGuardianName && touched.localGuardianName}
        />
        <Input
          label="Local Guardian's Profession"
          labelClass={inputStyle.label}
          placeholder="Your local guardian's profession"
          name="localGuardianProfession"
          error={errors!.localGuardianProfession}
          className={inputStyle.input}
          isError={
            !!errors!.localGuardianProfession && touched.localGuardianProfession
          }
        />
        <Input
          label="Local Guardian's Phone No"
          labelClass={inputStyle.label}
          placeholder="Your local guardian's phone no"
          name="localGuardianPhoneNumber"
          error={errors!.localGuardianPhoneNumber}
          className={inputStyle.input}
          isError={
            !!errors!.localGuardianPhoneNumber &&
            touched.localGuardianPhoneNumber
          }
        />
      </div>
    </div>
  )
}
