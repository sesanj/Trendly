/*
    - Make 6 random products with discounts
    - Make 4 Trending, 4 Hot and 4 New each using the "tag"
    - Make 4 Products with quantity 0
    - Create a random Mix of other products with the provided
        categories in the sampleProduct file
*/

let products = [
  {
    id: "w1",
    title: "Red Women Hoodie Jacket",
    price: 65,
    discount: 23,
    description:
      "Lorem Ipsum: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    category: {
      women: true,
      jacket: false,
      hoodie: true,
    },
    quantity: 0,

    size: ["M", "L", "XL"],
    image: {
      image1: "image1.jpg",
      image2: "image2.jpg",
      image3: "image3.jpg",
      image4: "image4.jpg",
    },
    tag: "TRENDING",
  },
  {
    id: "w2",
    title: "Light Camel Long Woolen Coat",
    price: 100,
    discount: 10,
    description:
    "Looking for a way to elevate your fall wardrobe? This timeless double-breasted coat made in a resilient and durable wool blend is sure to provide you with absolute elegance, giving the perfect finishing touch to any of your seasonal outfits. ",
    category: {
      women: true,
      jacket: true,
      hoodie: false,
    },
    quantity: 0,
    color: [
      "CAMEL"
    ],
    size: ["XS","S","M", "L", "XL"],
    image: {
      image1: "gJacket1.jpg",
      image2: "gJacket2.jpg",
      image3: "gJacket3.jpg",
      image4: "gJacket4.jpg",
    },
    tag: "TRENDING"
  },
  {
    id: "w3",
    title: "Faux Leather Jacket with Shearling Lining",
    price: 129,
    discount: 40,
    description:
    "This sleek faux leather jacket featuring a cozy shearling lining is sure to elevate your look all while keeping you nice and warm.",
    category: {
      women: true,
      jacket: true,
      hoodie: false,
    },
    quantity:0,
    color: [
      "BLACK"
    ],
    size: ["XS","S","M", "L", "XL"],
    image: {
      image1: "bJacket1.jpg",
      image2: "bJacket2.jpg",
      image3: "bJacket3.jpg",
      image4: "bJacket4.jpg",
    },
    tag: "HOT"
  },
  {
    id: "w4",
    title: "Cropped Tweed Bomber Jacket",
    price: 189.90,
    discount: 0,
    description:
    "The perfect layering piece for transitional weather, add some extra style to your look with this cropped tweed bomber jacket. Featuring a shirt collar, this piece will definitely add an edge to your outfit.",
    category: {
      women: true,
      jacket: true,
      hoodie: false,
    },
    quantity: 0,
    color: [
      "BUTTERCREAM"
    ],
    size: ["XS","S","M", "L", "XL"],
    image: {
      image1: "wJacket1.jpg",
      image2: "wJacket2.jpg",
      image3: "wJacket3.jpg",
      image4: "wJacket4.jpg",
    },
    tag: "HOT"
  },
  {
    id: "w5",
    title: "Oversized Zip - up Hoodie",
    price: 34.99,
    discount: 50,
    description:
    "Knit fleece. Mid-weight fabric in an oversized fit for a loose and baggy fit. Long sleeves. Hooded with a zipped front. Available in multiple colours. 2 pockets. Size down for a more fitted look.",
    category: {
      women: true,
      jacket: false,
      hoodie: true,
    },
    quantity: 30,
    color: [
      "HUNTERGREEN"
    ],
    size: ["XS","S","M", "L", "XL"],
    image: {
      image1: "gHoodie1.jpg",
      image2: "gHoodie2.jpg",
      image3: "gHoodie3.jpg",
      image4: "gHoodie4.jpg",
    },
    tag: "TRENDING"
  },
  {
    id: "w6",
    title: "Organic Original Relaxed Full Zip Hoodie",
    price: 98,
    description:
    "Relaxed fit, slightly cropped full zip hoodie with front pockets.",
    category: {
      women: true,
      jacket: false,
      hoodie: true,
    },
    quantity: 30,
    color: [
      "DARKBLUE"
    ],
    size: ["XS","S","M", "L", "XL"],
    image: {
      image1: "bHoodie1.jpg",
      image2: "bHoodie2.jpg",
      image3: "bHoodie3.jpg",
      image4: "bHoodie4.jpg",
    },
    tag: "TRENDING"
  },
  {
    id: "w7",
    title: "Bootcut Womens Jeans",
    price: 198,
    description:
    "Made to flatter your figure, the Levi’s Wedgie Boot features a high rise cut and flared leg that’s perfect with boots or sneakers.",
    category: {
      women: true,
      jacket: false,
      hoodie: false,
      jeans: true,
      pants: true
    },
    quantity: 30,
    color: [
      "BLUE"
    ],
    size: ["XS","S","M", "L", "XL"],
    image: {
      image1: "aJeans1.jpg",
      image2: "aJeans2.jpg",
      image3: "aJeans3.jpg",
      image4: "aJeans4.jpg",
    },
    tag: "HOT"
  },
  {
    id: "w8",
    title: "Super High-Waisted Ripped Flare Jean",
    price: 80,
    description:
    "A body-hugging, leg-lengthening fit with a super high rise & flared leg.",
    category: {
      women: true,
      jacket: false,
      hoodie: false,
      jeans: true,
      pants: true
    },
    quantity: 19,
    color: [
      "BLUE"
    ],
    size: ["XS","S","M", "L", "XL"],
    image: {
      image1: "bJeans1.jpg",
      image2: "bJeans2.jpg",
      image3: "bJeans3.jpg",
      image4: "bJeans4.jpg",
    },
    tag: "HOT"
  },
  {
    id: "w9",
    title: "Washed Bean",
    price: 45,
    description:
    "Regular fit, snug across seat, High waist, Classic 5-pocket, Zip fly",
    category: {
      women: true,
      jacket: false,
      hoodie: false,
      jeans: true,
      pants: true
    },
    quantity: 24,
    color: [
      "BLUE"
    ],
    size: ["XS","S","M", "L", "XL"],
    image: {
      image1: "cJeans1.jpg",
      image2: "cJeans2.jpg",
      image3: "cJeans3.jpg",
      image4: "cJeans4.jpg",
    },
    tag: "NEW"
  },
  {
    id: "w10",
    title: "Sleeveless V-Neck top",
    price: 22,
    description:
    "Made for everyday wear, this sleeveless top is the perfect base layer to slip under any cardigan or blazer.",
    category: {
      women: true,
      jacket: false,
      hoodie: false,
      jeans: false,
      pants: false,
      tops:true
    },
    quantity: 5,
    color: [
      "RED"
    ],
    size: ["XS","S","M", "L", "XL"],
    image: {
      image1: "aTops1.jpg",
      image2: "aTops2.jpg",
      image3: "aTops3.jpg",
      image4: "aTops4.jpg",
    },
    tag: "NEW"
  },
  {
    id: "w11",
    title: "Denim Top",
    price: 50,
    description:
    "More Sustainable Cotton: Made with 5% recycled cotton. Compared to virgin materials, using recycled materials helps to reduce resource use and waste.",
    category: {
      women: true,
      jacket: false,
      hoodie: false,
      jeans: false,
      pants: false,
      tops: true
    },
    quantity: 24,
    color: [
      "BLUE"
    ],
    size: ["XS","S","M", "L", "XL"],
    image: {
      image1: "bTops1.jpg",
      image2: "bTops2.jpg",
      image3: "bTops3.jpg",
      image4: "bTops4.jpg",
    },
    tag: "NEW"
  },
  {
    id: "w12",
    title: "Crew-Neck Linen-Blend Blouse",
    price: 24,
    description:
    "Step into vacation mode in style with this stunning sleeveless blouse featuring a unique box pleat in the back and made in a perfectly cool linen blend fabric.",
    category: {
      women: true,
      jacket: false,
      hoodie: false,
      jeans: false,
      pants: false,
      tops: true
    },
    quantity: 56,
    color: [
      "ETRUSCAND RED"
    ],
    size: ["XS","S","M", "L", "XL"],
    image: {
      image1: "cTops1.jpg",
      image2: "cTops2.jpg",
      image3: "cTops3.jpg",
      image4: "cTops4.jpg",
    },
    tag: "NEW"
  },
  {
    id: "w13",
    title: "Narrow Shoulder Strap Dress",
    price: 32,
    description:
    "Calf-length dress in woven viscose fabric. Narrow shoulder straps, a straight neckline, and narrow, covered elastic at waist. Unlined.",
    category: {
      women: true,
      jacket: false,
      hoodie: false,
      jeans: false,
      pants: false,
      tops: false,
      dress: true
    },
    quantity: 56,
    color: [
      "NAVY BLUE"
    ],
    size: ["XS","S","M", "L", "XL"],
    image: {
      image1: "aDresses1.jpg",
      image2: "aDresses2.jpg",
      image3: "aDresses3.jpg",
      image4: "aDresses4.jpg",
    },
    tag: "TRENDING"
  },
  {
    id: "w14",
    title: "Linen Dress",
    price: 123,
    description:
    "Designed to be fitted at bodice with an A-line skirt.",
    category: {
      women: true,
      jacket: false,
      hoodie: false,
      jeans: false,
      pants: false,
      tops: false,
      dress: true
    },
    quantity: 56,
    color: [
      "WHITE"
    ],
    size: ["XS","S","M", "L", "XL"],
    image: {
      image1: "bDresses1.jpg",
      image2: "bDresses2.jpg",
      image3: "bDresses3.jpg",
      image4: "bDresses4.jpg",
    },
    tag: "NEW"
  },
  {
    id: "w15",
    title: "Flare Sweater Dress",
    price: 98,
    description:
    "A mini sweater dress complete with a classic mock neckline, long sleeves, a diamond pattern sweater material, and a flattering fit and flare silhouette.",
    category: {
      women: true,
      jacket: false,
      hoodie: false,
      jeans: false,
      pants: false,
      tops: false,
      dress:true
    },
    quantity: 34,
    color: [
      "IVORY"
    ],
    size: ["XS","S","M", "L", "XL"],
    image: {
      image1: "cDresses1.jpg",
      image2: "cDresses2.jpg",
      image3: "cDresses3.jpg",
      image4: "cDresses4.jpg",
    },
    tag: "NEW"
  },
  {
    id: "w16",
    title: "A-Line Mini Skirt",
    price: 24,
    description:
    "This lovely A-line mini skirt features a front zipper and a stretch fabrication so you can enjoy all your activities without any worries.",
    category: {
      women: true,
      jacket: false,
      hoodie: false,
      jeans: false,
      pants: false,
      tops: false,
      dress:false,
      skirt:true
    },
    quantity: 24,
    color: [
      "BLACK"
    ],
    size: ["XS","S","M", "L", "XL"],
    image: {
      image1: "aSkirt1.jpg",
      image2: "aSkirt2.jpg",
      image3: "aSkirt3.jpg",
      image4: "aSkirt4.jpg",
    },
    tag: "NEW"
  },
  {
    id: "w17",
    title: "tatiana skirt",
    price: 45,
    description:
    "This lovely A-line mini skirt features a front zipper and a stretch fabrication so you can enjoy all your activities without any worries.",
    category: {
      women: true,
      jacket: false,
      hoodie: false,
      jeans: false,
      pants: false,
      tops: false,
      dress:false,
      skirt:true
    },
    quantity: 24,
    color: [
      "LIGHTGREY"
    ],
    size: ["XS","S","M", "L", "XL"],
    image: {
      image1: "bSkirt1.jpg",
      image2: "bSkirt2.jpg",
      image3: "bSkirt3.jpg",
      image4: "bSkirt4.jpg",
    },
    tag: "NEW"
  },
  {
    id: "w18",
    title: "Poplin Skirt",
    price: 50,
    description:
    "Loose-fit, ankle-length circle skirt in crisp cotton poplin. High waist, concealed zipper at one side with button, and a wide box pleat at front. Discreet side-seam pockets Unlined.",
    category: {
      women: true,
      jacket: false,
      hoodie: false,
      jeans: false,
      pants: false,
      tops: false,
      dress:false,
      skirt:true
    },
    quantity: 14,
    color: [
      "NAVY BLUR/STRIPED"
    ],
    size: ["XS","S","M", "L", "XL"],
    image: {
      image1: "cSkirt1.jpg",
      image2: "cSkirt2.jpg",
      image3: "cSkirt3.jpg",
      image4: "cSkirt4.jpg",
    },
    tag: "NEW"
  },
  {
    id: "w19",
    title: "Jumpsuit with Wrap Detail at Back",
    price:45,
    description:
    "Super elegant, this stretch jumpsuit featuring a wrap detail at back is perfect for a chic night out or any special occasion.",
    category: {
      women: true,
      jacket: false,
      hoodie: false,
      jeans: false,
      pants: false,
      tops: false,
      dress:false,
      skirt:false,
      jumpsuit:true
    },
    quantity: 14,
    color: [
      "BLACK"
    ],
    size: ["XS","S","M", "L", "XL"],
    image: {
      image1: "aJumpsuit1.jpg",
      image2: "aJumpsuit2.jpg",
      image3: "aJumpsuit3.jpg",
      image4: "aJumpsuit4.jpg",
    },
    tag: "NEW"
  },
  {
    id: "w20",
    title: "cargo jumpsuit",
    price:74,
    description:
    "This is a strapless jumpsuit with front patch pockets, side cargo pockets and a smocked back panel for a more comfortable fit. It’s made with Crepette™ — our one-of-a-kind Japanese crepe fabric beloved for its subtle texture, breezy drape and the fact that it basically never wrinkles.",
    category: {
      women: true,
      jacket: false,
      hoodie: false,
      jeans: false,
      pants: false,
      tops: false,
      dress:false,
      skirt:false,
      jumpsuit:true
    },
    quantity: 14,
    color: [
      "NAMAD TAUPE"
    ],
    size: ["XS","S","M", "L", "XL"],
    image: {
      image1: "bJumpsuit1.jpg",
      image2: "bJumpsuit2.jpg",
      image3: "bJumpsuit3.jpg",
      image4: "bJumpsuit4.jpg",
    },
    tag: "NEW"
  },
  {
    id: "w21",
    title: "Linen-Blend Jumpsuit",
    price:143,
    description:
    "This super cute sleeveless jumpsuit featuring a trendy wide leg is the definition of comfort. Made in a light linen blend, this piece is perfect for your next sunny vacation.",
    category: {
      women: true,
      jacket: false,
      hoodie: false,
      jeans: false,
      pants: false,
      tops: false,
      dress:false,
      skirt:false,
      jumpsuit:true
    },
    quantity: 0,
    color: [
      "BROWN"
    ],
    size: ["XS","S","M", "L", "XL"],
    image: {
      image1: "cJumpsuit1.jpg",
      image2: "cJumpsuit2.jpg",
      image3: "cJumpsuit3.jpg",
      image4: "cJumpsuit4.jpg",
    },
    tag: "TRENDING"
  },


];
