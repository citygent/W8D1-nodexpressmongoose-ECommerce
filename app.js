var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/ecommerce')

var routes = require ('./routes');

var User = require('./models/user')
var Product = require('./models/product')
var Order = require('./models/order')

mongoose.connection.db.dropDatabase();

var order1 = new Order({
  price: '',
  createdAt: new Date(),
  address: {
    street: 'Convent Avenue',
    postcode: 'NY1 4AB',
    town: 'New York',
    country: 'USA'
  },
  products: []
})
order1.save(function(err, order) {
  if (err) console.log(err);
  console.log('order1 saved!')
})
var order2 = new Order({
  price: '',
  createdAt: new Date(),
  address: {
    street: 'Convent Avenue',
    postcode: 'NY1 4AB',
    town: 'New York',
    country: 'USA'
  },
  products: []
})
order2.save(function(err, order) {
  if (err) console.log(err);
  console.log('order2 saved!')
})
var order3 = new Order({
  price: '',
  createdAt: new Date(),
  address: {
    street: 'Convent Avenue',
    postcode: 'NY1 4AB',
    town: 'New York',
    country: 'USA'
  },
  products: []
})
order3.save(function(err, order) {
  if (err) console.log(err);
  console.log('order3 saved!')
})

order1.products.push({
  name: 'Three Plays, by Margot Tenenbaum',
  price: 15.95,
  description: "Aspiring playwright from NYC"
})

order2.products.push({
  name: 'Lucky Strike Cigarettes (20)',
  price: 3.95,
  description: "Smoking kills etc. etc."
})
order2.products.push({
  name: 'Prosthetic Index Finger, Wooden',
  price: 74.95,
  description: "Carved from Oak by Hand in Minesota"
})

order3.products.push({
  name: 'Cowboy Hat',
  price: 44.95,
  description: "Look like a total douche wherever you go."
})
order3.products.push({
  name: "Dudley's World, by Raleigh St.Clair",
  price: 24.95,
  description: "World leading neurologist talks about Heinsbergen Syndrome, which he discovered"
})
order3.products.push({
  name: 'Contemporary Art Monthly',
  price: 7.95,
  description: "Monthly review of recent work from the Art World"
})

var user1 = new User({
  name: 'Raleigh St.Clair',
  gender: 'Male',
  dob: '21 sep 1950'
});
user1.save(function(err, user) {
  if (err) console.log(err);
  console.log('user1 Saved!');
})
var user2 = new User({
  name: 'Margot Tenenbaum',
  gender: 'Female',
  dob: '27 sep 1972'
});
user2.save(function(err, user) {
  if (err) console.log(err);
  console.log('user2 Saved!');
})
var user3 = new User({
  name: 'Eli Cash',
  gender: 'Male',
  dob: '18 Nov 1968'
});
user3.save(function(err, user) {
  if (err) console.log(err);
  console.log('user3 Saved!');
})


