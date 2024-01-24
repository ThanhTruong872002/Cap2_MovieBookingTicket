import { Link } from 'react-router-dom'

export default function AccountHeader() {
  return (
    <div className='container py-6 flex items-center justify-between'>
      <img src='./src/images/Logo.svg' alt='logo' className='w-[80px] h-[80px]' />
      <div className='flex items-center gap-4'>
        <p className='mx-2 text-2xl text-white'>Quy Định</p>
        <p className='mx-2 text-2xl text-white'>FAQ</p>
        <button className='w-[132px] h-[40px] flex justify-center items-center gap-2 border-[1px] border-[#686767] bg-[#000120] rounded-sm text-white text-[1.6rem]'>
          <button> TP. Huế</button>
          <svg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 7 5' fill='none'>
            <path
              d='M3.18225 4.40321L0 1.1008L1.06125 0L3.18225 2.2016L5.30325 0L6.3645 1.1008L3.18225 4.40321Z'
              fill='white'
            />
          </svg>
        </button>
        <Link
          to='/account'
          className='px-2 min-w-[132px] h-[40px] flex justify-center items-center border-[1px] border-[#FF865F] bg-[#000120] rounded-sm text-white text-[1.6rem]'
        >
          Đăng nhập - Đăng kí
        </Link>
      </div>
    </div>
  )
}
