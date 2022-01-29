const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Paintings" }, // 0
    { name: "Prints" }, // 1
    { name: "Draw" }, // 2
    { name: "Mixed Media" }, // 3
    { name: "Digital Art" }, // 4
    { name: "Photographs" }, // 5
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "Marble Blue",
      description:
        "Ink and a epoxy glaze - deep blues and greens. An Original by Aubrey Ross.",
      image: "VA_MarbleBlue.JPG",
      category: categories[0]._id, //PAINTING VA
      price: 159.99,
      quantity: 1,
    },
    {
      name: "Plumes in Ink",
      description:
        "Ink and a epoxy glaze - deep blues and golds whisper ocean vibes. An Original by Aubrey Ross.",
      image: "VA_InkPlumes.JPG",
      category: categories[0]._id, //PAINTING VA
      price: 129.99,
      quantity: 1,
    },
    {
      name: "KamisakaSekka",
      description:
        "A print of Snow from Momoyogusa Flowers of a Hundred Generations (ca. 1909 to 1910) by Kamisaka Sekka.",
      image: "PR_KamisakaSekka.JPG",
      category: categories[1]._id, //PRINT PR
      price: 22.99,
      quantity: 500,
    },
    {
      name: "Ara",
      description:
        "Ara (c.1926) print in high resolution by Samuel Jessurun de Mesquita. Original from The Rijksmuseum.",
      image: "PR_Ara.JPG",
      category: categories[1]._id, //PRINT PR
      price: 32.99,
      quantity: 500,
    },
    {
      name: "Cool Guy",
      description:
        "Colors, colors, colors. Color pencil can really bring a drawing to life. An Original by Aubrey Ross.",
      image: "DA_CoolGuy.JPG",
      category: categories[2]._id, //DRAWING DA
      price: 32.99,
      quantity: 1,
    },
    {
      name: "Half Face",
      description:
        "The process of a portrait starts with the eyes. An Original by Aubrey Ross.",
      image: "DA_HalfFace.JPG",
      category: categories[2]._id, //DRAWING DA
      price: 52.99,
      quantity: 1,
    },
    {
      name: "Baduism",
      description:
        "Erykah Badu made with spray paint and oils. An original by Valerie Brisendine.",
      image: "MM_Baduism.JPG",
      category: categories[3]._id, //MIXED MEDIA MM
      price: 82.99,
      quantity: 1,
    },
    {
      name: "Tribe",
      description:
        "A mixed media artwork to emphasize the layers of culture. An original by Valerie Brisendine.",
      image: "MM_Tribe.JPG",
      category: categories[3]._id, //MIXED MEDIA MM
      price: 119.99,
      quantity: 1,
    },
    {
      name: "Son of Media",
      description:
        "Social Media surrounds us completely. An original digital piece by Valerie Brisendine.",
      image: "DG_SonOfMedia.JPG",
      category: categories[4]._id, //DIGITAL ART DG
      price: 30.0,
      quantity: 500,
    },
    {
      name: "Space Dairy",
      description:
        "Ever wonder how the cow jumped over the moon? An original digital piece by Valerie Brisendine.",
      image: "DG_SpaceDairy.JPG",
      category: categories[4]._id, //DIGITAL ART DG
      price: 20.0,
      quantity: 500,
    },
    {
      name: "Engenius",
      description:
        "A black and white photo of the inside of an engine. An original potograph by Valerie Brisendine.",
      image: "PG_Engenius.JPG",
      category: categories[5]._id, //PHOTO PG
      price: 125.0,
      quantity: 125,
    },
    {
      name: "Glass",
      description:
        "Glass blowing in low light. An original potograph by Valerie Brisendine.",
      image: "PG_Glass.JPG",
      category: categories[5]._id, //PHOTO PG
      price: 82.99,
      quantity: 25,
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Andrew",
    lastName: "Tran",
    email: "andrew@testmail.com",
    password: "password12345",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Val",
    lastName: "Brisendine",
    email: "val@testmail.com",
    password: "password12345",
  });

  await User.create({
    firstName: "Aubrey",
    lastName: "Ross",
    email: "aubrey@testmail.com",
    password: "password12345",
  });

  await User.create({
    firstName: "Corbin",
    lastName: "Ball",
    email: "corbin@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
