import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Input from 'src/components/Input'
import { schemaRegister } from 'src/utils/rules'
import type { DatePickerProps } from 'antd'
import { DatePicker, Space, Select, Radio } from 'antd'
import type { RadioChangeEvent } from 'antd'

interface FormRegister {
  email: string
  password: string
  full_name: string
  gender: string
  confirm_password: string
  phone: number
  day_of_birth: Date
  address: string
}

interface GenderRadioProps {
  value: string
  label: string
  checked?: boolean 
}

const registerSchema = schemaRegister

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // setError
  } = useForm<FormRegister>({
    resolver: yupResolver(registerSchema)
  })

  const onSubmit: SubmitHandler<FormRegister> = (data) => console.log(data)

  const GenderRadio: React.FC<GenderRadioProps> = ({ value, label, checked = false }) => {
    const [isChecked, setIsChecked] = useState(checked)

    const handleChange = (event: any) => {
      setIsChecked(event.target.checked)
    }

    return (
      <div className='flex flex-row gap-4'>
        <input type='radio' name='gender' value={value} id={value} checked={isChecked} onChange={handleChange} />
        <label htmlFor={value}>{label}</label>
      </div>
    )
  }

  //Day of Birthday
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString)
  }

  //Select City
  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
  }

  //Radio Select
  const [value, setValue] = useState(1)

  const onChangeRadio = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value)
    setValue(e.target.value)
  }
  return (
    <div className=' text-white text-[1.6rem] pb-20'>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2 className='text-[2.5rem] my-[40px] font-[600]'>Đăng Kí Tài Khoản</h2>
        <div>
          <div>Họ và tên*</div>
          <Input
            type='text'
            name='full_name'
            placeholder='Họ và Tên'
            register={register}
            errorsMessage={errors.full_name?.message}
          />
        </div>
        <div>
          <div className='flex items-center gap-20'>
            <div>
              <div>Giới Tính*</div>
              <div className='flex flex-row gap-6 mt-4 w-[348px]'>
                <GenderRadio value='male' label='Nam' checked/>
                <GenderRadio value='female' label='Nữ' />
                <GenderRadio value='other' label='Khác' />
              </div>
            </div>
            <div>
              <div>Địa Chỉ Email*</div>
              <Input
                type='text'
                name='email'
                placeholder='Tài khoản hoặc địa chỉ email'
                register={register}
                errorsMessage={errors.email?.message}
              />
            </div>
          </div>
        </div>
        <div className=' flex gap-20'>
          <div>
            <div>Mật Khẩu*</div>
            <Input
              type='password'
              name='password'
              placeholder='Mật Khẩu'
              register={register}
              errorsMessage={errors.password?.message}
            />
          </div>
          <div>
            <div>Xác Nhận Mật Khẩu</div>
            <Input
              name='confirm_password'
              register={register}
              type='password'
              errorsMessage={errors.confirm_password?.message}
              placeholder='Xác Nhận Mật Khẩu'
              autoComplete='on'
            />
          </div>
        </div>

        <div>
          <div>Số Điện Thoại*</div>
          <Input
            type='text'
            name='full_name'
            placeholder='Họ và Tên'
            register={register}
            errorsMessage={errors.full_name?.message}
          />
        </div>

        <div>
          <div>Ngaỳ Sinh*</div>
          <div className='mt-6'>
            <Space direction='horizontal'>
              <DatePicker
                onChange={onChange}
                picker='date'
                style={{ width: '190px', height: '40px', color: 'white' }}
              />
              <DatePicker
                onChange={onChange}
                picker='month'
                style={{ width: '190px', height: '40px', color: 'white', marginRight: '30px', marginLeft: '30px' }}
              />
              <DatePicker
                onChange={onChange}
                picker='year'
                style={{ width: '190px', height: '40px', color: 'white' }}
              />
            </Space>
          </div>
        </div>

        <div className='mt-6'>
          <div className='mb-6'>Tỉnh/Thành Phố*</div>
          <Select
            defaultValue='Đà Nẵng'
            style={{ width: 420, height: 40 }}
            onChange={handleChange}
            options={[
              { value: 'Đà Nẵng', label: 'Đà Nẵng' },
              { value: 'Hồ Chí Minh', label: 'Hồ Chí Minh' },
              { value: 'Hà Nội', label: 'Hà Nội' }
              // { value: 'Huế', label: 'Huế', disabled: true }
            ]}
          />
        </div>

        <div className='mt-8'>
          <Radio.Group onChange={onChangeRadio} value={value}>
            <Space direction='vertical'>
              <Radio value={1} style={{ color: 'white', fontSize: '16px' }}>
                Tôi đã đọc, hiểu và đồng ý với các điều khoản
              </Radio>
              <Radio value={2} style={{ color: 'white', fontSize: '16px' }}>
                Nhận thông tin chương trình khuyến mãi
              </Radio>
            </Space>
          </Radio.Group>
        </div>
        <button className='w-[750px]  h-[40px] hover:opacity-90 flex justify-center items-center font-semibold text-[1.6rem] uppercase rounded-md bg-[#FF543E] mt-[40px]'>
          Đăng Kí
        </button>
      </form>
    </div>
  )
}
