const {sequelize } = require('./app/models');
const bcrypt = require("bcrypt");
const {User} = require('./app/models')

async function hashPassword(pass, saltRounds = 10) {
	const salt = await bcrypt.genSalt(saltRounds);
	return bcrypt.hash(pass, salt);
}

const adminUser = {
  name: "admdin",
  email: "admian@admin.com",
  password: "addmin",
  level: 1
};

function initDatabase(){
sequelize.sync().then(
    () => {
      console.log(`conectado ao banco de dados com sucesso`);
    }
);
}

async function createAdmin() {
  try {
    await initDatabase();
    console.log("admin user created");
  } catch (err) {
    console.error(`could not connect to database: ${err}`);
  }

  console.log("connected to database");

  try {
    const newAdmin = await User.create({
      name: adminUser.name,
      email: adminUser.email,
      password: await hashPassword(adminUser.password),
      level: adminUser.level,
    });

    if (!newAdmin) {
      console.error("failed to create user");
      return;
    }
    console.log(`created user: ${JSON.stringify(newAdmin)}`);
  } catch (err) {
    console.log(`could not create user: ${err}`);
  }
}

try {
  createAdmin().then(
    () => {
      process.exit(0);
    },
    () => {
      process.exit(1);
    }
  );
} catch (err) {
  console.error(`error: ${err}`);
  process.exit(1);
}