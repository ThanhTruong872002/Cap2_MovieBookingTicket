import { useContext, useState } from 'react'
import { AppContext } from 'src/contexts/app.context'
import '../../index.css'

export default function ProfileUpdate() {
  const { isAuthenticated, profile } = useContext(AppContext)
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
      <form noValidate className='p-16'>
        <div className='mb-8'>
          <div>Họ và tên*</div>
          <input
            className='px-[12px] w-full mt-4 text-2xl text-white bg-transparent border-[1px] border-[#454D6A] min-w-[348px] h-[40px] rounded-md'
            type='text'
            name='fullName'
            placeholder='Họ và Tên'
            value={profile?.fullName}
          />
        </div>
        <div className='mb-8'>
          <div>
            <div>Địa Chỉ Email*</div>
            <input
              className='px-[12px] mt-4 w-full text-2xl text-white bg-slate-600 cursor-not-allowed min-w-[348px] h-[40px] rounded-md'
              type='email'
              name='email'
              placeholder='Địa chỉ email'
              value={!profile?.email ? 'null' : profile.email}
              disabled
            />
          </div>
        </div>
        <div className='flex justify-between items-center gap-16 mb-8'>
          <div>
            <div>Mật Khẩu*</div>
            <input
              className='px-[12px] mt-4 w-[420px] text-2xl text-white  bg-gray-600 cursor-not-allowed min-w-[348px] h-[40px] rounded-md'
              type='password'
              placeholder='Mật Khẩu'
              name='password'
              disabled
            />
          </div>
          <button
            onClick={handleChangePassword}
            className='w-[260px] h-[40px] hover:opacity-90 font-semibold text-[1.6rem] rounded-md bg-[#FF543E] mt-10'
          >
            Đổi mật khẩu
          </button>
        </div>

        {changePassClick ? (
          <div>
            <div className='flex justify-between items-center gap-16 mt-10'>
              <div>
                <div>Mật Khẩu Mới*</div>

                <input
                  className='px-[12px] mt-4 text-2xl text-white bg-transparent border-[1px] border-[#454D6A] min-w-[348px] h-[40px] rounded-md'
                  type={showPassword ? 'text' : 'password'}
                  name='newPassword'
                  placeholder='Mật Khẩu Mới'
                />
              </div>
              <div>
                <div>Nhập Lại Mật Khẩu*</div>
                <input
                  className='px-[12px] mt-4 text-2xl text-white bg-transparent border-[1px] border-[#454D6A] min-w-[348px] h-[40px] rounded-md'
                  type={showPassword ? 'text' : 'password'}
                  name='confirmPassword'
                  placeholder='Nhập Lại Mật Khẩu'
                />
              </div>
            </div>
            <div className='flex mb-10 gap-5 mt-4'>
              <input type='checkbox' onChange={handleTogglePassword} />
              Hiện mật khẩu
            </div>
          </div>
        ) : (
          <></>
        )}

        <div className='mb-8'>
          <div>Số Điện Thoại*</div>
          <input
            className='px-[12px] mt-4 w-full text-2xl text-white bg-gray-600 cursor-not-allowed min-w-[348px] h-[40px] rounded-md outline-none'
            type='text'
            name='phone'
            placeholder='Số điện thoại'
            disabled
            value={!profile?.phone ? 'null' : 'hehe'}
          />
        </div>

        <div className='mb-8'>
          <div className='mb-5'>Ngày sinh*</div>
          <input
            type='date'
            id='birth'
            value={!profile?.birthday ? Date.now() : profile.birthday}
            className='text-white bg-transparent border-[1px] border-[#454D6A] min-w-[348px] h-[40px] rounded-md px-5 pt-2 cursor-pointer '
          />
        </div>

        <div className='mt-6'>
          <div className='mb-6'>Tỉnh/Thành Phố*</div>
          <div className='select'>
            <select defaultValue={profile?.city} className='select border-[1px] border-[#454D6A] outline-none'>
              <option value='Đà Nẵng'>Đà Nẵng</option>
              <option value='Hồ Chí Minh'>Hồ Chí Minh</option>
              <option value='Hà Nội'>Hà Nội</option>
              <option value='Huế'>Huế</option>
            </select>
          </div>
        </div>

        <button className='w-full h-[40px] hover:opacity-90 flex justify-center items-center font-semibold text-[1.6rem] uppercase rounded-md bg-[#FF543E] mt-[40px]'>
          cập nhật
        </button>
      </form>
    </div>
  )
}
