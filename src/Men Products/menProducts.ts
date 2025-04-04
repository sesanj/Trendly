/*
    - Make 6 random products with discounts
    - Make 4 Trending, 4 Hot and 4 New each using the "tag"
    - Make 4 Products with quantity 0
    - Create a random Mix of other products with the provided
        categories in the sampleProduct file
*/

let product = [
  {
    id: 'm1',
    title: 'Green men Hoddie Jacket',
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
    color: ['BLACK', 'BLUE', 'GREEN'],
    size: ['M', 'L', 'XL'],
    image: {
      image1: 'men1-1.jpg',
      image2: 'men1-2.jpg',
      image3: 'men1-3.jpg',
    },
    tag: 'HOT',
  },
  {
    id: 'm2',
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
    color: ['WHITE', 'GREY'],
    size: ['M', 'L', 'XL'],
    image: {
      image1: 'men2-1.jpg',
      image2: 'men2-2.jpg',
      image3: 'men2-3.jpg',
    },
    tag: 'NEW',
  },
  {
    id: 'm3',
    title: "Men's striped shirt.",
    price: 120,
    discount: 99,
    description:
      'A white striped dress shirt featuring a classic button-up design with a collar, perfect for professional and business settings',
    category: {
      men: true,
      shirt: true,
    },
    quantity: 11,
    color: ['WHITE'],
    size: ['M', 'L', 'XL'],
    image: {
      image1: 'men3-1.jpeg',
      image2: 'men3-2.jpeg',
      image3: 'men3-3.jpeg',
      image4: 'men3-4.jpeg',
    },
    tag: 'TRENDING',
  },
  {
    id: 'm4',
    title: "Men's College T-Shirt Printed Crew Neck Short Sleeve",
    price: 99,
    discount: 66,
    description:
      "This men's white crewneck short-sleeve T-shirt combines a minimalist design with a stylish print, offering a trendy and casual urban look. Made from premium-quality cotton, it is soft, breathable, and perfect for spring and summer wear.",
    category: {
      men: true,
      shirt: true,
    },
    quantity: 11,
    color: ['WHITE'],
    size: ['M', 'L', 'XL'],
    image: {
      image1: 'men4-1.jpeg',
      image2: 'men4-2.jpeg',
      image3: 'men4-3.jpeg',
      image4: 'men4-4.jpeg',
    },
    tag: 'TRENDING',
  },
  {
    id: 'm5',
    title: 'Cotton Crew Neck Long Sleeve T-Shirt',
    price: 125,
    discount: 66,
    description:
      'Stay comfortable and stylish with our Cotton Crew Neck Long Sleeve Men T-Shirt, designed for versatile everyday wear. Made from high-quality cotton, this shirt offers a perfect balance of comfort, durability, and timeless style.',
    category: {
      men: true,
      shirt: true,
    },
    quantity: 11,
    color: ['GREEN'],
    size: ['M', 'L', 'XL'],
    image: {
      image1: 'men5-1.jpeg',
      image2: 'men5-2.jpeg',
      image3: 'men5-3.jpeg',
      image4: 'men5-4.jpeg',
    },
  },
  {
    id: 'm6',
    title:
      'MEN College Jacket Bomber Collar Embroidered Detailed Snap Buttons Pocket',
    price: 199,
    discount: 66,
    description:
      'Elevate your casual style with our College Jacket, a perfect blend of classic varsity vibes and modern design. This jacket combines comfort, functionality, and standout details, making it a wardrobe essential for any season.',
    category: {
      men: true,
      jacket: true,
    },
    quantity: 0,
    color: ['GREEN'],
    size: ['M', 'L', 'XL'],
    image: {
      image1: 'men6-1.jpeg',
      image2: 'men6-2.jpeg',
      image3: 'men6-3.jpeg',
      image4: 'men6-4.jpeg',
    },
  },
  {
    id: 'm7',
    title: 'MEN Orange Knitwear Sweater Crew Neck',
    price: 99,
    //discount: 66,
    description:
      'Stay cozy and stylish with our vibrant Orange Knitwear Sweater, designed for comfort and versatility. Perfect for adding a pop of color to your wardrobe, this sweater combines classic design with premium craftsmanship.',
    category: {
      men: true,
      jacket: true,
    },
    quantity: 50,
    // color: [
    //   "GREEN",
    // ],
    size: ['M', 'L', 'XL'],
    image: {
      image1: 'men7-1.jpeg',
      image2: 'men7-2.jpeg',
    },
  },
  {
    id: 'm8',
    title: 'MEN Pocket Basic T-Shirt',
    price: 79.99,
    //discount: 66,
    description:
      'Upgrade your wardrobe with the effortlessly versatile Pocket Basic T-Shirt, a perfect blend of simplicity and functionality. Designed for everyday comfort and style, this t-shirt is a must-have staple.',
    category: {
      men: true,
      shirt: true,
    },
    quantity: 50,
    // color: [
    //   "GREEN",
    // ],
    size: ['M', 'L', 'XL'],
    image: {
      image1: 'men8-1.jpeg',
      image2: 'men8-2.jpeg',
      image3: 'men8-3.jpg',
      image4: 'men8-4.jpeg',
    },
  },
  {
    id: 'm9',
    title: 'MEN Plaid Lumberjack Shirt Classic Collar Long Sleeve',
    price: 99.99,
    //discount: 66,
    description:
      'Stay cozy and stylish with the timeless Plaid Men Lumberjack Shirt, a wardrobe essential that combines rugged charm with everyday functionality.',
    category: {
      men: true,
      shirt: true,
    },
    quantity: 99,
    // color: [
    //   "GREEN",
    // ],
    size: ['M', 'L', 'XL'],
    image: {
      image1: 'men9-1.jpeg',
      image2: 'men9-2.jpeg',
      image3: 'men9-3.jpeg',
      image4: 'men9-4.jpeg',
    },
  },
  {
    id: 'm10',
    title: 'MEN Hooded Inflatable Coat Printed Waterproof',
    price: 199.99,
    //discount: 66,
    description:
      'The Hooded Inflatable Coat is a stylish and practical outerwear designed to keep you warm and dry in all conditions. Made from high-quality, waterproof material, this coat ensures protection against rain and wind.',
    category: {
      men: true,
      jacket: true,
    },
    quantity: 99,
    // color: [
    //   "GREEN",
    // ],
    size: ['M', 'L', 'XL'],
    image: {
      image1: 'men10-2.jpeg',
      image2: 'men10-3.jpeg',
      image3: 'men10-4.jpeg',
      image4: 'men10-1.jpeg',
    },
  },
  {
    id: 'm11',
    title: 'Basic T-Shirt Crew Neck',
    price: 49.99,
    //discount: 66,
    description:
      'The Basic T-Shirt with a Crew Neck is a timeless and versatile wardrobe essential. Made from soft, breathable fabric, it offers comfort for all-day wear. The classic crew neck design provides a flattering fit for both casual and active occasions. ',
    category: {
      men: true,
      shirt: true,
    },
    quantity: 50,
    // color: [
    //   "GREEN",
    // ],
    size: ['M', 'L', 'XL'],
    image: {
      image1: 'men11-1.jpeg',
      image2: 'men11-2.jpeg',
    },
  },
  {
    id: 'm12',
    title: 'Basic Shirt Classic Collar Buttoned Pocket Detailed',
    price: 59.99,
    discount: 36.99,
    description:
      'The Basic Shirt with a Classic Collar and Buttoned Pocket is the perfect blend of smart and casual style. Crafted from soft, durable fabric, this shirt offers both comfort and versatility. ',
    category: {
      men: true,
      jacket: true,
    },
    quantity: 50,
    // color: [
    //   "GREEN",
    // ],
    size: ['M', 'L', 'XL'],
    image: {
      image1: 'men12-1.jpeg',
      image2: 'men12-3.jpeg',
    },
  },
  {
    id: 'm13',
    title: 'Basic Melange Sweater Knitwear Crew Neck Long Sleeve',
    price: 59.99,
    discount: 46.99,
    description:
      'The Basic Melange Sweater is a cozy and stylish knitwear piece designed for year-round comfort. Featuring a classic crew neck and long sleeves, it provides a relaxed fit perfect for layering or wearing on its own. ',
    category: {
      men: true,
      shirt: true,
    },
    quantity: 50,
    // color: [
    //   "GREEN",
    // ],
    size: ['M', 'L', 'XL'],
    image: {
      image1: 'men13-1.jpeg',
      image2: 'men13-2.jpeg',
      image3: 'men13-3.jpeg',
      image4: 'men13-4.jpeg',
    },
  },
];
