# EarthSpy
===========

![astronaut cat](https://raw.github.com/meltar/earthspy/master/app/assets/images/cat.gif)

View the site at [earthspy.herokupp.com](http://earthspy.herokuapp.com/)

### To get this app up and running, run these commands in console:

Install all of the necessary gems listed in the Gemfile
```
bundle install
```

Create the test and development databases based on the configuration specified in config/database.yml
```
rake db:create:all
```

Add all of the tables and table attributes to the database defined in db/schema.rb.
Update the test environment to match.
```
rake db:schema:load
rake db:test:load
```

Run the app locally:
```
rails s
```
The default host location is http://localhost:3000.

### Helpful links
gmaps4rails
https://github.com/apneadiving/Google-Maps-for-Rails

twitter-bootstrap-rails
https://github.com/seyhunak/twitter-bootstrap-rails

iserve
http://www.space-photos.info/

### TODO
- Retrieve up to date marker data from the [iserve]http://www.space-photos.info/) API when the app loads.
- Add more social network sharing links (Facebook, Pinterest, Tumblr, and others).
- Learn to write Javascript specs
- Clean up Rails code since the database is no longer needed or add features that use it.

##Project Contributors:
* [@meltar](https://github.com/meltar)
* [@kyfast](https://github.com/kyfast)
