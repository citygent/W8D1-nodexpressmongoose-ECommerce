var mongoose = require('mongoose')

var Product = mongoose.model('Product')

var orderSchema = new mongoose.Schema({
  price: String,
  createdAt: Date,
  address: {
    street: String,
    postcode: String,
    town: String,
    country: String 
  },
  products: [Product.schema],
  user: {type: mongoose.Schema.ObjectId, ref: 'User'}
});

var Order = mongoose.model('Order', orderSchema);

module.exports = Order;