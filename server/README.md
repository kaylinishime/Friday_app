
###Create a database using Sequelize/Postgres:

```
Run:
npm install sequelize@3.12.2 pg@4.4.3 pg-hstore@2.3.2 --save
npm install sequelize-cli@2.1.0 --save
node_modules/.bin/sequelize init
```

create your models:
```
example:
$ node_modules/.bin/sequelize model:create --name Todo --attributes "title:string, complete:boolean,UserId:integer"
```

create your associations:
```
example:
'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Todo);
      }
    }
  });
  return User;
};
```

in your terminal:
```
psql
SELECT * FROM pg_roles;
here you can find your username
```

INPUT this username into your config/config.json file and replace with username

```
node_modules/.bin/sequelize db:migrate
```
