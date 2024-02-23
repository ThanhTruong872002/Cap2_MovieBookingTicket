const mongoose = require('mongoose')
const softDelete = require('mongoose-delete')

const TokenSchema = new mongoose.Schema(
  {
    refreshToken: { type: String, required: true },
    ip: { type: String, required: true },
    userAgent: { type: String, required: true },
    isValid: { type: Boolean, default: true },
    customer: {
      type: mongoose.Types.ObjectId,
      ref: 'Customer',
      required: true,
    },
  },
  { timestamps: true },
)
TokenSchema.plugin(softDelete, { deletedAt: true, overrideMethods: true })

module.exports = mongoose.model('Token', TokenSchema)
