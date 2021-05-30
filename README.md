# HGTracker

[![Netlify Status](https://api.netlify.com/api/v1/badges/4439da5b-582a-45ff-afb1-59d6faf9f53f/deploy-status)](https://app.netlify.com/sites/hgtracker/deploys)

This project is built with the following technologies:

* TypeScript
* Vue
* CARTO Airship
* carto.js

## CARTO Setup

You need to have a CARTO account ([sign up](https://carto.com/signup))

Configure development environment:

```
cp env.sample env.development
```

In CARTO, you'd need to have three tables: expedicion, avistamientos and coords. You can directly upload these csv files with a sample row to start working with them. Truncate the tables or simply delete the first row to clean the generated tables:

* [expedicion](tables/expedicion.csv)
* [avistamientos](tables/avistamientos.csv)
* [coords](tables/coords.csv)

Once you've uploaded these tables, generate an API KEY to be able to access them using the SQL API. Then, add your credentials in env.development file:

VUE_APP_API_URL=https://yourname.carto.com
VUE_APP_KEY_EXPEDICION=YOUR_KEY

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
