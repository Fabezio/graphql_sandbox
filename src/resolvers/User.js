export const User = ({ id }, args, { db }, info) => {
    console.log(user)
    return db.users.find(user=> user.id===id)
  }
