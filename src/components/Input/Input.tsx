import { useState } from 'react'
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
  readOnly?: boolean
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
  readOnly,
}: InputType) {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <div className={className}>
      <input
        readOnly={readOnly}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        {...register(name, rules)}
        // className='px-[12px] mt-4 text-2xl text-white bg-transparent border-[1px] border-[#454D6A] min-w-[348px] h-[40px] rounded-md'
        className={`px-[12px] mt-4 w-full text-2xl text-white bg-transparent border-[1px] border-[#454D6A] ${
          readOnly ? 'bg-gray-600 cursor-not-allowed' : 'bg-gray-700'
        } min-w-[348px] h-[40px] rounded-md ${readOnly && isFocused ? 'outline-none' : ''}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <div className='my-4 text-red-600 text-xl min-h-[1.4rem] '>{errorsMessage}</div>
    </div>
  )
}
