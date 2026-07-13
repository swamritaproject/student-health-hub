/* ---------- Daily Nutrition Targets (midpoint of diet.js ranges) ---------- */
const PLATE_TARGETS = {
  child:  { calories: 1450, protein: 60, carbs: 175, fat: 40 },
  teen:   { calories: 2200, protein: 65, carbs: 300, fat: 60 },
  male:   { calories: 2700, protein: 70, carbs: 400, fat: 80 },
  female: { calories: 2100, protein: 58, carbs: 300, fat: 65 },
  senior: { calories: 1950, protein: 60, carbs: 250, fat: 55 }
};

const MET_THRESHOLD = 0.9; // reaching 90% of target counts as "met"

let currentGoal = "teen";
let plate = []; // { name, qty }

/* ---------- Goal ---------- */
function setGoal() {
  currentGoal = document.getElementById("goalGroup").value;
  updateProgress();
}

/* ---------- Food Picker ---------- */
function renderFoodPicker() {
  const q = document.getElementById("plateSearch").value.toLowerCase();
  const cat = document.getElementById("plateCategory").value;

  const filtered = foods.filter(food => {
    const matchName = food.name.toLowerCase().includes(q);
    const matchCat = cat === "all" || food.category === cat;
    return matchName && matchCat;
  });

  const picker = document.getElementById("foodPicker");

  if (filtered.length === 0) {
    picker.innerHTML = `<p class="empty-plate">No foods match your search.</p>`;
    return;
  }

  picker.innerHTML = filtered.map(food => `
    <div class="food-chip" onclick="addFood('${food.name}')">
      <span class="chip-emoji">${food.emoji}</span>
      <span class="chip-name">${food.name}</span>
      <span class="chip-add"><i class="fa-solid fa-plus"></i></span>
    </div>
  `).join("");
}

/* ---------- Plate Management ---------- */
function addFood(name) {
  const existing = plate.find(item => item.name === name);
  if (existing) existing.qty++;
  else plate.push({ name, qty: 1 });

  renderPlate();
  updateProgress();
}

function changeQty(name, delta) {
  const item = plate.find(i => i.name === name);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) plate = plate.filter(i => i.name !== name);

  renderPlate();
  updateProgress();
}

function removeFood(name) {
  plate = plate.filter(i => i.name !== name);
  renderPlate();
  updateProgress();
}

function resetPlate() {
  plate = [];
  renderPlate();
  updateProgress();
}

function renderPlate() {
  const container = document.getElementById("plateList");

  if (plate.length === 0) {
    container.innerHTML = `<p class="empty-plate">No foods added yet. Tap a food above to add it.</p>`;
    return;
  }

  container.innerHTML = plate.map(item => {
    const food = foods.find(f => f.name === item.name);
    const kcal = Math.round(food.calories * item.qty);

    return `
      <div class="plate-row">
        <span class="plate-emoji">${food.emoji}</span>
        <div class="plate-info">
          <b>${food.name}</b>
          <span class="plate-kcal">${kcal} kcal</span>
        </div>
        <div class="qty-controls">
          <button class="qty-btn" onclick="changeQty('${food.name}', -1)">−</button>
          <span class="qty-value">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty('${food.name}', 1)">+</button>
        </div>
        <button class="remove-btn" onclick="removeFood('${food.name}')">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    `;
  }).join("");
}

/* ---------- Totals & Progress ---------- */
function computeTotals() {
  return plate.reduce((totals, item) => {
    const food = foods.find(f => f.name === item.name);
    totals.calories += food.calories * item.qty;
    totals.protein  += food.protein  * item.qty;
    totals.carbs    += food.carbs    * item.qty;
    totals.fat      += food.fat      * item.qty;
    return totals;
  }, { calories: 0, protein: 0, carbs: 0, fat: 0 });
}

function updateProgress() {
  const totals = computeTotals();
  const target = PLATE_TARGETS[currentGoal];

  const macros = [
    { key: "calories", label: "Calories", unit: "kcal", cls: "orange" },
    { key: "protein",  label: "Protein",  unit: "g",    cls: "blue" },
    { key: "carbs",    label: "Carbs",    unit: "g",    cls: "green" },
    { key: "fat",      label: "Fat",      unit: "g",    cls: "purple" }
  ];

  let metCount = 0;
  let scoreSum = 0;

  document.getElementById("progressBars").innerHTML = macros.map(m => {
    const value = totals[m.key];
    const goal = target[m.key];
    const pct = Math.min(100, Math.round((value / goal) * 100));
    const met = value >= goal * MET_THRESHOLD;

    if (met) metCount++;
    scoreSum += Math.min(100, (value / goal) * 100);

    return `
      <div class="progress-item">
        <div class="progress-label">
          <span>${m.label} ${met ? '<i class="fa-solid fa-circle-check"></i>' : ""}</span>
          <span>${Math.round(value)} / ${goal} ${m.unit}</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill ${m.cls} ${met ? "met" : ""}" style="width:${pct}%"></div>
        </div>
      </div>
    `;
  }).join("");

  const score = Math.round(scoreSum / macros.length);
  const finalEl = document.getElementById("finalMessage");

  if (plate.length === 0) {
    finalEl.classList.remove("show");
    finalEl.innerHTML = "";
    return;
  }

  finalEl.classList.add("show");
  finalEl.innerHTML = metCount === macros.length
    ? `<div class="score-badge">🏆 Nutrition Score: ${score}/100</div>
       <p>🎉 Great job! You've hit all your daily targets.</p>`
    : `<div class="score-badge">📊 Nutrition Score: ${score}/100</div>
       <p>${metCount} of ${macros.length} goals met so far — keep adding foods!</p>`;
}

/* ---------- Init ---------- */
window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const group = params.get("group");

  if (group && PLATE_TARGETS[group]) {
    currentGoal = group;
    document.getElementById("goalGroup").value = group;
  }

  renderFoodPicker();
  renderPlate();
  updateProgress();
};
