import AccountHeader from '../../components/AccountHeader'
import Login from './Login'
import Register from './Register'

export default function Account() {
  return (
    <div className='bg-[#0C1423] h-[100vh]'>
      <AccountHeader />
      <div className='container'>
        <div className='flex'>
          <div className='w-[35%]'>
            <Login />
          </div>
          <div className='w-[65%]'>
            <Register />
          </div>
        </div>
      </div>
    </div>
  )
}
