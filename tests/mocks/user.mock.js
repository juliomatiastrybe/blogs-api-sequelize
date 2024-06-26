// const { createToken } = require('../../utils/auth');

const userId1 = {
  id: 1,
  displayName: 'Lewis Hamilton',
  email: 'lewishamilton@gmail.com',
  password: '123456',
  image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg',
};

const userId2 = {
  id: 2,
  displayName: 'Michael Schumacher',
  email: 'MichaelSchumacher@gmail.com',
  password: '123456',
  image: 'https://sportbuzz.uol.com.br/media/_versions/gettyimages-52491565_widelg.jpg',
};

const newUser = {
  displayName: 'Ayrton Senna',
  email: 'ayrtonsenna@gmail.com',
  password: '123456',
  image: 'https://i.pinimg.com/564x/6a/80/ba/6a80ba4f73cd18d9e61fb51dad15b537.jpg',
};

const users = [
  {
    id: 1,
    displayName: 'Lewis Hamilton',
    email: 'lewishamilton@gmail.com',
    password: '123456',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg',
  },
  {
    id: 2,
    displayName: 'Michael Schumacher',
    email: 'MichaelSchumacher@gmail.com',
    password: '123456',
    image: 'https://sportbuzz.uol.com.br/media/_versions/gettyimages-52491565_widelg.jpg',
  },
];

const usersModelSequelize = {
  dataValues: users,
}

const userModelSequelize = {
  dataValues: userId1,
  ...userId1,
}

const newUserModelSequelize = {
  dataValues: newUser,
  id: 3,
  ...newUser,
};

const usersWithoutPass = [
  {
    id: 1,
    displayName: 'Lewis Hamilton',
    email: 'lewishamilton@gmail.com',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg',
  },
  {
    id: 2,
    displayName: 'Michael Schumacher',
    email: 'MichaelSchumacher@gmail.com',
    image: 'https://sportbuzz.uol.com.br/media/_versions/gettyimages-52491565_widelg.jpg',
  },
];

// const { password, ...user } = userId1;

// const tokenUserId1 = createToken(user);

const loginBody = {
  email: 'lewishamilton@gmail.com',
  password: '123456',
};

module.exports = {
  userId1,
  userId2,
  loginBody,
  users,
  usersWithoutPass,
  usersModelSequelize,
  userModelSequelize,
  newUser,
  newUserModelSequelize,
};