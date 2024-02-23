const createTokenUser = (user) => {
  return {
    id: user._id,
    fullName: user.fullName,
    email: user.email,
    sex: user.sex || '',
    phone: user.phone || '',
    birthday: user.birthday || '',
    city: user.city || '',
  }
}

module.exports = createTokenUser
