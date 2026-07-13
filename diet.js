const plans = {
  child: {
    calories: "1450 kcal",
    protein: "30 g",
    carbs: "231 g",
    fat: "45 g",
    water: "1.5–2 L",
    foods: ["🥛 Milk", "🍎 Apple", "🥚 Egg", "🥬 Spinach", "🍚 Rice", "🫘 Moong Dal"]
  },
  teen: {
    calories: "2200 kcal",
    protein: "55 g",
    carbs: "360 g",
    fat: "60 g",
    water: "2–3 L",
    foods: ["🍗 Chicken", "🍌 Banana", "🥛 Milk", "🍚 Rice", "🥚 Egg", "🫘 Dal"]
  },
  male: {
    calories: "2700 kcal",
    protein: "70 g",
    carbs: "420 g",
    fat: "82 g",
    water: "3–3.7 L",
    foods: ["🐟 Fish", "🍗 Chicken", "🥚 Eggs", "🥜 Nuts", "🥦 Broccoli", "🍚 Rice"]
  },
  female: {
    calories: "2100 kcal",
    protein: "58 g",
    carbs: "314 g",
    fat: "68 g",
    water: "2.5–2.7 L",
    foods: ["🥬 Spinach", "🍎 Apple", "🥛 Yogurt", "🫘 Beans", "🥚 Egg", "🍚 Rice"]
  },
  senior: {
    calories: "1950 kcal",
    protein: "60 g",
    carbs: "297 g",
    fat: "58 g",
    water: "2.5–3 L",
    foods: ["🍲 Vegetable Soup", "🥛 Milk", "🍌 Banana", "🥬 Vegetables", "🫘 Dal", "🍎 Apple"]
  }
};

function showPlan() {
  const group = document.getElementById("grp").value;
  const d = plans[group];

  document.getElementById("out").innerHTML = `
    <h2 class="section-title">📊 Daily Nutrition</h2>

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

    <h2 class="section-title">🥗 Recommended Foods</h2>

    <div class="foods">
      ${d.foods.map(food => `<div class="food">${food}</div>`).join("")}
    </div>

    <div class="nutritionCard" onclick="window.location.href='nutrition.html'">
      <h2>🥗 Food Nutrition Explorer</h2>
      <p>Explore detailed nutrition information for <b>60+ common Indian foods</b></p>
      <div class="exploreBtn">
        Explore Now
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>

    <div class="nutritionCard gameCard" onclick="window.location.href='myplate.html?group=${group}'">
      <h2>🎮 My Plate Challenge</h2>
      <p>Build a full day of meals and see if you hit your <b>daily nutrition goals</b></p>
      <div class="exploreBtn">
        Play Now
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>

    <p style="margin-top:18px;color:#666;font-size:14px;">
      <b>Reference:</b> Educational values adapted from ICMR–NIN and WHO dietary guidance.
    </p>
  `;
}

window.onload = showPlan;
