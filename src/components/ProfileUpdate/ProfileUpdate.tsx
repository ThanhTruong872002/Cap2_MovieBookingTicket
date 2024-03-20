import hero from '../../images/hero.png'
import Input from 'src/components/Input'
import { useContext, useState } from 'react'
import { AppContext } from 'src/contexts/app.context'

export default function ProfileUpdate() {
  const { isAuthenticated, setIsAuthenticated, setProfile, profile } = useContext(AppContext)
  const [changePassClick, setChangePassClick] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleChangePassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setChangePassClick(!changePassClick)
    setShowPassword(false)
  }

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className='flex flex-col border-solid border-2 border-gray-400 rounded-lg min-w-[820px]'>
      <div className='flex flex-col p-16 pb-0 gap-12'>
        <div className='flex gap-8'>
          {isAuthenticated ? (
            <>
              <img src={profile?.image} alt={profile?.fullName} className='w-[150px] h-[150px]' />
              <div className='flex flex-col gap-9'>
                <p className='text-[#FF551F] font-bold text-2xl capitalize'>{profile?.fullName}</p>
                <span className='flex gap-2'>
                  Điểm: <p className='text-[#FF551F]'> 0</p>
                </span>
                <span className='flex gap-2'>
                  Tổng visit: <p className='text-[#FF551F]'> 0</p>
                </span>
                <span className='flex gap-2'>
                  Tổng chi tiêu trong tháng: <p className='text-[#FF551F]'> 0VNĐ</p>
                </span>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className='border-dashed border' />
      </div>
      {/* <form noValidate className='p-16'>
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
          <div>
            <div>Địa Chỉ Email*</div>
            <Input
              type='email'
              name='email'
              readOnly={true}
              placeholder='Tài khoản hoặc địa chỉ email'
              register={register}
              errorsMessage={errors.email?.message}
            />
          </div>
        </div>
        <div className='flex justify-between items-center gap-16'>
          <div>
            <div>Mật Khẩu*</div>
            <Input
              type='password'
              name='password'
              placeholder='Mật Khẩu'
              readOnly={true}
              className='w-[420px]'
              register={register}
              errorsMessage={errors.password?.message}
            />
          </div>
          <button
            onClick={handleChangePassword}
            className='w-[260px] h-[40px] hover:opacity-90 font-semibold text-[1.6rem] rounded-md bg-[#FF543E]'
          >
            Đổi mật khẩu
          </button>
        </div>

        {changePassClick ? (
          <div>
            <div className='flex justify-between items-center gap-16'>
              <div>
                <div>Mật Khẩu Mới*</div>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  placeholder='Mật Khẩu Mới'
                  register={register}
                  errorsMessage={errors.password?.message}
                />
              </div>
              <div>
                <div>Nhập Lại Mật Khẩu*</div>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  placeholder='Nhập Lại Mật Khẩu'
                  register={register}
                  errorsMessage={errors.password?.message}
                />
              </div>
            </div>
            <div className='flex mb-10 gap-5'>
              <input type='checkbox' onChange={handleTogglePassword} />
              Hiện mật khẩu
            </div>
          </div>
        ) : (
          <></>
        )}

        <div>
          <div>Số Điện Thoại*</div>
          <Input
            type='text'
            name='phone'
            placeholder='Họ và Tên'
            readOnly={true}
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

        <button className='w-full h-[40px] hover:opacity-90 flex justify-center items-center font-semibold text-[1.6rem] uppercase rounded-md bg-[#FF543E] mt-[40px]'>
          cập nhật
        </button>
      </form> */}
    </div>
  )
}
