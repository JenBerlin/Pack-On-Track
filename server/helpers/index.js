const moment = require("moment");

const formatDate = (date) => moment(date).format("M/D/YYYY");

const formatDatePicker = (date) => moment(date).format("YYYY-MM-DD");

const helpers = {
  formatDate,
  formatDatePicker
};


module.exports = helpers;
