import { useContext } from 'react'
import qr_icon from '../../images/ion_qr-code-sharp.svg'
import { AppContext } from 'src/contexts/app.context'

export default function ProfileInformation() {
  const { isAuthenticated, setIsAuthenticated, setProfile, profile } = useContext(AppContext)

  return (
    <div className='flex flex-col p-10 pb-0 gap-12 border-solid border-2 text-[#686767] border-[#FF551F] rounded-2xl h-[200px] min-w-[500px]'>
      <div className='flex gap-8'>
        {isAuthenticated ? (
          <>
            <img src={qr_icon} alt='' className='w-[140px] h-[140px]' />
            <div className='flex flex-col gap-9 t'>
              <span className='flex gap-2'>
                Tên đăng nhập: <p className='text-white'> {profile?.email}</p>
              </span>
              <span className='flex gap-2'>
                Số thẻ: <p className='text-white'> xxxxxxxxxxxxx</p>
              </span>
              <span className='flex gap-2'>
                Hạng thẻ: <p className='text-white'> Kim cương</p>
              </span>
              <span className='flex gap-2'>
                Ngày đăng ký: <p className='text-white'> dd/mm/yyyy</p>
              </span>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}
