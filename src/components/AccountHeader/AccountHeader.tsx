import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FloatingPortal, useFloating } from '@floating-ui/react-dom-interactions'
import { motion, AnimatePresence } from 'framer-motion'

export default function AccountHeader() {
  const [open, setOpen] = useState(false)
  const { x, y, reference, floating, strategy } = useFloating()
  const showPopover = () => {
    setOpen(true)
  }
  const hidePopover = () => {
    setOpen(false)
  }
  return (
    <div className='container py-6 flex items-center justify-between'>
      <img src='./src/images/Logo.svg' alt='logo' className='w-[90px] h-[80px] cursor-pointer' />
      <div className='flex items-center gap-4'>
        <p className='mx-2 text-2xl text-white'>Quy Định</p>
        <p className='mx-2 text-2xl text-white'>FAQ</p>
        <div
          ref={reference}
          onMouseEnter={showPopover}
          onMouseLeave={hidePopover}
          className='w-[132px] h-[40px] flex justify-center items-center gap-3 border-[1px] border-[#787878] bg-[#000120] rounded-md text-white text-[1.6rem] hover:bg-[#FF543E] cursor-pointer'
        >
          <span> TP. Huế</span>
          <svg xmlns='http://www.w3.org/2000/svg' width='10' height='8' viewBox='0 0 7 5' fill='none'>
            <path
              d='M3.18225 4.40321L0 1.1008L1.06125 0L3.18225 2.2016L5.30325 0L6.3645 1.1008L3.18225 4.40321Z'
              fill='white'
            />
          </svg>
          <FloatingPortal>
            <AnimatePresence>
              {open && (
                <motion.div
                  ref={floating}
                  style={{
                    position: strategy,
                    top: y ?? 0,
                    left: x ?? 0,
                    width: 'max-content',
                  }}
                  initial={{ opacity: 0, transform: 'scale(0)' }}
                  animate={{ opacity: 1, transform: 'scale(1)' }}
                  exit={{ opacity: 0, transform: 'scale(0)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className='w-[260px] bg-[#2C2C2C4A] text-[#f1f1f1]  relative shadow-sm rounded-md top-4 right-20 border border-gray-200'>
                    <div className='flex flex-col py-2 text-[1.4rem]  '>
                      <button className='py-4 px-6 hover:bg-[#FF543E] text-left'>TP.  Hồ Chí Minh</button>
                      <button className='py-4 px-6 hover:bg-[#FF543E] text-left'>TP.  Đà Nẵng </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </FloatingPortal>
        </div>
        <Link
          to='/account'
          className='hover:bg-[#FF543E] px-3 min-w-[132px] h-[40px] flex justify-center items-center border-[1px] border-[#FF865F] bg-[#000120] rounded-md text-white text-[1.6rem]'
        >
          Đăng nhập - Đăng kí
        </Link>
      </div>
    </div>
  )
}
