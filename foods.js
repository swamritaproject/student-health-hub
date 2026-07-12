const foods = [

{
name:"Egg",
category:"protein",
emoji:"🥚",
calories:155,
protein:13,
carbs:1.1,
fat:11,
fibre:0,
calcium:50,
iron:1.2,
water:76,
benefits:"High-quality protein, Vitamin B12, Choline"
},

{
name:"Chicken Breast",
category:"protein",
emoji:"🍗",
calories:165,
protein:31,
carbs:0,
fat:3.6,
fibre:0,
calcium:15,
iron:1,
water:65,
benefits:"Lean protein, Muscle growth"
},

{
name:"Fish (Rohu)",
category:"protein",
emoji:"🐟",
calories:97,
protein:17,
carbs:0,
fat:2,
fibre:0,
calcium:650,
iron:1.1,
water:79,
benefits:"Rich in Omega-3 fatty acids"
},

{
name:"Mutton",
category:"protein",
emoji:"🥩",
calories:294,
protein:25,
carbs:0,
fat:21,
fibre:0,
calcium:18,
iron:2.7,
water:58,
benefits:"Rich in Iron and Vitamin B12"
},

{
name:"Soybean",
category:"protein",
emoji:"🫘",
calories:446,
protein:36,
carbs:30,
fat:20,
fibre:9,
calcium:277,
iron:15.7,
water:9,
benefits:"Excellent plant protein"
},

{
name:"Soy Chunks",
category:"protein",
emoji:"🧆",
calories:345,
protein:52,
carbs:33,
fat:0.5,
fibre:13,
calcium:350,
iron:9.5,
water:8,
benefits:"Very high protein food"
},

{
name:"Milk",
category:"dairy",
emoji:"🥛",
calories:61,
protein:3.2,
carbs:5,
fat:3.3,
fibre:0,
calcium:120,
iron:0,
water:88,
benefits:"Excellent source of calcium"
},

{
name:"Curd",
category:"dairy",
emoji:"🥣",
calories:98,
protein:11,
carbs:3.4,
fat:4.3,
fibre:0,
calcium:121,
iron:0.2,
water:85,
benefits:"Contains probiotics"
},

{
name:"Paneer",
category:"dairy",
emoji:"🧀",
calories:265,
protein:18,
carbs:1.2,
fat:20,
fibre:0,
calcium:208,
iron:0.5,
water:55,
benefits:"High protein and calcium"
},

{
name:"Rice",
category:"grain",
emoji:"🍚",
calories:130,
protein:2.7,
carbs:28,
fat:0.3,
fibre:0.4,
calcium:10,
iron:0.2,
water:68,
benefits:"Quick energy source"
},

{
name:"Brown Rice",
category:"grain",
emoji:"🌾",
calories:111,
protein:2.6,
carbs:23,
fat:0.9,
fibre:1.8,
calcium:10,
iron:0.4,
water:70,
benefits:"High fibre grain"
},

{
name:"Puffed Rice (Muri)",
category:"grain",
emoji:"🥣",
calories:402,
protein:6,
carbs:90,
fat:0.5,
fibre:1.7,
calcium:18,
iron:3,
water:3,
benefits:"Light energy snack"
},

{
name:"Roti",
category:"grain",
emoji:"🫓",
calories:297,
protein:9,
carbs:55,
fat:3,
fibre:8,
calcium:30,
iron:3.5,
water:28,
benefits:"Whole wheat energy source"
},

{
name:"Oats",
category:"grain",
emoji:"🥣",
calories:389,
protein:17,
carbs:66,
fat:7,
fibre:11,
calcium:54,
iron:4.7,
water:8,
benefits:"Heart healthy whole grain"
},

{
name:"Bread",
category:"grain",
emoji:"🍞",
calories:265,
protein:9,
carbs:49,
fat:3.2,
fibre:2.7,
calcium:144,
iron:3.6,
water:37,
benefits:"Common carbohydrate source"
},

{
name:"Poha",
category:"grain",
emoji:"🍽️",
calories:130,
protein:2.6,
carbs:28,
fat:0.2,
fibre:1,
calcium:10,
iron:0.7,
water:68,
benefits:"Easy to digest breakfast"
},

{
name:"Moong Dal",
category:"pulse",
emoji:"🫘",
calories:347,
protein:24,
carbs:63,
fat:1.2,
fibre:16,
calcium:132,
iron:6.7,
water:10,
benefits:"Rich in protein and fibre"
},

{
name:"Masoor Dal",
category:"pulse",
emoji:"🫘",
calories:352,
protein:25,
carbs:60,
fat:1.1,
fibre:11,
calcium:35,
iron:7.5,
water:9,
benefits:"Good source of iron"
},

{
name:"Toor Dal",
category:"pulse",
emoji:"🫘",
calories:343,
protein:22,
carbs:63,
fat:1.5,
fibre:15,
calcium:73,
iron:5.8,
water:10,
benefits:"Rich in protein"
},

{
name:"Chana Dal",
category:"pulse",
emoji:"🫘",
calories:364,
protein:20,
carbs:61,
fat:6,
fibre:17,
calcium:49,
iron:4.3,
water:10,
benefits:"High fibre pulse"
},

{
name:"Rajma",
category:"pulse",
emoji:"🫘",
calories:333,
protein:24,
carbs:60,
fat:0.8,
fibre:25,
calcium:143,
iron:5.1,
water:11,
benefits:"Supports heart health"
},

{
name:"Kabuli Chana",
category:"pulse",
emoji:"🧆",
calories:364,
protein:19,
carbs:61,
fat:6,
fibre:17,
calcium:49,
iron:6.2,
water:10,
benefits:"Rich in protein and fibre"
},

{
name:"Green Peas",
category:"pulse",
emoji:"🟢",
calories:81,
protein:5.4,
carbs:14,
fat:0.4,
fibre:5.7,
calcium:25,
iron:1.5,
water:79,
benefits:"Rich in vitamins and fibre"
},

{
name:"Peanuts",
category:"nuts",
emoji:"🥜",
calories:567,
protein:26,
carbs:16,
fat:49,
fibre:8.5,
calcium:92,
iron:4.6,
water:7,
benefits:"Healthy fats and protein"
},

{
name:"Almonds",
category:"nuts",
emoji:"🌰",
calories:579,
protein:21,
carbs:22,
fat:50,
fibre:12,
calcium:269,
iron:3.7,
water:4,
benefits:"Rich in Vitamin E"
},

{
name:"Cashew",
category:"nuts",
emoji:"🥜",
calories:553,
protein:18,
carbs:30,
fat:44,
fibre:3.3,
calcium:37,
iron:6.7,
water:5,
benefits:"Rich in magnesium"
},

{
name:"Walnut",
category:"nuts",
emoji:"🌰",
calories:654,
protein:15,
carbs:14,
fat:65,
fibre:7,
calcium:98,
iron:2.9,
water:4,
benefits:"Excellent source of Omega-3"
},

{
name:"Spinach",
category:"vegetable",
emoji:"🥬",
calories:23,
protein:2.9,
carbs:3.6,
fat:0.4,
fibre:2.2,
calcium:99,
iron:2.7,
water:91,
benefits:"Rich in iron and folate"
},

{
name:"Potato",
category:"vegetable",
emoji:"🥔",
calories:77,
protein:2,
carbs:17,
fat:0.1,
fibre:2.2,
calcium:12,
iron:0.8,
water:79,
benefits:"Good source of energy"
},

{
name:"Tomato",
category:"vegetable",
emoji:"🍅",
calories:18,
protein:0.9,
carbs:3.9,
fat:0.2,
fibre:1.2,
calcium:10,
iron:0.3,
water:95,
benefits:"Rich in lycopene"
},

{
name:"Carrot",
category:"vegetable",
emoji:"🥕",
calories:41,
protein:0.9,
carbs:10,
fat:0.2,
fibre:2.8,
calcium:33,
iron:0.3,
water:88,
benefits:"Excellent source of Vitamin A"
},

{
name:"Cucumber",
category:"vegetable",
emoji:"🥒",
calories:15,
protein:0.7,
carbs:3.6,
fat:0.1,
fibre:0.5,
calcium:16,
iron:0.3,
water:96,
benefits:"Keeps the body hydrated"
},

{
name:"Cauliflower",
category:"vegetable",
emoji:"🥦",
calories:25,
protein:1.9,
carbs:5,
fat:0.3,
fibre:2,
calcium:22,
iron:0.4,
water:92,
benefits:"Rich in Vitamin C"
},

{
name:"Beetroot",
category:"vegetable",
emoji:"🫜",
calories:43,
protein:1.6,
carbs:10,
fat:0.2,
fibre:2.8,
calcium:16,
iron:0.8,
water:88,
benefits:"Rich in folate"
},

{
name:"Apple",
category:"fruit",
emoji:"🍎",
calories:52,
protein:0.3,
carbs:14,
fat:0.2,
fibre:2.4,
calcium:6,
iron:0.1,
water:86,
benefits:"Rich in fibre and Vitamin C"
},

{
name:"Banana",
category:"fruit",
emoji:"🍌",
calories:89,
protein:1.1,
carbs:23,
fat:0.3,
fibre:2.6,
calcium:5,
iron:0.3,
water:75,
benefits:"High in potassium"
},

{
name:"Orange",
category:"fruit",
emoji:"🍊",
calories:47,
protein:0.9,
carbs:12,
fat:0.1,
fibre:2.4,
calcium:40,
iron:0.1,
water:87,
benefits:"Excellent source of Vitamin C"
},

{
name:"Mango",
category:"fruit",
emoji:"🥭",
calories:60,
protein:0.8,
carbs:15,
fat:0.4,
fibre:1.6,
calcium:11,
iron:0.2,
water:83,
benefits:"Rich in Vitamin A"
},

{
name:"Guava",
category:"fruit",
emoji:"🍈",
calories:68,
protein:2.6,
carbs:14,
fat:1,
fibre:5.4,
calcium:18,
iron:0.3,
water:81,
benefits:"Very high in Vitamin C"
},

{
name:"Papaya",
category:"fruit",
emoji:"🍈",
calories:43,
protein:0.5,
carbs:11,
fat:0.3,
fibre:1.7,
calcium:20,
iron:0.3,
water:88,
benefits:"Good for digestion"
},

{
name:"Watermelon",
category:"fruit",
emoji:"🍉",
calories:30,
protein:0.6,
carbs:8,
fat:0.2,
fibre:0.4,
calcium:7,
iron:0.2,
water:91,
benefits:"Keeps the body hydrated"
},

{
name:"Pineapple",
category:"fruit",
emoji:"🍍",
calories:50,
protein:0.5,
carbs:13,
fat:0.1,
fibre:1.4,
calcium:13,
iron:0.3,
water:86,
benefits:"Contains bromelain enzyme"
},

{
name:"Pomegranate",
category:"fruit",
emoji:"❤️",
calories:83,
protein:1.7,
carbs:19,
fat:1.2,
fibre:4,
calcium:10,
iron:0.3,
water:78,
benefits:"Rich in antioxidants"
},

{
name:"Grapes",
category:"fruit",
emoji:"🍇",
calories:69,
protein:0.7,
carbs:18,
fat:0.2,
fibre:0.9,
calcium:10,
iron:0.4,
water:81,
benefits:"Good source of antioxidants"
},

{
name:"Coconut",
category:"fruit",
emoji:"🥥",
calories:354,
protein:3.3,
carbs:15,
fat:33,
fibre:9,
calcium:14,
iron:2.4,
water:47,
benefits:"Healthy fats and minerals"
}

];
