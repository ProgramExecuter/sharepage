// Get a User
const getUser = (req, res) => {
  res.send(`GET /user/${req.params.id}`);
};

// Edit a User
const editUser = (req, res) => {
  res.send(`PATCH /user/${req.params.id}`);
};

// Delete a User
const deleteUser = (req, res) => {
  res.send(`DELETE /user/${req.params.id}`);
};

export { getUser, editUser, deleteUser };
