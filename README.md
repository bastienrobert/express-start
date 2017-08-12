# Express start
[![npm](https://img.shields.io/npm/v/npm.svg)]()
[![Code Climate](https://codeclimate.com/github/bastienrobert/express-start/badges/gpa.svg)](https://codeclimate.com/github/bastienrobert/express-start)
[![Build Status](https://travis-ci.org/bastienrobert/express-start.svg?branch=master)](https://travis-ci.org/bastienrobert/express-start)
[![dependencies](https://david-dm.org/bastienrobert/express-starter.svg)


Just a simple project for a rapid start with express in NodeJS.

## Install

Simple install with :
```
npm install
```

Then, make an :
```
npm run dev
```
to run it as developper (and get access to the webpack module bundler)

## Architecture
It have a simple MVC architecture, I love Ruby on Rails architecture so I do the same here :
- Static assets : on app/assets
- Model/View/Controller/Helpers : on app/
- Middlewares are on app/ too

Configuration and routes are in config/

In lib directory : some middlewares or routes for global running application.

In public directory : error pages, and all the public data (like users images, blog images...)

In test... we will see it later please ;)

Config is a little bit uglier ->
# WIP
## (work in project)
so please, don't use it right now.

## Models & migrations
Express-start uses sequelize to generate migrations & models.
Database configuration (depends on ENV) is located @ config/sequelize.json.

It's recommend to use sqlite3 in dev & pgsql in production (because for Heroku deployment).

To generate a model and his own migration :
```
sequelize model:create --name User --attributes title:string,content:text,created_at:datetime
```
It will create a model named user.js in app/models, and a migration in db/migrations.

You can generate too a sample migration, with :
```
sequelize migration:create
```

You can see all the doc about sequelize here : http://docs.sequelizejs.com/manual/installation/getting-started.html or with the following command :
```
sequelize
sequelize help:model:create
```

## Helpers
Some helpers has been added with the Package express-helpers (https://www.npmjs.com/package/express-helpers).
Express Helpers is a port of EJS's ViewHelpers and additional helpers are very similar to those found in the Ruby on Rails framework.

Check the documentation here : https://github.com/tanema/express-helpers/wiki

You can add your personnal helpers on app/helpers. Named them like ```NAME_helper.js``` and require it with
```
let helper = require(global.helpers).NAME
```

## Locals variables
You can add locals by copying local_env.example.json to local_env.json.
Then, it's a simple JSON array.

Add new keys & values, and then call it with the method : global.locals.KEY

## Controllers
Wow, such great, you want to create a controller : it's really simple.

First, import controller let in routes :
```let controllers = require(global.controllers)```

Then, create a route :
```app.get('/test', controllers.test.index())```

This route will return to your controller named test_controller.js in app/controller.
It will call the method index you defined, like it :

```
index(req, res) {
  models.Test.findAll().then(function(DB_REQ_VALUE) {
    res.render('test/index', {
      tests: DB_REQ_VALUE
    })
  })
}
```

And then, it will render your view in app/views/test/index.ejs, and the var ```tests``` will contain the DB request.

## Controllers and helpers inheritance

You want to create a new controller or a new helper ? You can inherit the application class like this :
```
require('./application_controller')
class TestController {
  method() {
    ...
  }
}
module.exports = new TestController
```
