# User-Management-APP-Backend

docker-compose up -d --build
docker exec -it user_controller_app /bin/bash
npx sequelize db:migrate
node ./src/createAdmin.js
