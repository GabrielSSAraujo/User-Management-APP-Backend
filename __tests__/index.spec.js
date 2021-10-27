const app = require("../src/server")
const {User} = require("../src/app/models")
const request = require('supertest')
const bcrypt = require("bcrypt")
const truncate = require('./utils/truncate')

describe("test create admin", ()=>{
  beforeEach(async ()=>{
    await truncate();
  });

  it("shoud create amin user", async()=>{
    const salt = await bcrypt.genSalt(10);
	  const teste = await bcrypt.hash("addmin", salt);
    console.log(teste);
    const adminUser = {
      name: "admdin",
      email: "adimn@admin.com",
      password:  `${teste}`,
      level: 1
    }
    const user = await User.create(adminUser);

    const token = `adimn@admin.com:addmin`;
    const encodedToken = Buffer.from(token).toString('base64');
    console.log(encodedToken);

    const res = await request(app)
    .get("/login")
    .set('Authorization', `Basic ${encodedToken}`)
  
    console.log(res.statusCode);
    expect(res.statusCode).toBe(200);
  });
});