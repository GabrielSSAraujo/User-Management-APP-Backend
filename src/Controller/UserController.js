const { user } = require("../Model");

async function createUser(req, res) {
  try {
    const {name, email, password} = req.body;
    console.log(req.body);
    const addUser = await user.create(req.body);
    console.log(addUser);
    return res.status(200).json(addUser);

  } catch (error) {
    console.log(error);
    return res.status(500);
  }
}
module.exports = {
  createUser,
};
