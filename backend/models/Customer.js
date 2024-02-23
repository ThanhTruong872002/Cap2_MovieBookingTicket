const mongoose = require('mongoose')
const validator = require('validator')
const softDelete = require('mongoose-delete')
const bcrypt = require('bcryptjs')

const CustomerSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Vui lòng cung cấp tên đầy đủ của bạn'],
      minlength: 3,
      maxlength: 40,
    },
    email: {
      type: String,
      required: [true, 'Vui lòng cung cấp email'],
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: 'Vui lòng cung cấp email hợp lệ',
      },
    },
    password: {
      type: String,
      required: [true, 'Vui lòng cung cấp mật khẩu'],
      validate: {
        validator: validator.isStrongPassword,
        message: 'Vui lòng cung cấp mật khẩu đủ mạnh',
      },
    },
    sex: {
      type: String,
      enum: ['nam', 'nữ', 'khác'],
    },
    phone: {
      type: String,
      minlength: 11,
      maxlength: 11,
      validate: {
        validator: function (num) {
          return validator.isMobilePhone(num, 'vi-VN')
        },
        message: (props) => `${props.value} không phải là một số điện thoại hợp lệ!`,
      },
    },
    birthday: {
      type: Date,
    },
    city: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
)
CustomerSchema.plugin(softDelete, { deletedAt: true, overrideMethods: true })
CustomerSchema.pre('save', async function () {
  if (!this.isModified('password')) {
    return
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})
CustomerSchema.methods.comparePassword = async function (passCompare) {
  const isMatch = await bcrypt.compare(passCompare, this.password)
  return isMatch
}

module.exports = mongoose.model('Customer', CustomerSchema)
