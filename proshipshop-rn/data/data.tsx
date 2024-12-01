interface ProductReview {
  user: string;
  comment: string;
  rating: number;
}

interface ProductSpecifications {
  [key: string]: string; // Flexible key-value pairs for specifications
}

export interface Product {
  id: number;
  name: string;
  image: string; // Path to the image
  price: number;
  discount_price: number;
  description: string;
  rating: number;
  reviews: ProductReview[];
  sizes: string[];
  colors: string[];
  specifications: ProductSpecifications;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Men's Casual Shorts",
    image: require("../assets/product-image/1.jpg"),
    price: 25.99,
    discount_price: 19.99,
    description: "Comfortable and lightweight casual shorts for everyday wear.",
    rating: 4.5,
    reviews: [
      {
        user: "John Doe",
        comment: "Very comfortable and fits well!",
        rating: 5,
      },
      {
        user: "Alex Smith",
        comment: "Good quality but sizing runs small.",
        rating: 4,
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Black", "Gray"],
    specifications: {
      Material: "100% Cotton",
      Fit: "Regular",
      Care: "Machine wash",
    },
  },
  {
    id: 2,
    name: "Women's Summer Dress",
    image: require("../assets/product-image/15.jpg"),
    price: 45.99,
    discount_price: 35.99,
    description:
      "Elegant summer dress made with breathable fabric, perfect for warm weather.",
    rating: 4.7,
    reviews: [
      {
        user: "Emily Clark",
        comment: "Absolutely love the color and design!",
        rating: 5,
      },
      {
        user: "Sophia Lee",
        comment: "Great value for the price.",
        rating: 4.5,
      },
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Red", "Yellow", "Floral"],
    specifications: {
      Material: "Polyester Blend",
      Length: "Knee-Length",
      Care: "Hand wash recommended",
    },
  },
  {
    id: 3,
    name: "Men's Office Bag",
    image: require("../assets/product-image/3.png"),
    price: 55.0,
    discount_price: 45.0,
    description: "Stylish and durable office bag with multiple compartments.",
    rating: 4.6,
    reviews: [
      {
        user: "Robert James",
        comment: "Perfect for work and travel!",
        rating: 5,
      },
      {
        user: "David Wilson",
        comment: "Good quality, but straps could be better.",
        rating: 4,
      },
    ],
    sizes: ["Standard"],
    colors: ["Black", "Brown"],
    specifications: {
      Material: "Leather",
      Compartments: "3",
      Capacity: "15L",
    },
  },
  {
    id: 4,
    name: "Women's Handbag",
    image: require("../assets/product-image/5.png"),
    price: 75.99,
    discount_price: 59.99,
    description:
      "Chic handbag with spacious compartments for daily essentials.",
    rating: 4.8,
    reviews: [
      {
        user: "Sophia Adams",
        comment: "Great quality and looks elegant!",
        rating: 5,
      },
      {
        user: "Emma Watson",
        comment: "Perfect size and beautiful design.",
        rating: 4.5,
      },
    ],
    sizes: ["Standard"],
    colors: ["Beige", "Black", "Pink"],
    specifications: {
      Material: "Synthetic Leather",
      Compartments: "2",
      Care: "Wipe with a dry cloth",
    },
  },
  {
    id: 5,
    name: "Kids Backpack",
    image: require("../assets/product-image/4.jpg"),
    price: 29.99,
    discount_price: 24.99,
    description:
      "Fun and durable backpack for kids, perfect for school or trips.",
    rating: 4.4,
    reviews: [
      { user: "Liam Brown", comment: "My son loves it!", rating: 5 },
      {
        user: "Olivia Taylor",
        comment: "Bright colors and sturdy.",
        rating: 4,
      },
    ],
    sizes: ["Standard"],
    colors: ["Red", "Blue", "Green"],
    specifications: {
      Material: "Polyester",
      Capacity: "12L",
      Care: "Hand wash only",
    },
  },
  {
    id: 6,
    name: "Sportswear T-Shirt",
    image: require("../assets/product-image/7.jpg"),
    price: 19.99,
    discount_price: 14.99,
    description: "Moisture-wicking t-shirt for sports and workouts.",
    rating: 4.3,
    reviews: [
      {
        user: "Noah Davis",
        comment: "Very comfortable for running.",
        rating: 5,
      },
      {
        user: "Ava Johnson",
        comment: "Good fit but limited color options.",
        rating: 4,
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Gray", "White"],
    specifications: {
      Material: "Polyester",
      Fit: "Slim",
      Care: "Machine wash cold",
    },
  },
  {
    id: 7,
    name: "Men's Formal Shoes",
    image: require("../assets/product-image/10.png"),
    price: 89.99,
    discount_price: 69.99,
    description: "Classic formal shoes perfect for office or events.",
    rating: 4.6,
    reviews: [
      {
        user: "James Walker",
        comment: "Stylish and very comfortable.",
        rating: 5,
      },
      {
        user: "Benjamin Clark",
        comment: "Great value for the quality.",
        rating: 4.5,
      },
    ],
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["Black", "Brown"],
    specifications: {
      Material: "Genuine Leather",
      Sole: "Rubber",
      Care: "Use leather conditioner",
    },
  },
  {
    id: 8,
    name: "Casual Denim Jacket",
    image: require("../assets/product-image/11.jpg"),
    price: 69.99,
    discount_price: 54.99,
    description: "Stylish denim jacket, perfect for layering.",
    rating: 4.7,
    reviews: [
      {
        user: "Charlotte Harris",
        comment: "Love the fit and material!",
        rating: 5,
      },
      { user: "Mia Martin", comment: "Perfect for chilly days.", rating: 4.5 },
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Black"],
    specifications: {
      Material: "Denim",
      Fit: "Regular",
      Care: "Machine wash cold",
    },
  },
  {
    id: 9,
    name: "Women's Yoga Pants",
    image: require("../assets/product-image/14.png"),
    price: 29.99,
    discount_price: 22.99,
    description: "Comfortable and stretchy yoga pants for fitness or lounging.",
    rating: 4.8,
    reviews: [
      {
        user: "Isabella Young",
        comment: "Super soft and fits perfectly.",
        rating: 5,
      },
      { user: "Evelyn Moore", comment: "Great for workouts!", rating: 4.5 },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Gray", "Purple"],
    specifications: {
      Material: "Spandex",
      Fit: "Slim",
      Care: "Machine wash cold",
    },
  },
  {
    id: 10,
    name: "Men's Winter Coat",
    image: require("../assets/product-image/16.jpg"),
    price: 120.0,
    discount_price: 99.99,
    description: "Warm and insulated coat for winter weather.",
    rating: 4.9,
    reviews: [
      {
        user: "Michael Hall",
        comment: "Very warm and looks great!",
        rating: 5,
      },
      { user: "William Allen", comment: "High-quality material.", rating: 4.8 },
    ],
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Black", "Navy Blue", "Gray"],
    specifications: {
      Material: "Wool Blend",
      Insulation: "Synthetic",
      Care: "Dry clean only",
    },
  },
];

import Colors from "@/constants/Colors";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";
export interface Category {
  name: string;
  icon: React.JSX.Element;
}
export const categories: Category[] = [
  {
    name: "Men T-Shirts",
    icon: <Ionicons name="shirt-outline" color={Colors.light.tint} size={24} />,
  },
  {
    name: "Bag",
    icon: (
      <Ionicons name="bag-handle-outline" color={Colors.light.tint} size={24} />
    ),
  },
  {
    name: "Sportswear",
    icon: (
      <MaterialCommunityIcons
        name="shoe-sneaker"
        color={Colors.light.tint}
        size={24}
      />
    ),
  },
  {
    name: "Formal Shoes",
    icon: (
      <MaterialCommunityIcons
        name="shoe-formal"
        color={Colors.light.tint}
        size={24}
      />
    ),
  },
  {
    name: "Kids T-Shirts",
    icon: <FontAwesome5 name="tshirt" color={Colors.light.tint} size={24} />,
  },
  {
    name: "Kids Backpacks",
    icon: <MaterialIcons name="backpack" color={Colors.light.tint} size={24} />,
  },
];

export const productsShoes: Product[] = [
  {
    id: 1,
    name: "Nike Air Max 2023",
    image: require("../assets/shoes/10.png"),
    price: 120.99,
    discount_price: 99.99,
    description: "Nike Air Max 2023 for optimal comfort and performance.",
    rating: 4.7,
    reviews: [
      {
        user: "John Doe",
        comment: "Very comfortable for running!",
        rating: 5,
      },
      {
        user: "Jake Smith",
        comment: "Good shoes, but could use more color options.",
        rating: 4,
      },
    ],
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["Black", "White", "Red"],
    specifications: {
      Material: "Synthetic",
      Sole: "Rubber",
      Weight: "Lightweight",
    },
  },
  {
    id: 2,
    name: "Adidas Ultraboost 23",
    image: require("../assets/shoes/20.png"),
    price: 180.0,
    discount_price: 150.0,
    description:
      "Adidas Ultraboost with superior cushioning for all-day comfort.",
    rating: 4.8,
    reviews: [
      {
        user: "Liam Brown",
        comment: "The best cushioning I’ve ever experienced!",
        rating: 5,
      },
      {
        user: "Ethan Green",
        comment: "Great shoe but too expensive.",
        rating: 4.5,
      },
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["Black", "White", "Blue"],
    specifications: {
      Material: "Primeknit",
      Sole: "Boost",
      Weight: "Moderate",
    },
  },
  {
    id: 3,
    name: "Nike Zoom Fly 5",
    image: require("../assets/shoes/30.png"),
    price: 140.0,
    discount_price: 119.99,
    description: "Nike Zoom Fly 5 with responsive cushioning and stability.",
    rating: 4.6,
    reviews: [
      {
        user: "Benjamin Clark",
        comment: "Perfect for long-distance running.",
        rating: 5,
      },
      {
        user: "David Wilson",
        comment: "Not very durable, but fast and lightweight.",
        rating: 4,
      },
    ],
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["Grey", "Blue", "Pink"],
    specifications: {
      Material: "Mesh",
      Sole: "Carbon Fiber",
      Weight: "Lightweight",
    },
  },
  {
    id: 4,
    name: "Adidas NMD_R1",
    image: require("../assets/shoes/40.png"),
    price: 130.99,
    discount_price: 109.99,
    description: "Adidas NMD_R1 sneakers designed for city life and comfort.",
    rating: 4.5,
    reviews: [
      {
        user: "Sophia Adams",
        comment: "Stylish and comfortable for everyday wear.",
        rating: 5,
      },
      {
        user: "Mia Martin",
        comment: "Slightly tight fit but looks great.",
        rating: 4,
      },
    ],
    sizes: ["6", "7", "8", "9", "10"],
    colors: ["Black", "White", "Pink"],
    specifications: {
      Material: "Primeknit",
      Sole: "Boost",
      Weight: "Moderate",
    },
  },
  {
    id: 5,
    name: "Nike React Infinity Run",
    image: require("../assets/shoes/50.png"),
    price: 160.0,
    discount_price: 130.0,
    description:
      "Nike React Infinity Run for long-lasting comfort and protection.",
    rating: 4.7,
    reviews: [
      {
        user: "Charlotte Harris",
        comment: "Great for marathon training!",
        rating: 5,
      },
      {
        user: "Emma Watson",
        comment: "A bit too bulky for me.",
        rating: 4,
      },
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["Black", "White", "Purple"],
    specifications: {
      Material: "Flyknit",
      Sole: "React Foam",
      Weight: "Moderate",
    },
  },
  {
    id: 6,
    name: "Adidas Yeezy 350 V2",
    image: require("../assets/shoes/60.png"),
    price: 220.0,
    discount_price: 180.0,
    description:
      "Adidas Yeezy 350 V2 with a minimalist design and premium comfort.",
    rating: 4.9,
    reviews: [
      {
        user: "William Allen",
        comment: "Absolutely love these shoes, so comfy!",
        rating: 5,
      },
      {
        user: "Isabella Young",
        comment: "Expensive but totally worth it.",
        rating: 4.8,
      },
    ],
    sizes: ["6", "7", "8", "9", "10"],
    colors: ["Black", "White", "Gray"],
    specifications: {
      Material: "Primeknit",
      Sole: "Boost",
      Weight: "Moderate",
    },
  },
  {
    id: 7,
    name: "Nike Air Force 1 Low",
    image: require("../assets/shoes/70.png"),
    price: 110.99,
    discount_price: 95.0,
    description:
      "Classic Nike Air Force 1 Low sneakers, known for comfort and style.",
    rating: 4.8,
    reviews: [
      {
        user: "Ava Johnson",
        comment: "Iconic and comfortable, the best casual sneakers!",
        rating: 5,
      },
      {
        user: "Olivia Taylor",
        comment: "Great value for money.",
        rating: 4.5,
      },
    ],
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["White", "Black", "Red"],
    specifications: {
      Material: "Leather",
      Sole: "Rubber",
      Weight: "Moderate",
    },
  },
  {
    id: 8,
    name: "Adidas Gazelle OG",
    image: require("../assets/shoes/80.png"),
    price: 80.99,
    discount_price: 69.99,
    description:
      "Adidas Gazelle OG, a retro style shoe with comfort and heritage.",
    rating: 4.6,
    reviews: [
      {
        user: "Evelyn Moore",
        comment: "Retro look, super comfy!",
        rating: 5,
      },
      {
        user: "Sophia Lee",
        comment: "Runs a little small, but love the design.",
        rating: 4,
      },
    ],
    sizes: ["6", "7", "8", "9"],
    colors: ["Blue", "Green", "Yellow"],
    specifications: {
      Material: "Suede",
      Sole: "Rubber",
      Weight: "Lightweight",
    },
  },
];
