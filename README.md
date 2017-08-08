# Express start

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
