# Tweet Bot

This application is a bot that tweets and retweets

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
node.js

twitter account

twitter API

npm packages: twit, node-twitterbot
```

### Installing

A step by step series of examples that tell you have to get a development env running

After cloning this repo:


How to install node js and packages

```
(https://gist.github.com/isaacs/579814])

For packages, open terminal and type:

npm init
npm install twit --save
npm install node-twitterbot --save

```

For twitter credentials

```
Create a new twitter account: [Twitter](https://twitter.com/signup)

Create a twitter account app: [Twitter](https://apps.twitter.com/app/new)

After creating the twitter account app, Navigate to your dashboard and open the tab: Keys and Access Tokens
  
  You will see your keys here. Scroll down to create an access token.


In the config.js file, adjust the API keys to your or configure environmental variables. 

WARNING: If you place API keys in the config.js file, do not make your files public.

```

## How to Run

After configuring everything, open terminal and type

```
node.bot.js
```

Enjoy!


## Authors

* **Wilson Phoong**

## License

This project is licensed under the MIT License

## Acknowledgments

*I build this after reading these articles! Please check them out:

https://medium.com/@mattpopovich/how-to-build-and-deploy-a-simple-twitter-bot-super-fast-with-node-js-and-heroku-7b322dbb5dd3

https://hackernoon.com/create-a-simple-twitter-bot-with-node-js-5b14eb006c08
