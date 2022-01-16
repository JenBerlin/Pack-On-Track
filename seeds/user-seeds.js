const { User } = require("../models");

const userData = [
  {
    user_name: "Quentin Lernantino",
    email: "qlernantino@esmt.org",
    password: "Lernan?ino",
  },
  {
    user_name: "Florian Schulz",
    email: "florian@berlin.com",
    password: "FloriantheMan$$$",
  },
  {
    user_name: "Carolina Juarez",
    email: "carojuarez@coldmail.com",
    password: "Jhh?K45$",
  },
];

const seedUsers = () => User.bulkCreate(userData,
  {
    individualHooks: true,
    returing: true
  }
  );

module.exports = seedUsers;
