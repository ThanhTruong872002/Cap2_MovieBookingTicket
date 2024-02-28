import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Input from 'src/components/Input'
import { Schema, schema } from 'src/utils/rules'
import { useMutation } from '@tanstack/react-query'
import { registerAccount } from 'src/apis/auth.api'
import { omit } from 'lodash'
import { ErrorResponse } from 'src/types/utils.type'
import { isAxiosBadRequestError } from 'src/utils/utils'

type FormRegister = Schema

const registerSchema = schema

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<FormRegister>({
    resolver: yupResolver(registerSchema),
  })
  console.log('errors', errors)

  const registerMutation = useMutation({
    mutationFn: (body: Omit<FormRegister, 'phone' | 'confirm_password' | 'sex' | 'birth' | 'address'>) =>
      registerAccount(body),
  })

  const onsubmit = (data: any) => {
    const body: any = omit(data, ['phone', 'confirm_password'])
    registerMutation.mutate(body, {
      onSuccess: (data) => {
        console.log(data)
        reset()
      },
      onError: (error) => {
        if (
          isAxiosBadRequestError<
            ErrorResponse<Omit<FormRegister, 'phone' | 'confirm_password' | 'sex' | 'birth' | 'address'>>
          >(error)
        ) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              const errorKey = key as keyof Omit<
                FormRegister,
                'phone' | 'confirm_password' | 'sex' | 'birth' | 'address'
              >
              console.log(typeof errorKey)
              setError(errorKey, {
                message: formError[errorKey],
                type: 'Server',
              })
            })
          }
        }
      },
    })
  }

  return (
    <div className=' text-white text-[1.6rem] pb-20'>
      <form onSubmit={handleSubmit(onsubmit)} noValidate>
        <h2 className='text-[2.5rem] my-[40px] font-[600]'>Đăng Kí Tài Khoản</h2>
        <div>
          <div>Họ và tên*</div>
          <Input
            type='text'
            name='fullName'
            placeholder='Họ và Tên'
            register={register}
            errorsMessage={errors.fullName?.message}
          />
        </div>
        <div>
          <div className='flex items-center justify-between'>
            <div>
              <div className='-translate-y-12'>Giới Tính*</div>
              <div className='flex gap-6'>
                <label htmlFor='field-female'>
                  <input
                    {...register('sex')}
                    type='radio'
                    name='sex'
                    value='female'
                    id='field-female'
                    className='cursor-pointer p-2 '
                  />
                  <span> Female</span>
                </label>
                <label htmlFor='field-male'>
                  <input
                    {...register('sex')}
                    type='radio'
                    name='sex'
                    value='male'
                    id='field-male'
                    className='cursor-pointer p-2 '
                  />
                  <span> Male</span>
                </label>
                <label htmlFor='field-other'>
                  <input
                    {...register('sex')}
                    type='radio'
                    name='sex'
                    value='other'
                    id='field-other'
                    className='cursor-pointer p-2 '
                  />
                  <span> Other</span>
                </label>
              </div>
            </div>
            <div>
              <div>Địa Chỉ Email*</div>
              <Input
                type='email'
                name='email'
                placeholder='Tài khoản hoặc địa chỉ email'
                register={register}
                errorsMessage={errors.email?.message}
              />
            </div>
          </div>
        </div>
        <div className=' flex justify-between'>
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
            name='phone'
            placeholder='Họ và Tên'
            register={register}
            errorsMessage={errors.phone?.message}
          />
        </div>

        <div>
          <div className='mb-5'>Ngày sinh*</div>
          <input
            type='date'
            id='birth'
            className='text-black min-w-[348px] h-[40px] rounded-md px-5 pt-2 cursor-pointer '
            {...register('birth', { required: true })}
          />
        </div>

        <div className='mt-6'>
          <div className='mb-6'>Tỉnh/Thành Phố*</div>
          <select
            {...register('address')}
            defaultValue={''}
            className='w-[420px] h-[40px] px-4 rounded-md pt-2 cursor-pointer text-black'
          >
            <option value='Đà Nẵng'>Đà Nẵng</option>
            <option value='Hồ Chí Minh'>Hồ Chí Minh</option>
            <option value='Hà Nội'>Hà Nội</option>
            <option value='Huế'>Huế</option>
          </select>
        </div>

        <div className='flex gap-4 mt-8'>
          <input type='checkbox' className='p-2 cursor-pointer' />
          <p>
            Tôi đã đọc, hiểu và đồng ý với các <span className='text-orange underline cursor-pointer'>điều khoản</span>
          </p>
        </div>
        <div className='flex gap-4 mt-3'>
          <input type='checkbox' className='p-2 cursor-pointer' />
          <p>Nhận thông tin chương trình khuyến mãi</p>
        </div>
        <div className='mt-8'></div>
        <button className='w-[750px]  h-[40px] hover:opacity-90 flex justify-center items-center font-semibold text-[1.6rem] uppercase rounded-md bg-[#FF543E] mt-[40px]'>
          Đăng Kí
        </button>
      </form>
    </div>
  )
}
