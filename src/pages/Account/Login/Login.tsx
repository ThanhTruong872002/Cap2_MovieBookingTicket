import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { loginAccount } from 'src/apis/auth.api'
import Input from 'src/components/Input'
import { ErrorResponse } from 'src/types/utils.type'
import { Schema, schema } from 'src/utils/rules'
import { isAxiosUnauthorizedError } from 'src/utils/utils'

type FormLogin = Omit<Schema, 'sex' | 'confirm_password' | 'address' | 'birth' | 'fullName' | 'phone'>

const schemaLogin = schema.omit(['sex', 'confirm_password', 'address', 'birth', 'fullName', 'phone'])

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormLogin>({
    resolver: yupResolver(schemaLogin),
  })

  // console.log(errors)

  const loginAccountMutation = useMutation({
    mutationFn: (body: Omit<FormLogin, 'sex' | 'confirm_password' | 'address' | 'birth' | 'fullName' | 'phone'>) =>
      loginAccount(body),
  })

  const onsubmit = handleSubmit((data) => {
    loginAccountMutation.mutate(data, {
      onSuccess: (data) => {
        console.log(data)
      },
      onError: (error) => {
        if (
          isAxiosUnauthorizedError<
            ErrorResponse<Omit<FormLogin, 'sex' | 'confirm_password' | 'address' | 'birth' | 'fullName' | 'phone'>>
          >(error)
        ) {
          const formError = error.response?.data?.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              const errorKey = key as keyof Omit<
                FormLogin,
                'sex' | 'confirm_password' | 'address' | 'birth' | 'fullName' | 'phone'
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
  })
  return (
    <div className=' text-white text-[1.6rem] pb-20'>
      <form onSubmit={onsubmit} noValidate>
        <h2 className='text-[2.5rem] my-[40px] font-[600]'>Đăng Nhập Tài Khoản</h2>
        <div className='mt-6'>
          <div>Email*</div>
          <Input
            type='text'
            name='email'
            placeholder='Tài khoản hoặc địa chỉ email'
            register={register}
            errorsMessage={errors.email?.message}
          />
        </div>
        <div className='mt-6'>
          <div>Mật Khẩu*</div>
          <Input
            type='password'
            name='password'
            placeholder='Mật Khẩu'
            register={register}
            errorsMessage={errors.password?.message}
          />
        </div>
        <button className='min-w-[350px] h-[40px] hover:opacity-90 flex justify-center items-center font-semibold text-[1.6rem] uppercase rounded-md bg-[#FF543E] mt-[55px]'>
          Đăng Nhập
        </button>
      </form>
    </div>
  )
}
