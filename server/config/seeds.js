const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Paintings' },
    { name: 'Prints' },
    { name: 'Mixed Media' },
    { name: 'Digital Art' },
    { name: 'Photographs' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Painting Example 1',
      description:
        'Painting ex1, image is cookie tin',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
      price: 3.99,
      quantity: 1
    },
    {
      name: 'Painting Example 2',
      description:
        'Painting ex2, image is canned coffee',
      image: 'canned-coffee.jpg',
      category: categories[0]._id,
      price: 3.99,
      quantity: 1
    },
    {
      name: 'Prints Example 1',
      category: categories[1]._id,
      description:
        'Prints ex1, image is toilet paper',
      image: 'toilet-paper.jpg',
      price: 7.99,
      quantity: 1
    },
    {
      name: 'Prints Example 2',
      category: categories[1]._id,
      description:
        'Prints ex2, image is soap',
      image: 'soap.jpg',
      price: 3.99,
      quantity: 1
    },
    {
      name: 'Prints example 2',
      category: categories[1]._id,
      description:
        'Prints ex3, image is wooden spoons',
      image: 'wooden-spoons.jpg',
      price: 14.99,
      quantity: 1
    },
    {
      name: 'Mixed Media example 1',
      category: categories[2]._id,
      description:
        'mixed media ex1, image is a camera',
      image: 'camera.jpg',
      price: 399.99,
      quantity: 1
    },
    {
      name: 'Mixed Media example 2',
      category: categories[2]._id,
      description:
        'Mixed media ex2, image is a tablet',
      image: 'tablet.jpg',
      price: 199.99,
      quantity: 1
    },
    {
      name: 'Digital Art example 1',
      category: categories[3]._id,
      description:
        'Digital art ex1, image is a bedtime book',
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 1
    },
    {
      name: 'Photograph example 1',
      category: categories[4]._id,
      description: 'photograph ex1, image is a spinning top',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1
    },
    {
      name: 'Photograph example 2',
      category: categories[4]._id,
      description:
        'photograph ex2, image is a plastic horse',
      image: 'plastic-horses.jpg',
      price: 2.99,
      quantity: 1
    },
    {
      name: 'Photograph example 3',
      category: categories[4]._id,
      description:
        'photograph ex3, image is a teddy bear',
      image: 'teddy-bear.jpg',
      price: 7.99,
      quantity: 1
    },
    {
      name: 'Photograph example 4',
      category: categories[4]._id,
      description:
        'photograph ex4, image is alphabet blocks',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 1
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
