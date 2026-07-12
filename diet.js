const plans = {

child:{

calories:"1200–1700 kcal",
protein:"60 g",
carbs:"175 g",
fat:"40 g",
water:"1.5–2 L",

foods:[
"🥛 Milk",
"🍎 Apple",
"🥚 Egg",
"🥬 Spinach",
"🍚 Rice",
"🫘 Moong Dal"
]

},

teen:{

calories:"2000–2400 kcal",
protein:"65 g",
carbs:"300 g",
fat:"60 g",
water:"2–3 L",

foods:[
"🍗 Chicken",
"🍌 Banana",
"🥛 Milk",
"🍚 Rice",
"🥚 Egg",
"🫘 Dal"
]

},

male:{

calories:"2400–3000 kcal",
protein:"70 g",
carbs:"400 g",
fat:"80 g",
water:"3.7 L",

foods:[
"🐟 Fish",
"🍗 Chicken",
"🥚 Eggs",
"🥜 Nuts",
"🥦 Broccoli",
"🍚 Rice"
]

},

female:{

calories:"1800–2400 kcal",
protein:"58 g",
carbs:"300 g",
fat:"65 g",
water:"2.7 L",

foods:[
"🥬 Spinach",
"🍎 Apple",
"🥛 Yogurt",
"🫘 Beans",
"🥚 Egg",
"🍚 Rice"
]

},

senior:{

calories:"1700–2200 kcal",
protein:"60 g",
carbs:"250 g",
fat:"55 g",
water:"2.5 L",

foods:[
"🍲 Vegetable Soup",
"🥛 Milk",
"🍌 Banana",
"🥬 Vegetables",
"🫘 Dal",
"🍎 Apple"
]

}

};

function showPlan(){

const group=document.getElementById("grp").value;

const d=plans[group];

document.getElementById("out").innerHTML=`

<table>

<tr>

<th>Nutrient</th>

<th>Requirement</th>

</tr>

<tr>

<td>Calories</td>

<td>${d.calories}</td>

</tr>

<tr>

<td>Protein</td>

<td>${d.protein}</td>

</tr>

<tr>

<td>Carbohydrates</td>

<td>${d.carbs}</td>

</tr>

<tr>

<td>Fat</td>

<td>${d.fat}</td>

</tr>

<tr>

<td>Water</td>

<td>${d.water}</td>

</tr>

</table>

<h3>🥗 Recommended Foods</h3>

<div class="foods">

${d.foods.map(food=>`<div class="food">${food}</div>`).join("")}

</div>

<p>

<b>Reference:</b>

Educational values adapted from ICMR–NIN and WHO dietary guidance.

</p>

<div class="nutritionCard"

onclick="window.location.href='nutrition.html'">

<div>

<h2>🥗 Food Nutrition Explorer</h2>

<p>

Search nutrition values of more than 60 Indian foods.

</p>

</div>

<i class="fa-solid fa-arrow-right"></i>

</div>

`;

}

window.onload=showPlan;
