const User = require("../Model/User");

function teste(req, res) {
  return res.send("Testing nodemoon");
}

async function cadastroUser(req, res) {
  try {
    const { user } = req.body;
    const response = await User.create(user);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  teste,
  cadastroUser,
};
