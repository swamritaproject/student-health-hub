const foods = [

{
name:"Egg",
category:"protein",
emoji:"🥚",
calories:"155 kcal",
protein:"13 g",
carbs:"1.1 g",
fat:"11 g",
fibre:"0 g",
calcium:"50 mg",
iron:"1.2 mg",
benefits:[
"High quality protein",
"Rich in Vitamin B12",
"Good for muscle growth"
]
},

{
name:"Chicken Breast",
category:"protein",
emoji:"🍗",
calories:"165 kcal",
protein:"31 g",
carbs:"0 g",
fat:"3.6 g",
fibre:"0 g",
calcium:"15 mg",
iron:"1 mg",
benefits:[
"Excellent lean protein",
"Supports muscle recovery",
"Low in fat"
]
},

{
name:"Fish",
category:"protein",
emoji:"🐟",
calories:"206 kcal",
protein:"22 g",
carbs:"0 g",
fat:"12 g",
fibre:"0 g",
calcium:"16 mg",
iron:"0.5 mg",
benefits:[
"Rich in Omega-3",
"Good for heart",
"Improves brain health"
]
},

{
name:"Milk",
category:"dairy",
emoji:"🥛",
calories:"61 kcal",
protein:"3.2 g",
carbs:"5 g",
fat:"3.3 g",
fibre:"0 g",
calcium:"120 mg",
iron:"0 mg",
benefits:[
"Strong bones",
"Rich in calcium",
"Good protein source"
]
},

{
name:"Curd",
category:"dairy",
emoji:"🥣",
calories:"98 kcal",
protein:"11 g",
carbs:"3.4 g",
fat:"4.3 g",
fibre:"0 g",
calcium:"121 mg",
iron:"0.2 mg",
benefits:[
"Good probiotics",
"Improves digestion",
"Boosts immunity"
]
},

{
name:"Paneer",
category:"dairy",
emoji:"🧀",
calories:"265 kcal",
protein:"18 g",
carbs:"1.2 g",
fat:"20 g",
fibre:"0 g",
calcium:"208 mg",
iron:"0.5 mg",
benefits:[
"High protein",
"Rich calcium",
"Good for bones"
]
},

{
name:"Rice",
category:"grain",
emoji:"🍚",
calories:"130 kcal",
protein:"2.7 g",
carbs:"28 g",
fat:"0.3 g",
fibre:"0.4 g",
calcium:"10 mg",
iron:"0.2 mg",
benefits:[
"Energy source",
"Easily digestible",
"Low fat"
]
},

{
name:"Puffed Rice (Muri)",
category:"grain",
emoji:"🌾",
calories:"402 kcal",
protein:"6 g",
carbs:"90 g",
fat:"0.5 g",
fibre:"1.7 g",
calcium:"18 mg",
iron:"3 mg",
benefits:[
"Light snack",
"Quick energy",
"Low fat"
]
},

{
name:"Roti",
category:"grain",
emoji:"🫓",
calories:"297 kcal",
protein:"9 g",
carbs:"55 g",
fat:"3 g",
fibre:"8 g",
calcium:"30 mg",
iron:"3.5 mg",
benefits:[
"Whole grain",
"Rich fibre",
"Good energy"
]
},

{
name:"Oats",
category:"grain",
emoji:"🥣",
calories:"389 kcal",
protein:"17 g",
carbs:"66 g",
fat:"7 g",
fibre:"11 g",
calcium:"54 mg",
iron:"4.7 mg",
benefits:[
"Heart healthy",
"High fibre",
"Keeps full longer"
]
};

function displayFood(list){

const container=document.getElementById("foodList");

container.innerHTML="";

list.forEach(food=>{

container.innerHTML+=`

<div class="food-card"

onclick="showFood('${food.name}')">

<h3>${food.emoji}</h3>

<b>${food.name}</b>

</div>

`;

});

}

function showFood(name){

const food=foods.find(f=>f.name===name);

document.getElementById("nutrition").innerHTML=`

<h2>${food.emoji} ${food.name}</h2>

<table>

<tr><th>Nutrient</th><th>Value (per 100g)</th></tr>

<tr><td>Calories</td><td>${food.calories}</td></tr>

<tr><td>Protein</td><td>${food.protein}</td></tr>

<tr><td>Carbohydrates</td><td>${food.carbs}</td></tr>

<tr><td>Fat</td><td>${food.fat}</td></tr>

<tr><td>Fibre</td><td>${food.fibre}</td></tr>

<tr><td>Calcium</td><td>${food.calcium}</td></tr>

<tr><td>Iron</td><td>${food.iron}</td></tr>

</table>

<h3>Health Benefits</h3>

<ul>

${food.benefits.map(x=>`<li>${x}</li>`).join("")}

</ul>

`;

}

function searchFood(){

let q=document.getElementById("search").value.toLowerCase();

displayFood(

foods.filter(f=>

f.name.toLowerCase().includes(q))

);

}

function filterCategory(){

let c=document.getElementById("category").value;

if(c==="all"){

displayFood(foods);

return;

}

displayFood(

foods.filter(f=>f.category===c)

);

}

displayFood(foods);

                              
