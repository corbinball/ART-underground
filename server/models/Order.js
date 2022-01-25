const mongoose = require("mongoose");

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;

// module.exports = mongoose.model("Order", orderSchema);

//   shippingInfo: {
//     address: {
//       type: String,
//       required: [true, "Please enter an address"],
//     },
//     city: {
//       type: String,
//       required: [true, "Please enter a city"],
//     },
//     state: {
//       type: String,
//       required: [true, "Please enter a state"],
//     },
//     postalCode: {
//       type: Number,
//       required: [true, "Please enter a postal code"],
//       minLength: 5,
//     },
//     phone: {
//       type: Number,
//       required: [true, "Please enter a phone number"],
//     },
//   },

// orderItems: [
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     price: {
//       type: Number,
//       required: true,
//     },
//     quantity: {
//       type: Number,
//       required: true,
//     },
//     productId: {
//       type: mongoose.Schema.ObjectId,
//       ref: "Product",
//       required: true,
//     },
//   },
// ],

// userId: {
//   type: mongoose.Schema.ObjectId,
//   ref: "User",
//   required: true,
// },
// itemsPrice: {
//   type: Number,
//   required: true,
// },
// shippingPrice: {
//   type: Number,
//   required: true,
// },
// totalPrice: {
//   type: Number,
//   required: true,
// },
// dateAdded: {
//   type: Date,
//   default: Date.now,
// },
// paymentMethod: {
//   status: { type: String },
//   required: [true, "Please enter a payment method"],
// },
