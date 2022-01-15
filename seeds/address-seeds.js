const { Address } = require("../models");

const addressData = [
  {
    user_id: 1,
    first_name: "Quentin",
    last_name: "Lernantino",
    street: "Paris Avenue",
    street_number: "15-A",
    company: "Lernantino Productions",
    post_number: 15005,
    city: "Paris",
    country: "France",
    library_keyword: "Home",
  },
  {
    user_id: 1,
    first_name: "Julia",
    last_name: "Roberts",
    street: "Hollywood Street",
    street_number: "28",
    additional_line: "Apartment B",
    post_number: 28001,
    city: "Los Angeles",
    country: "United States",
    library_keyword: "Julia's house",
  },
  {
    user_id: 2,
    first_name: "Florian",
    last_name: "Schulz",
    street: "Weserstr",
    street_number: "170",
    company: "Neukölln Startup",
    additional_line: "C/O Perez",
    post_number: 12045,
    city: "Berlin",
    country: "Germany",
    library_keyword: "Office",
  },
  {
    user_id: 3,
    first_name: "Carolina",
    last_name: "Juarez",
    street: "Benvenuto Cellini",
    street_number: "7823",
    post_number: 7700785,
    city: "Santiago",
    country: "Chile",
    library_keyword: "Casa",
  },
];

const seedAddresses = () => Address.bulkCreate(addressData);

module.exports = seedAddresses;
