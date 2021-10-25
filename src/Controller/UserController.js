const { user } = require("../Model");
const jwt = require('../Auth/jwt');
const bcrypt = require("bcrypt");
const privilegeUsers = {
  admin: 1,
  common: 2,
};


async function findUserLevel(req){
  const id = Number.parseInt(req.decoded.User,10);
  const User = await user.findByPk(id);
  return User.level;
}

async function hashPassword(pass, saltRounds = 10) {
	const salt = await bcrypt.genSalt(saltRounds);
	return bcrypt.hash(pass, salt);
}


async function createUser(req, res) {
  try {
    const {name, email, password, level} = req.body;
    const requesterLevel = await findUserLevel(req);

    if(requesterLevel != privilegeUsers.admin){
      return res.status(401).json({message: "Usuário sem permissão de admin"})
    }
    
    const addUser = await user.create({
      name: name,
      email: email,
      password: await hashPassword(password),
      level: level
    });

    return res.status(200).json(addUser);

  } catch (error) {
    console.log(error);
    return res.status(500);
  }
}

async function userLogin(req, res){
  //passando dados para login via header
  const [, hash] = req.headers.authorization.split(' ');
  const [email, password] = Buffer.from(hash, 'base64').toString().split(':');
  console.log(email, password);

  try{
    const User = await user.findOne( {where: { email: email }});

    if (User && (await bcrypt.compare(password, User.password))) {

      const token = jwt.sign({User: User.id});
      return res.status(200).json({User,token});
    }
    return res.status(200).json({User,token});
  }catch(error){
    return res.status(401).json({message: "Não foi possivel realizar o login"})
  }
}

async function getInfoUser(req,res){
    const id =  Number.parseInt(req.decoded.User,10);

    try{
      const userInfo = await user.findOne( {where: { id: id }});

    return res.status(200).json({userInfo});

  }catch(error){
    return res.status(500).json({message: "Erro ao buscar usuário"});
  }
}

async function listAllUsers(req,res){

  try{
    const userLevel = await findUserLevel(req);

    if(userLevel!=privilegeUsers.admin){
      return res.status(401).json({message: "Usuário nao possui permissão de administrador"});
    }

    const users = await user.findAll();
    console.log(users);
    return res.status(200).json(users);

  }catch(error){
    return res.status(500).json({message: "Erro ao buscar usuários"});
  }
}

module.exports = {
  createUser,
  userLogin,
  getInfoUser,
  listAllUsers,
};
