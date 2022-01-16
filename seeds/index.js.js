const sequelize = require("../config/connection");
const seedUsers = require("./user-seeds");
const seedCouriers = require("./courier-seeds");
const seedAddresses = require("./address-seeds");
const seedShipments = require("./shipment-seeds");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");
  await seedCouriers();
  console.log("\n----- COURIERS SEEDED -----\n");
  await seedAddresses();
  console.log("\n----- ADDRESSES SEEDED -----\n");
  await seedShipments();
  console.log("\n----- SHIPMENTS SEEDED -----\n");
  process.exit(0);
};

seedDatabase();
