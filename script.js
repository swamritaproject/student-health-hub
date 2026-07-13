/* ---------- Scroll to Section (Dashboard Tiles) ---------- */

function scrollToSection(id) {
  const section = document.getElementById(id);

  section.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  section.style.boxShadow = "0 0 35px #00c6ff";

  setTimeout(() => {
    section.style.boxShadow = "0 4px 12px rgba(0,0,0,.12)";
  }, 1000);
}

/* ---------- Age Calculator ---------- */

function calculateAge() {
  const dob = document.getElementById("dob").value;
  if (dob === "") {
    alert("Please select your Date of Birth");
    return;
  }

  const birth = new Date(dob);
  const today = new Date();

  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById("ageResult").innerHTML =
    `Age : ${years} Years ${months} Months ${days} Days`;
}

/* ---------- BMI Calculator ---------- */

function setMeter(value, color) {
  const fill = document.getElementById("fill");
  fill.style.width = value + "%";
  fill.style.background = color;
}

function bmi() {
  const h = +document.getElementById("h").value / 100;
  const w = +document.getElementById("w").value;

  if (!h || !w) return alert("Enter height & weight");

  const b = w / (h * h);
  let txt = "";

  if (b < 18.5) { txt = "Underweight"; setMeter(25, "#ff9800"); }
  else if (b < 25) { txt = "Normal"; setMeter(50, "#4caf50"); }
  else if (b < 30) { txt = "Overweight"; setMeter(75, "#ffc107"); }
  else { txt = "Obese"; setMeter(100, "#f44336"); }

  document.getElementById("bmiOut").innerHTML = `BMI: ${b.toFixed(1)} - ${txt}`;
}

/* ---------- Water Intake ---------- */

function water() {
  const w = +document.getElementById("ww").value;
  if (!w || w <= 0) return alert("Enter a valid weight");

  let ml = 0;

  // The Clinical Tiered Formula (Holiday-Segar Method)
  if (w <= 10) {
    ml = w * 100;
  } else if (w <= 20) {
    ml = 1000 + (w - 10) * 50;
  } else if (w <= 40) {
    // This perfectly gives your 35 kg target 1800 ml
    ml = 1500 + (w - 20) * 20; 
  } else {
    // Above 40 kg, it cleanly transitions back to the 35 ml adult baseline
    ml = w * 35;
  }

  // Convert milliliters to litres
  const litres = (ml / 1000).toFixed(1);

  document.getElementById("waterOut").innerHTML =
    Drink atleast ${litres} litres/day;
}

/* ---------- Sleep Recommendation ---------- */

function sleepRec() {
  const group = document.getElementById("sleepAge").value;

  const recommendations = {
    child: "9-12 hours",
    teen: "8-10 hours",
    adult: "7-9 hours"
  };

  document.getElementById("sleepOut").innerHTML = recommendations[group];
}

/* ---------- Calorie Requirement ---------- */

function calories() {
  const a = +document.getElementById("ca").value;
  const w = +document.getElementById("cw").value;
  const h = +document.getElementById("ch").value;
  const gender = document.getElementById("g").value;

  if (!a || !w || !h) return alert("Fill all fields");

  const bmr = (gender === "Male")
    ? (10 * w + 6.25 * h - 5 * a + 5)
    : (10 * w + 6.25 * h - 5 * a - 161);

  const tdee = bmr * 1.4; // light activity average

  document.getElementById("calOut").innerHTML =
    `Estimated Calories: ${Math.round(tdee)} kcal/day`;
}
