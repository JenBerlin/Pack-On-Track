const { User } = require("../models");

const userData = [
  {
    id: 1,
    user_name: "Quentin Lernantino",
    email: "qlernantino@esmt.org",
    password: "Lernan?ino",
  },
  {
    id: 2,
    user_name: "Florian Schulz",
    email: "florian@berlin.com",
    password: "FloriantheMan$$$",
  },
  {
    id: 3,
    user_name: "Carolina Juarez",
    email: "carojuarez@coldmail.com",
    password: "Jhh?K45$",
  },
];

const seedUsers = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returing: true,
  });

module.exports = seedUsers;
