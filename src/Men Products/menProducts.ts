/*
    - Make 6 random products with discounts
    - Make 4 Trending, 4 Hot and 4 New each using the "tag"
    - Make 4 Products with quantity 0
    - Create a random Mix of other products with the provided
        categories in the sampleProduct file
*/

let products = [
  {
    id: "m1",
    title: "Green men Hoddie Jacket",
    price: 47,
    discount: 24,
    description:
      "Men's green jacket with a zip-up design, offering a perfect blend of comfort and casual style. Ideal for everyday wear, it combines functionality and a modern look.",
    category: {
      men: true,
      shirt: true,
      jacket: true,
      hoodie: true,
    },
    quantity: 12,
    color: [
      "BLACK",
      "BLUE",
      "GREEN",
    ],
    size: ["M", "L", "XL"],
    image: {
      image1: "man1.jpg",
      image2: "man2.jpg",
      image3: "man3.jpg",
      image4: "man4.jpg",
    },
    tag: "HOT",
  },
  {
    id: "m2",
    title: "Men's hoodie jacket designed in a  casual style.",
    price: 99,
    //discount: 24,
    description:
      "Men's hoodie designed for ultimate comfort and a modern casual style.",
    category: {
      men: true,
      jacket: true,
      hoodie: true,
    },
    quantity: 10,
    color: [
      "WHITE",
      "GREY"
    ],
    size: ["M", "L", "XL"],
    image: {
      image1: "man2-1.jpg",
      image2: "man2-2.jpg",
      image3: "man2-3.jpg",
    },
    tag: "NEW",
  },
  {
    id: "m3",
    title: "Men's striped shirt.",
    price: 120,
    discount: 99,
    description:
      "A white striped dress shirt featuring a classic button-up design with a collar, perfect for professional and business settings",
    category: {
      men: true,
      shirt:true
    },
    quantity: 11,
    color: [
      "WHITE",
    ],
    size: ["M", "L", "XL"],
    image: {
      image1: "man3-1.jpeg",
      image2: "man3-2.jpeg",
      image3: "man3-3.jpeg",
      image4: "man3-4.jpeg"
    },
    tag: "TRENDING",
  },
  {
    id: "m4",
    title: "Blue men hat",
    price: 23,
    //discount: 24,
    description:
      "classic men's blue cap, designed for both comfort and versatility.",
    category: {
      men: true,
      hat:true,
    },
    quantity: 0,
    color: [

      "BLUE",

    ],
    size: ["M", "L"],
    image: {
      image1: "man4-1.webp",
      image2: "man4-2.webp",

    },

  },
  {
    id: "m5",
    title: "black classci men belt",
    price: 53,
    discount: 42.99,
    description:
      " men's black leather belt, crafted from high-quality leather for a smooth and durable finish",
    category: {
      men: true,
      belt:true,
    },
    quantity: 0,
    color: [
      "BLACK",
      "BLUE",
    ],
    size: ["M", "L", "XL"],
    image: {
      image1: "man5.webp",

    },
    tag: "HOT",
  },

  {
    id: "m6",
    title: "light blue men Jean",
    price: 99,
    // discount: 24,
    description:
      "Men's light blue straight-leg jeans, perfect for a casual, laid-back look.",
    category: {
      men: true,
      jean:true,
    },
    quantity: 50,

    size: ["M", "L", "XL"],
    image: {
      image1: "man6-1.webp",
      image2: "man6-2.webp",
      image3: "man6-3.webp",

    },
    tag: "HOT",
  },
  {
    id: "m7",
    title: "black men Jean",
    price: 99.99,
    // discount: 24,
    description:
      "Men's black straight-leg jeans, perfect for a casual, laid-back look.",
    category: {
      men: true,
      jean:true,
    },
    quantity: 0,

    size: ["M", "L", "XL"],
    image: {
      image1: "man7-1.webp",
      image2: "man7-2.webp",
      image3: "man7-3.webp",

    },
    tag: "TRENDING",
  },
  {
    id: "m8",
    title: "light blue classic men jean",
    price: 105,
    // discount: 24,
    description:
      "Men's light blue classic jeans, perfect for a casual, laid-back look.",
    category: {
      men: true,
      jean:true,
    },
    quantity: 80,

    size: ["M", "L", "XL"],
    image: {
      image1: "man8-1.webp",
      image2: "man8-2.webp",
      image3: "man8-3.webp",

    },
  },

  {
    id: "m9",
    title: " blue classic men denim jacket",
    price: 125,
    // discount: 24,
    description:
      "men's denim jacket, a timeless classic for any season. Made from premium-quality denim, it features a durable design with button closures, multiple pockets, and a versatile fit. ",
    category: {
      men: true,
      jacket:true,
    },
    quantity: 0,

    size: ["M", "L", "XL"],
    image: {
      image1: "man9-1.webp",
      image2: "man9-2.webp",
      image3: "man9-3.webp",

    },
  },

  {
    id: "m10",
    title: " dark blue classic men denim jean",
    price: 89.99,
    discount: 63.99,
    description:
      "men's classic dark blue jeans, a versatile wardrobe essential. Crafted from high-quality, durable denim, they offer a comfortable fit with a timeless straight-leg design.  ",
    category: {
      men: true,
      jacket:true,
    },
    quantity: 29,

    size: ["M", "L", "XL"],
    image: {
      image1: "man10-1.webp",
      image2: "man10-2.webp",
      image3: "man10-3.webp",

    },
  },

  {
    id: "m11",
    title: "  blue classic men shirt",
    price: 32.99,
    //discount: 63.99,
    description:
      "Stay cool and stylish with this men's blue t-shirt, crafted from soft and breathable fabric for all-day comfort.  ",
    category: {
      men: true,
      shirt:true,
    },
    quantity:12,

    size: ["M", "L", "XL"],
    image: {
      image1: "man11-1.webp",
      image2: "man11-2.webp",
      image3: "man11-3.webp",

    },
  },

  {
    id: "m12",
    title: "  blue classic men checkered shirt",
    price: 98,
    //discount: 63.99,
    description :
      "Men's blue checkered shirt, combining classic style with modern versatility. Made from premium, breathable fabric, it features a tailored fit, button-down collar, and adjustable cuffs for added comfort and sophistication.",
    category: {
      men: true,
      shirt:true,
    },
    quantity:12,
    color: [
      "BLUE",
    ],
    size: ["M", "L", "XL"],
    image: {
      image1: "man12-1.webp",
      image2: "man12-2.webp",
      image3: "man12-3.webp",

    },
    tag: "NEW",
  },

  {
    id: "m13",
    title: "  blue men distressed retro jeans",
    price: 105,
    //discount: 63.99,
    description:
      "   men's distressed retro jeans. Designed with a perfectly worn-in look, they feature high-quality denim for durability and comfort.",
    category: {
      men: true,
      jean:true,
    },
    quantity:99,
    color: [
      "BLUE",
    ],
    size: ["M", "L", "XL"],
    image: {
      image1: "man13-1.webp",
      image2: "man13-2.webp",
      image3: "man13-3.webp",

    },
    tag: "HOT",
  },
  {
    id: "m14",
    title: "  white men letter shirt",
    price: 49.99,
    //discount: 63.99,
    description:
      "men's white graphic t-shirt, featuring bold letter detailing for a modern touch. Made from soft, breathable cotton, it offers all-day comfort and a relaxed fit.",
    category: {
      men: true,
      shirt:true,
    },
    quantity:99,
    // color: [
    //   "BLUE",
    // ],
    size: ["M", "L", "XL"],
    image: {
      image1: "man14-1.webp",
      image2: "man14-2.webp",
      image3: "man14-3.webp",

    },

  },

  {
    id: "m15",
    title: "  green men letter shirt",
    price: 49.99,
    //discount: 63.99,
    description:
      "men's green graphic t-shirt, featuring bold letter detailing for a modern touch. Made from soft, breathable cotton, it offers all-day comfort and a relaxed fit.",
    category: {
      men: true,
      shirt:true,
    },
    quantity:99,
    // color: [
    //   "BLUE",
    // ],
    size: ["M", "L", "XL"],
    image: {
      image1: "man15-1.webp",
      image2: "man15-2.webp",
      image3: "man15-3.webp",

    },

  },
  {
    id: "m16",
    title: "men distressed vintage denim jacket",
    price: 150.99,
    //discount: 63.99,
    description:
      "Men's distressed vintage denim jacket, crafted from high-quality denim for a durable, rugged look. Featuring a worn-in, aged finish with subtle fading and frayed edges, it brings a touch of retro charm to any outfit.",
    category: {
      men: true,
      jacket:true,
    },
    quantity:99,
    // color: [
    //   "BLUE",
    // ],
    size: ["M", "L", "XL"],
    image: {
      image1: "man16-1.webp",
      image2: "man16-2.webp",
      image3: "man16-3.webp",

    },

  },
  {
    id: "m17",
    title: "men's green checkered jacket",
    price: 199.99,
    //discount: 63.99,
    description:
      "casual wardrobe with this men's green checkered jacket. Made from soft, breathable fabric, it combines a comfortable fit with a stylish design.",
    category: {
      men: true,
      jacket:true,
    },
    quantity:99,
    // color: [
    //   "BLUE",
    //   "GREEN"
    // ],
    size: ["M", "L", "XL"],
    image: {
      image1: "man17-1.webp",
      image2: "man17-2.webp",
    },

  },
  {
    id: "m18",
    title: "men's grey puff jacket",
    price: 299.99,
    //discount: 63.99,
    description:
      " men's puffer down jacket, designed to provide exceptional insulation without compromising on style. Made from high-quality, lightweight materials, it features a sleek, quilted design and a comfortable, relaxed fit.",
    category: {
      men: true,
      jacket:true,
    },
    quantity:99,
    // color: [
    //   "BLUE",
    //   "GREEN"
    // ],
    size: ["M", "L", "XL"],
    image: {
      image1: "man18-1.webp",
      image2: "man18-2.webp",
      image3: "man18-3.webp",
    },

  },

  {
    id: "m19",
    title: "men's classic belt",
    price: 60,
    //discount: 63.99,
    description:
      "Men's classic leather belt, a timeless accessory that combines elegance and durability. Crafted from high-quality genuine leather, it features a sleek, minimalist design with a polished metal buckle for a sophisticated touch..",
    category: {
      men: true,
      belt:true,
    },
    quantity:25,
    // color: [
    //   "BLUE",
    //   "GREEN"
    // ],
    size: ["M", "L", "XL"],
    image: {
      image1: "man19-1.webp",

    },

  },

  {
    id: "m20",
    title: "men's classic bag",
    price: 99,
    //discount: 63.99,
    description:
      "Men's black backpack is the perfect combination of style, functionality, and durability. Crafted from high-quality materials, it features a sleek, minimalist design with multiple compartments to keep your essentials organized.",
    category: {
      men: true,
      bag:true,
    },
    quantity:30,
    // color: [
    //   "BLUE",
    //   "GREEN"
    // ],
    size: ["M"],
    image: {
      image1: "man20-1.webp",
      image2: "man20-2.webp",

    },

  },



];
