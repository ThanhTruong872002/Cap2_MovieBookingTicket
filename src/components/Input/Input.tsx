import { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface InputType {
  type?: React.HTMLInputTypeAttribute | undefined
  name: string
  placeholder?: string
  className?: string
  autoComplete?: string
  register: UseFormRegister<any>
  rules?: RegisterOptions
  errorsMessage?: string
}

export default function Input({
  type,
  name,
  placeholder,
  className,
  autoComplete,
  register,
  rules,
  errorsMessage,
}: InputType) {
  return (
    <div className={className}>
      <input
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        {...register(name, rules)}
        className='px-[12px] mt-4 text-2xl text-white bg-transparent border-[1px] border-[#454D6A] min-w-[348px] h-[40px] rounded-md'
      />
      <div className='my-4 text-red-600 text-xl min-h-[1.4rem] '>{errorsMessage}</div>
    </div>
  )
}
