export default function Footer() {
  return (
    <div className='bg-[#0C1423]'>
      <div className='container flex items-center justify-between  py-[80px] '>
          <div>
            <h2 className='font-bold text-[2rem] text-white'>VỀ H3T MOVIE</h2>
            <div className='my-6 w-[117px] h-[12px] bg-[#FF551F] rounded-2xl'></div>
            <ul className='flex flex-col gap-4 text-[16px] font-semibold mt-4 text-white'>
              <li>Hệ thống rạp</li>
              <li>Cụm rạp</li>
              <li>Liên hệ</li>
              <li>
                <img
                  src='https://demo.bhdstar.vn/wp-content/uploads/2023/08/image-21.png'
                  alt=''
                  className='w-[190px] h-[72px] mt-4'
                />
              </li>
            </ul>
          </div>
          <div>
            <h2 className='font-bold text-[2rem] text-white'>QUY ĐỊNH & ĐIỀU KHOẢN</h2>
            <div className='my-6 w-[117px] h-[12px] bg-[#FF551F] rounded-2xl'></div>
            <ul className='flex flex-col gap-4 text-[16px] font-semibold mt-4 text-white'>
              <li>Quy định thành viên</li>
              <li>Điều khoản</li>
              <li>Hướng dẫn đặt vé trực tuyến</li>
              <li>Quy định và chính sách chung</li>
              <li>Chính sách bảo vệ thông tin cá nhân của người tiêu dùng</li>
            </ul>
          </div>
          <div>
            <h2 className='font-bold text-[2rem] text-white'>CHĂM SÓC KHÁCH HÀNG </h2>
            <div className='my-6 w-[117px] h-[12px] bg-[#FF551F] rounded-2xl'></div>
            <ul className='flex flex-col gap-4 text-[16px] font-semibold mt-4 text-white'>
              <li>Hotline: 19002099</li>
              <li>Giờ làm việc: 9:00 - 22:00 (Tất cả các ngày bao gồm cả Lễ, Tết)</li>
              <li>Email hỗ trợ: cskh@bhdstar.vn</li>
              <li className='uppercase mt-4'>
                <span>Mạng Xã Hội</span>
                <div className='flex gap-4 mt-6'>
                  <a href='https://www.facebook.com/profile.php?id=100012255758419'>
                    <img src='./src/images/logos_facebook.svg' alt='' />
                  </a>
                  <a href='https://www.facebook.com/profile.php?id=100012255758419'>
                    <img src='./src/images/logos_tiktok-icon.svg' alt='' />
                  </a>
                  <a href='https://www.facebook.com/profile.php?id=100012255758419'>
                    <img src='./src/images/skill-icons_instagram.svg' alt='' />
                  </a>
                </div>
              </li>
            </ul>
          </div>
      </div>
    </div>
  )
}
