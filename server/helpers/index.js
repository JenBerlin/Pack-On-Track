const moment = require("moment");

const formatDate = (date) => moment(date).format("M/D/YYYY");

const matchCourierId = (courierId, shipmentCourierId) => {
  return shipmentCourierId === courierId;
}


const helpers = {
  formatDate,
  matchCourierId
};


module.exports = helpers;
