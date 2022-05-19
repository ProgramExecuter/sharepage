// Login
const loginUser = (req, res) => {
  res.send("POST /auth/login");
};

// SignUp
const signupUser = (req, res) => {
  res.send("POST /auth/signup");
};

// Logout
const logoutUser = (req, res) => {
  res.send("POST /auth/logout");
};

export { loginUser, signupUser, logoutUser };
