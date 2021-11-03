export const Query = {
  greetings: (_, { name }) => `Bonjour ${name || "tout le monde"}! Quoi de neuf?`,
  getUsers: (parent, args, { db }, info) => db.users,
  getUserById: (parent, { id }, { db }, info) => {
    console.log(id)
    return db.users.find(user=>user.id===id)
  }
};
