# Game Deals

A public repository that can be installed using NPM for NodeJS applications. Using just 1 simple function will call the API of gamerpower.com and output all data.
## Installation

Install by downloading all the files. I prefer PM2 to start the process

Install via NPM:
```bash
  npm i game-deals@latest
```

## Usage/Examples

```javascript
const gamedeals = require("game-deals");

gamedeals.getGameDeals(function (response) {
  console.log(response);
});
```


## Environment Variables

For further adjustment there is a config file that will be used to store the static URL's to the API.

`giveawayURL` - API call url
## Authors

- [@sehmee](https://www.github.com/sehmee)


## Data source

This package uses the data source from https://www.gamerpower.com/api-read
