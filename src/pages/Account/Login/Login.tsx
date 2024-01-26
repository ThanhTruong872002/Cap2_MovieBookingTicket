import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import Input from 'src/components/Input'
import { schemaLogin } from 'src/utils/rules'

interface FormLogin {
  email: string
  password: string
}


export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // setError
  } = useForm<FormLogin>({
    resolver: yupResolver(schemaLogin)
  })

  const onSubmit: SubmitHandler<FormLogin> = (data) => console.log(data)
  return (
    <div className=' text-white text-[1.6rem] pb-20'>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
