import qr_icon from '../../images/ion_qr-code-sharp.svg'

export default function ProfileInformation() {
  return (
    <div className='flex flex-col p-10 pb-0 gap-12 border-solid border-2 text-[#686767] border-[#FF551F] rounded-2xl h-[200px] min-w-[500px]'>
      <div className='flex gap-8'>
        <img src={qr_icon} alt='' className='w-[140px] h-[140px]' />
        <div className='flex flex-col gap-9 t'>
          <span className='flex gap-2'>
            Tên đăng nhập: <p className='text-white'> johndoe@gmail.com</p>
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
      </div>
    </div>
  )
}
