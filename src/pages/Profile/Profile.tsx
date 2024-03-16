import ProfileInformation from 'src/components/ProfileInformation'
import ProfileUpdate from 'src/components/ProfileUpdate'
import TransitionHistory from 'src/components/TransitionHistory/TransitionHistory'

export default function Profile() {
  return (
    <div className='flex flex-col items-center justify-center text-2xl text-gray-200 pb-20 m-20 gap-32'>
      <h1 className='text-white text-[48px] font-semibold'>Tài khoản</h1>
      <div className='flex gap-40'>
        <ProfileUpdate />
        <ProfileInformation />
      </div>
      <TransitionHistory />
    </div>
  )
}
