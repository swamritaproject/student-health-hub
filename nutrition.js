const facts = [
  "🥚 Eggs contain all 9 essential amino acids.",
  "🥛 Milk is an excellent source of calcium.",
  "🍎 Apples are rich in dietary fibre.",
  "🥬 Spinach is rich in iron and folate.",
  "🐟 Fish contains heart-healthy Omega-3 fatty acids.",
  "🫘 Pulses are an excellent plant protein source.",
  "🥜 Nuts provide healthy fats and Vitamin E.",
  "🍌 Bananas are rich in potassium."
];

document.getElementById("fact").innerHTML =
  facts[Math.floor(Math.random() * facts.length)];

function displayFood(list) {
  const container = document.getElementById("foodList");
  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = "<p>No food found.</p>";
    return;
  }

  list.forEach(food => {
    container.innerHTML += `
      <div class="food-card" onclick="showFood('${food.name}')">
        <h3>${food.emoji}</h3>
        <b>${food.name}</b>
        <p>${food.category.toUpperCase()}</p>
      </div>
    `;
  });
}

function showFood(name) {
  const food = foods.find(f => f.name === name);

  document.getElementById("nutrition").innerHTML = `
    <h2>${food.emoji} ${food.name}</h2>

    <table>
      <tr><th>Nutrient</th><th>Per 100 g</th></tr>
      <tr><td>Calories</td><td>${food.calories} kcal</td></tr>
      <tr><td>Protein</td><td>${food.protein} g</td></tr>
      <tr><td>Carbohydrates</td><td>${food.carbs} g</td></tr>
      <tr><td>Fat</td><td>${food.fat} g</td></tr>
      <tr><td>Fibre</td><td>${food.fibre} g</td></tr>
      <tr><td>Calcium</td><td>${food.calcium} mg</td></tr>
      <tr><td>Iron</td><td>${food.iron} mg</td></tr>
      <tr><td>Water</td><td>${food.water}%</td></tr>
    </table>

    <h3 style="margin-top:20px">💚 Health Benefits</h3>
    <p>${food.benefits}</p>

    <button class="search-another" onclick="scrollToSearch()">
      <i class="fa-solid fa-magnifying-glass"></i> Search Another
    </button>
  `;

  document.getElementById("nutrition").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function scrollToSearch() {
  document.getElementById("searchSection").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
  document.getElementById("search").focus();
}

function searchFood() {
  const q = document.getElementById("search").value.toLowerCase();
  const c = document.getElementById("category").value;

  const filtered = foods.filter(food => {
    const matchName = food.name.toLowerCase().includes(q);
    const matchCategory = c === "all" || food.category === c;
    return matchName && matchCategory;
  });

  displayFood(filtered);
}

function filterCategory() {
  searchFood();
}

displayFood(foods);
