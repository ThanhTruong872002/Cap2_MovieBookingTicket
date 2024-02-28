import { Link } from 'react-router-dom'

interface Props {
  children: React.ReactNode
  to: string
  width: string
  height: string
  classnames?: string
}

export default function Button({ children, to, width, height, classnames }: Props) {
  return (
    <Link
      to={to}
      className={`${classnames} hover:bg-[#FF543E] px-3 w-[${width}] h-[${height}] font-sans flex justify-center items-center border-[1px] border-[#FF865F] bg-[#000120] rounded-xl text-white text-[1.6rem]`}
    >
      {children}
    </Link>
  )
}
