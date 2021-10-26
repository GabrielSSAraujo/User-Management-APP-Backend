const { User } = require("../app/models/");
const jwt = require('../Auth/jwt');
const bcrypt = require("bcrypt");
const privilegeUsers = {
  admin: 1,
  common: 2,
};


async function findUserLevel(req){
  console.log(req.decoded);
  const id = Number.parseInt(req.decoded.user,10);
  const user = await User.findByPk(id);
  return user.level;
}

async function hashPassword(pass, saltRounds = 10) {
	const salt = await bcrypt.genSalt(saltRounds);
	return bcrypt.hash(pass, salt);
}


async function createUser(req, res) {
  try {
    const {name, email, password, level} = req.body;
    console.log(req.body);
    const requesterLevel = await findUserLevel(req);
    console.log(requesterLevel);
    if(requesterLevel != privilegeUsers.admin){
      return res.status(401).json({message: "Usuário sem permissão de admin"})
    }
    
    const addUser = await User.create({
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
    const user = await User.findOne( {where: { email: email }});

    if (user && (await bcrypt.compare(password, user.password))) {

      const token = jwt.sign({user: user.id});
      return res.status(200).json({user,token});
    }
    return res.status(200).json({user,token});
  }catch(error){
    console.log(error);
    return res.status(401).json({message: "Não foi possivel realizar o login"})
  }
}

async function getInfoUser(req,res){
    const id =  Number.parseInt(req.decoded.user,10);

    try{
      const userInfo = await User.findOne( {where: { id: id }});

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

    const users = await User.findAll();
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
