const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Paintings' }, // 0
    { name: 'Prints' }, // 1
    { name: 'Draw' }, // 2
    { name: 'Mixed Media' }, // 3
    { name: 'Digital Art' }, // 4
    { name: 'Photographs' } // 5
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: '',
      description:
        '',
      image: '',
      category: categories[0]._id, //PAINTING VA
      price: 2.99,
      quantity: 500
    },
    {
      name: '',
      description:
        '',
      image: '',
      category: categories[0]._id, //PAINTING VA
      price: 2.99,
      quantity: 500
    },
    {
      name: '',
      description:
        '',
      image: '',
      category: categories[1]._id, //PRINT PR
      price: 2.99,
      quantity: 500
    },
    {
      name: '',
      description:
        '',
      image: '',
      category: categories[1]._id, //PRINT PR
      price: 2.99,
      quantity: 500
    },
    {
      name: '',
      description:
        '',
      image: '',
      category: categories[2]._id, //DRAWING DA
      price: 2.99,
      quantity: 500
    },
    {
      name: '',
      description:
        '',
      image: '',
      category: categories[2]._id, //DRAWING DA
      price: 2.99,
      quantity: 500
    },
    {
      name: '',
      description:
        '',
      image: '',
      category: categories[3]._id, //MIXED MEDIA MM
      price: 2.99,
      quantity: 500
    },
    {
      name: '',
      description:
        '',
      image: '',
      category: categories[3]._id, //MIXED MEDIA MM
      price: 2.99,
      quantity: 500
    },
    {
      name: 'Son of Media',
      description:
        'Social Media surrounds us completely',
      image: 'DG_SonOfMedia.JPG',
      category: categories[4]._id, //DIGITAL ART DG
      price: 2.99,
      quantity: 500
    },
    {
      name: 'Space Dairy',
      description:
        'Ever wonder how the cow jumped over the moon',
      image: 'DG_SpaceDairy.JPG',
      category: categories[4]._id, //DIGITAL ART DG
      price: 2.99,
      quantity: 500
    },
    {
      name: 'Engenius',
      description:
        'A black and white photo of the inside of a roadster engine',
      image: 'PG_Engenius.JPG',
      category: categories[5]._id, //PHOTO PG
      price: 125.00,
      quantity: 125
    },
    {
      name: 'Glass',
      description:
        'Glass blowing in low light',
      image: 'PG_Glass.JPG',
      category: categories[5]._id, //PHOTO PG
      price: 82.99,
      quantity: 25
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Andrew',
    lastName: 'Tram',
    email: 'andrew@testmail.com',
    password: 'password12345'
  });

  await User.create({
    firstName: 'Val',
    lastName: 'Brisendine',
    email: 'val@testmail.com',
    password: 'password12345'
  });

  await User.create({
    firstName: 'Aubrey',
    lastName: 'Ross',
    email: 'aubrey@testmail.com',
    password: 'password12345'
  });

  await User.create({
    firstName: 'Corbin',
    lastName: 'Ball',
    email: 'corbin@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
