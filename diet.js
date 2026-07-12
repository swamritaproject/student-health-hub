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
water:"2.5–3 L",

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

<h2 class="section-title">
📊 Daily Nutrition
</h2>

<div class="stats">

<div class="stat orange">
🔥
<h3>${d.calories}</h3>
<p>Calories</p>
</div>

<div class="stat blue">
💪
<h3>${d.protein}</h3>
<p>Protein</p>
</div>

<div class="stat green">
💧
<h3>${d.water}</h3>
<p>Water</p>
</div>

<div class="stat purple">
🥑
<h3>${d.fat}</h3>
<p>Fat</p>
</div>

</div>

<h2 class="section-title">
🥗 Recommended Foods
</h2>

<div class="foods">

${d.foods.map(food=>`
<div class="food">
${food}
</div>
`).join("")}

</div>

<div class="nutritionCard"
onclick="window.location.href='nutrition.html'">

<h2>
🥗 Food Nutrition Explorer
</h2>

<p>
Explore detailed nutrition information for
<b>60+ common Indian foods</b>, including calories,
protein, carbohydrates, fats, vitamins,
minerals and health benefits.
</p>

<div class="exploreBtn">

Explore Now
<i class="fa-solid fa-arrow-right"></i>

</div>

</div>

<p style="margin-top:18px;color:#666;font-size:14px;">
<b>Reference:</b>
Educational values adapted from ICMR–NIN and WHO dietary guidance.
</p>

`;

}

window.onload=showPlan;
