import * as yup from 'yup'

export const schemaLogin = yup.object({
  email: yup
    .string()
    .required('Email là bắt buộc')
    .email('Email không đúng định dạng')
    .min(5, 'Độ dài từ 5-160 kí tự')
    .max(160, 'Độ dài từ 5-160 kí tự'),
  password: yup
    .string()
    .required('Password là bắt buộc')
    .min(6, 'Độ dài từ 6 - 160 ký tự')
    .max(160, 'Độ dài từ 6 - 160 ký tự')
})

const loginSchema = schemaLogin

export type SchemaLogin = yup.InferType<typeof schemaLogin>

export const schemaRegister = yup.object({
  email: yup
    .string()
    .required('Email là bắt buộc')
    .email('Email không đúng định dạng')
    .min(5, 'Độ dài từ 5-160 kí tự')
    .max(160, 'Độ dài từ 5-160 kí tự'),
  password: yup
    .string()
    .required('Password là bắt buộc')
    .min(6, 'Độ dài từ 6 - 160 ký tự')
    .max(160, 'Độ dài từ 6 - 160 ký tự'),
  full_name: yup
    .string()
    .required('Họ tên là bắt buộc')
    .min(5, 'Độ dài từ 5-160 kí tự')
    .max(160, 'Độ dài từ 5-160 kí tự'),
  gender: yup.string().required('Giới tính là bắt buộc').oneOf(['male', 'female', 'other']),
  confirm_password: yup
    .string()
    .required('Xác nhận mật khẩu là bắt buộc')
    .oneOf([yup.ref('password')]),
  phone: yup
    .number()
    .required('Số điện thoại là bắt buộc')
    .min(10, 'Số điện thoại phải có ít nhất 10 chữ số')
    .max(11, 'Số điện thoại phải có tối đa 11 chữ số'),
  day_of_birth: yup.date().required('Ngày sinh là bắt buộc'),
  address: yup
    .string()
    .required('Địa chỉ là bắt buộc')
    .min(5, 'Độ dài từ 5-160 kí tự')
    .max(160, 'Độ dài từ 5-160 kí tự')
})

const registerSchema = schemaLogin

export type SchemaRegister = yup.InferType<typeof registerSchema>
