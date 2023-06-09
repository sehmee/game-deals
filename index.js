const config = require('./config.json');

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
