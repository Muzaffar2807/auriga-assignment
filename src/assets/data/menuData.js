const menu = [
  {
    category: "Appetizers",
    items: [
      {
        name: "Peanut Masala",
        price: "₹80",
        description:
          "A zesty and spicy snack made with chickpeas, tomatoes, and onions with an Indian twist",
      },
      {
        name: "French Fries",
        price: "₹100",
        description:
          "The classic crispy potato fries wedges deep-fried in salt",
      },
      {
        name: "Honey Chilli Potato",
        price: "₹120",
        description:
          "Crispy, sweet and spicy potato wedges coated with honey, chili sauce, and spices",
      },
    ],
    image: "Almond Milk.webp",
  },
  {
    category: "Soups",
    items: [
      {
        name: "Tomato Soup",
        price: "₹100",
        description:
          "A healthy and tasty creamy soup recipe prepared mainly with ripe and juicy tomatoes and other spices",
      },
      {
        name: "Sweet Corn Soup (Veg/Chicken",
        price: "₹130/150",
        description:
          "A creamy and comforting soup made with sweet corn & packed with veggies that can be enjoyed year-round",
      },
    ],
    image: "Beef Fry.webp",
  },
  {
    category: "Sandwiches",
    items: [
      {
        name: "Veg Sandwich",
        price: "₹90",
        description:
          "Fresh farm vegetables, lettuce, and a slice of cheese filled with toasted bread",
      },
      {
        name: "Egg & Cheese Sandwich",
        price: "₹100",
        description:
          "Egg sunny side up layered with cheese and lettuce on toasted bread with dip",
      },
      {
        name: "Grilled Chicken Sandwich",
        price: "₹120",
        description:
          "Marinated grilled chicken slices with lettuce and vegetables in toasted bread with dip",
      },
    ],
    image: "Breakfast.webp",
  },
  {
    category: "Salads",
    items: [
      {
        name: "Onion & Tomato Salad",
        price: "₹90",
        description:
          "Fresh farm tomatoes, onions with a sprinkle of lime and pepper",
      },
      {
        name: "Chicken 65",
        price: "₹180",
        description:
          "A spicy, deep-fried chicken dish originating from South India",
      },
      {
        name: "Chicken Kondattam",
        price: "₹190",
        description:
          "Chicken pieces marinated in a spicy mixture, deep-fried and sautéed in masalas",
      },
      {
        name: "Tomato Soup",
        price: "₹100",
        description:
          "A healthy and tasty creamy soup recipe prepared mainly with ripe and juicy tomatoes and other spices",
      },
      {
        name: "Sweet Corn Soup (Veg/Chicken",
        price: "₹130/150",
        description:
          "A creamy and comforting soup made with sweet corn & packed with veggies that can be enjoyed year-round",
      },
      {
        name: "Tomato Soup",
        price: "₹100",
        description:
          "A healthy and tasty creamy soup recipe prepared mainly with ripe and juicy tomatoes and other spices",
      },
      {
        name: "Sweet Corn Soup (Veg/Chicken",
        price: "₹130/150",
        description:
          "A creamy and comforting soup made with sweet corn & packed with veggies that can be enjoyed year-round",
      },
    ],
    image: "Salmon in Sauce.webp",
  },
  {
    category: "Breakfast",
    items: [
      {
        name: "Thattu Dosa",
        price: "₹80",
        description:
          "A popular South Indian pancake-shaped breakfast made with fermented rice & lentil batter that is healthy, delicious, and filling",
      },
      {
        name: "Buffet Breakfast",
        price: "₹200",
        description:
          "An all-you-can-eat spread of South Indian and North Indian breakfast spread",
      },
      {
        name: "Idli",
        price: "₹60",
        description:
          "A soft, pillowy steamed savory cake made from rice and lentil batter",
      },
      {
        name: "Tomato Soup",
        price: "₹100",
        description:
          "A healthy and tasty creamy soup recipe prepared mainly with ripe and juicy tomatoes and other spices",
      },
      {
        name: "Tomato Soup",
        price: "₹100",
        description:
          "A healthy and tasty creamy soup recipe prepared mainly with ripe and juicy tomatoes and other spices",
      },
    ],
    image: "Garlic Naan.webp",
  },
  {
    category: "Vegetarian",
    items: [
      {
        name: "Dal Fry",
        price: "₹100",
        description:
          "A delicious lentil recipe popular in India that is made with tur dal (pigeon pea lentils, onions, tomatoes and spices",
      },
      {
        name: "Veg Korma",
        price: "₹120",
        description:
          "A lightly spiced and delicious curry made with a combination of carrots, cauliflower, potatoes, french beans, green peas",
      },
      {
        name: "Rajma Masala",
        price: "₹140",
        description:
          "A lightly spiced, creamy and delicious Punjabi curry made with kidney beans, onions, tomatoes and spices",
      },
      {
        name: "Tomato Soup",
        price: "₹100",
        description:
          "A healthy and tasty creamy soup recipe prepared mainly with ripe and juicy tomatoes and other spices",
      },
      {
        name: "Sweet Corn Soup (Veg/Chicken",
        price: "₹130/150",
        description:
          "A creamy and comforting soup made with sweet corn & packed with veggies that can be enjoyed year-round",
      },
    ],
    image: "Chicken Biryani.webp",
  },
  {
    category: "Chicken",
    items: [
      {
        name: "Chicken Curry",
        price: "₹170",
        description:
          "Chicken stewed in an onion and tomato based sauce, flavored with ginger, garlic, chilli and a variety of spices",
      },
      {
        name: "Butter Chicken",
        price: "₹200",
        description:
          "Marinated chicken that's first grilled and then served in a rich sauce made with tomato, butter, and a special spice blend as a base.",
      },
    ],
    image: "Chicken Noodles.webp",
  },
  {
    category: "OrienTAL (Chicken",
    items: [
      {
        name: "Chilli Chicken (Dry/Gravy",
        price: "₹190",
        description:
          "One of the most popular Indo-chinese style dry/thick gravy dish where chicken is cooked in a variety of sauces",
      },
    ],
    image: "Simple Green Salad.webp",
  },
  {
    category: "BEEF",
    items: [
      {
        name: "Beef Dry Fry",
        price: "₹200",
        description:
          "A lip-smacking Kerala style fried beef dish where beef is well-cooked in an aroma of Indian spices",
      },
      {
        name: "Schezwan Beef",
        price: "₹180",
        description:
          "Thin slices of marinated beef stir-fried to juicy perfection in Szechuan sauce",
      },
    ],
    image: "Beef Fry.webp",
  },

  {
    category: "EGG",
    items: [
      {
        name: "Egg Curry",
        price: "₹80",
        description:
          "Hard-boiled egg cooked in a mixture of Indian spices and coconut milk",
      },
      {
        name: "Egg Masala",
        price: "₹90",
        description:
          "A delicious spicy preparation of the eggs in an onion and tomato-based gravy",
      },
      {
        name: "Egg Roast",
        price: "₹100",
        description:
          "A semi-dry, delicious blend of tomato and onions sautéed with Indian spices to form a spicy, tangy masala paste",
      },
    ],

    image: "Egg Roast.webp",
  },

  {
    category: "Fish",
    items: [
      {
        name: "Kudampuli Fish Curry (Based on Availability",
        description:
          "A Malabari special dish from Kerala where fish is slow-cooked in a sauce with Kodampuli (Malabar tamarind used as a souring agent mixed with Indian spices",
      },
      {
        name: "Kerala Fish Fry (Based on Availability",
        description:
          "Coated with delicious Indian masala and deep-fried in a Tawa, this Kerala fish fry is crispy on the outside with a succulent flesh inside",
      },
    ],
    image: "Spicy Food.webp",
  },

  {
    category: "Rice",
    items: [
      {
        name: "Plain Rice",
        price: "₹100",
        description: "Plain, steamed white rice",
      },
      {
        name: "Veg Biriyani",
        price: "₹130",
        description:
          "An aromatic rice dish made with basmati rice, spices & mixed veggies",
      },
      {
        name: "Egg Biriyani",
        price: "₹150",
        description:
          "Fragrant basmati rice cooked with aromatic biryani spices, herbs & boiled eggs to yield a delicious meal",
      },
      {
        name: "Veg Biriyani",
        price: "₹130",
        description:
          "An aromatic rice dish made with basmati rice, spices & mixed veggies",
      },
      {
        name: "Egg Biriyani",
        price: "₹150",
        description:
          "Fragrant basmati rice cooked with aromatic biryani spices",
      },
    ],
    image: "Sashimi Sushi.webp",
  },

  {
    category: "INDIAN BREAD",
    items: [
      {
        name: "Chapathi",
        price: "₹15",
        description: "Crepes made of whole-wheat flour, baked on a griddle",
      },
      {
        name: "Phulka",
        price: "₹15",
        description:
          "Whole wheat crepes which are soft, thin and puffed toasted on fire",
      },
      {
        name: "Kerala Parotta",
        price: "₹25",
        description:
          "Scrumptious gently cooked layered flatbread made with all-purpose flour",
      },
    ],
    image: "Chicken Noodles.webp",
  },

  {
    category: "Rice & Noodles",
    items: [
      {
        name: "Fried Rice (Veg/Egg/Chicken",
        price: "₹140/160/180",
        description:
          "A dish of cooked rice that has been stir-fried in a frying pan and mixed with vegetables",
      },
      {
        name: "Hakka Noodles (Veg/Egg/Chicken",
        price: "₹140/160/180",
        description:
          "A Chinese style dish where noodles are tossed with vegetables, meat and sauces",
      },
      {
        name: "Pad Thai Flat Noodles (Veg/Egg/Chicken",
        price: "₹150/175/195",
        description:
          "A Thai style flat noodles tossed with boiled chicken, egg, vegetables, meat and sauces",
      },
    ],
    image: "Potato Pancakes Deruny.webp",
  },

  {
    category: "Hot Beverages",
    items: [
      {
        name: "Tea",
        price: "₹25",
        description: "Fresh hot tea from the Vagamon hills",
      },
      {
        name: "Masala Chai",
        price: "₹40",
        description: "Tea made by simmering Indian spices to mila and tea",
      },
      {
        name: "Coffee",
        price: "₹30",
        description: "Get your mental blocks away with a cuppa coffee",
      },
      {
        name: "Tea",
        price: "₹25",
        description: "Fresh hot tea from the Vagamon hills",
      },
      {
        name: "Masala Chai",
        price: "₹40",
        description: "Tea made by simmering Indian spices to mila and tea",
      },
    ],
    image: "Chocolate Drink with Marshmallows.webp",
  },

  {
    category: "Coolers & Likes",
    items: [
      {
        name: "Kulukki Sarbat",
        price: "₹100",
        description:
          "A refreshing sweet & spicy refreshing lemon drink for hot summers!",
      },
      {
        name: "Classic Mojito",
        price: "₹120",
        description:
          "Classics never die! A refreshing drink made up of mint and lime",
      }, 
    ],
    image: "Fruit Juice.webp",
  },
];

export default menu;
