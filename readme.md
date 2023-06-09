# Game Deals

A public repository that can be installed using NPM for NodeJS applications. Using just 1 simple function will call the API of gamerpower.com and output all data.
## Installation

Install via NPM:
```bash
  npm i game-deals@latest
```

## Usage/Examples

```javascript
const gamedeals = require("game-deals");

gamedeals.getGameDeals(function (response) {
  console.log(response); // logs all response

  console.log(response[0].title) // logs title of first deal
});
```


## Config

For further adjustment there is a config file that will be used to store the static URL's to the API.

`giveawayURL` - API call url


## Object values

Use example below to get the title of the first deal.
```javascript
response[0].title
```

`.title` - Title

`.worth` - What the price was

`gamedals.thumbnail:` - Thumbnail URL

`.image` - Image URL

`.description` - A description of the game

`.instructions` - Claim instructions

`.open_giveaway_url` - URL to claim the deal

`.published_date` - Published date

`.type` - What type of deal

`.platforms` - PC/PS4/Steam/Epic games etc

`.end_date` - End date if available
## Authors

- [@sehmee](https://www.github.com/sehmee)


## Data source

This package uses the data source from https://www.gamerpower.com
