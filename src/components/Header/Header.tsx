import Popover from '../Popover'
import Button from '../Button'

export default function Header() {
  return (
    <div className='relative z-20'>
      <div className='container p-6 flex items-center justify-between'>
        <div className=''>
          <img src='./src/images/Logo.svg' alt='logo' className='w-[90px] h-[80px] cursor-pointer' />
        </div>
        <div>
          <ul className=' flex gap-10 items-center justify-center text-[1.8rem] font-bold text-white'>
            <li className='py-4 cursor-pointer'>Lịch Chiếu</li>
            <li className='py-4 cursor-pointer'>Hệ Thống Rạp</li>
            <li className='py-4 cursor-pointer'>Khuyến mãi/Sự kiện</li>
            <li className='py-4 cursor-pointer'>Cửa hàng</li>
            <li className='flex items-center py-2 cursor-pointer'>
              <span>Khác</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='w-6 h-6 ml-2'
              >
                <path stroke-linecap='round' stroke-linejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
              </svg>
            </li>
          </ul>
        </div>
        <div className=''>
          <div className='flex gap-4'>
            <Popover
              renderPopover={
                <div className='w-[260px] bg-[#2C2C2C4A] text-[#f1f1f1]  relative shadow-sm rounded-md top-4 right-20 border border-gray-200'>
                  <div className='flex flex-col py-2 text-[1.4rem]  '>
                    <button className='py-4 px-6 hover:bg-[#FF543E] text-left'>TP. Hồ Chí Minh</button>
                    <button className='py-4 px-6 hover:bg-[#FF543E] text-left'>TP. Đà Nẵng </button>
                    <button className='py-4 px-6 hover:bg-[#FF543E] text-left'>TP. Hà Nội </button>
                    <button className='py-4 px-6 hover:bg-[#FF543E] text-left'>TP. Huế </button>
                  </div>
                </div>
              }
              className='w-[132px] h-[45px] flex justify-center items-center gap-3 border-[1px] border-[#787878] bg-[#000120] rounded-md text-white text-[1.6rem] hover:bg-[#FF543E] cursor-pointer'
            >
              <span> TP. Huế</span>
              <svg xmlns='http://www.w3.org/2000/svg' width='10' height='8' viewBox='0 0 7 5' fill='none'>
                <path
                  d='M3.18225 4.40321L0 1.1008L1.06125 0L3.18225 2.2016L5.30325 0L6.3645 1.1008L3.18225 4.40321Z'
                  fill='white'
                />
              </svg>
            </Popover>
            <Popover
              renderPopover={
                <div className='w-[320px] p-5 bg-[#1a1d29] text-[#f1f1f1]  relative shadow-sm rounded-md top-4 right-20 border border-gray-200'>
                  <div className='flex flex-col py-2 text-[1.4rem]  '>
                    <form>
                      <div className='mt-6'>
                        <div>Email*</div>
                        <input
                          type='email'
                          name=''
                          className='w-[278px] h-[36px] px-3 mt-4 font-semibold rounded-lg'
                          placeholder='Nhập địa chỉ email tại đây'
                        />
                      </div>
                      <div className='mt-6'>
                        <div>Mật Khẩu*</div>
                        <input
                          type='password'
                          name=''
                          className='w-[278px] h-[36px] px-3 mt-4 font-semibold rounded-lg'
                          placeholder='Nhập địa chỉ email tại đây'
                        />
                      </div>
                      <div>
                        <button className='w-full h-[40px] hover:opacity-90 flex justify-center items-center font-semibold text-[1.6rem] uppercase rounded-md bg-[#FF543E] mt-[55px]'>
                          Đăng Nhập
                        </button>
                        <button className='w-full mt-10 h-[40px] hover:opacity-90 flex justify-center items-center font-semibold text-[1.6rem] uppercase rounded-md bg-[#1a1d29]  border-[1px] border-orange'>
                          Đăng Kí Thành Viên
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              }
            >
              <Button to='/' width='150px' height='45px' classnames='font-semibold'>
                Đăng nhập/ Đăng ký
              </Button>
            </Popover>
            <Button to='/' width='130px' height='45px' classnames='bg-orange px-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='white'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='w-10 h-10 mr-4'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z'
                />
              </svg>
              <span className='font-semibold'>MUA VÉ</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
