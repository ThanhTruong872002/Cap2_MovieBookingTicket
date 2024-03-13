import Footer from '../../components/Footer'
import Header from '../../components/Header'

interface Props {
  children: React.ReactNode
}

export default function MainLayOut({ children }: Props) {
  return (
    <div className='bg-[#1A1D29]'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
