import AccountHeader from '../../components/AccountHeader'
import Login from './Login'
import Register from './Register'

export default function Account() {
  return (
    <div className='bg-[#0C1423]'>
      <AccountHeader />
      <div>
        <Login />
        <Register />
      </div>
    </div>
  )
}
