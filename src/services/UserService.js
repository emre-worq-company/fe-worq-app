const users = require("@/dummy/users.json");

const userService = (email, password) => {
  const user = users.find((user) => {
    const emailFound = email === user.email;
    const isPasswordCorrect = password === user.password;
    const userFound = emailFound && isPasswordCorrect;
    return userFound;
  });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  return user;
}

export default userService;