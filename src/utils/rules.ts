import * as yup from 'yup'

export const schema = yup.object({
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
  fullName: yup
    .string()
    .required('Họ tên là bắt buộc')
    .min(5, 'Độ dài từ 5-160 kí tự')
    .max(160, 'Độ dài từ 5-160 kí tự'),
  sex: yup.string().required('Giới tính là bắt buộc'),
  confirm_password: yup
    .string()
    .required('Xác nhận mật khẩu là bắt buộc')
    .oneOf([yup.ref('password')]),
  phone: yup.number().required('Số điện thoại là bắt buộc').min(10, 'Số điện thoại phải có ít nhất 10 chữ số'),
  birth: yup.date().required('Ngày sinh là bắt buộc'),
  address: yup.string().required('Địa chỉ là bắt buộc'),
})

// const schemaRegister = schema.omit([ 'phone','confirm_password','birth',])

export type Schema = yup.InferType<typeof schema>
