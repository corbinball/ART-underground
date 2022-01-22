const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  qtyInStock: {
    type: Number,
    required: true,
    default: 0
  },
  isSold: {
    type: Boolean,
    default: false
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
},

  {timestamps: true}
);


module.exports = mongoose.model('Product', productSchema);

