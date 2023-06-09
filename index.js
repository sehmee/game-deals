const config = require('./config.json');
const axios = require('axios');

module.exports.getGameDeals = async function () {
  try {
    const { data } = await axios.get(
      config.giveawayURL
    );

      return data;

  } catch (error) {
    throw error;
  }
};
