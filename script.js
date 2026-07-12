function scrollToSection(id){
    const section = document.getElementById(id);

    section.scrollIntoView({
        behavior:"smooth",
        block:"start"
    });

    section.style.boxShadow="0 0 35px #00c6ff";

    setTimeout(()=>{
        section.style.boxShadow="0 4px 12px rgba(0,0,0,.12)";
    },1000);
}
function calculateAge(){

let dob=document.getElementById("dob").value;

if(dob==""){
alert("Please select your Date of Birth");
return;
}

let birth=new Date(dob);
let today=new Date();

let years=today.getFullYear()-birth.getFullYear();
let months=today.getMonth()-birth.getMonth();
let days=today.getDate()-birth.getDate();

if(days<0){
months--;
days+=30;
}

if(months<0){
years--;
months+=12;
}

document.getElementById("ageResult").innerHTML=
`Age : ${years} Years ${months} Months ${days} Days`;

}
function bmi(){
let h=+hEl().value/100,w=+wEl().value;
if(!h||!w)return alert("Enter height & weight");
let b=w/(h*h),txt="";
if(b<18.5){txt="Underweight";set(25,"#ff9800")}
else if(b<25){txt="Normal";set(50,"#4caf50")}
else if(b<30){txt="Overweight";set(75,"#ffc107")}
else{txt="Obese";set(100,"#f44336")}
bmiOut.innerHTML=`BMI: ${b.toFixed(1)} - ${txt}`;
}
function set(v,c){fill.style.width=v+"%";fill.style.background=c}
function hEl(){return document.getElementById("h")}
function wEl(){return document.getElementById("w")}
const bmiOut=document.getElementById("bmiOut"),fill=document.getElementById("fill");
function water(){let w=+ww.value;if(!w)return alert("Enter weight");waterOut.innerHTML=`Drink atleast ${(w*35/1000).toFixed(1)} litres/day`; }
function sleepRec(){sleepOut.innerHTML={child:"9-12 hours",teen:"8-10 hours",adult:"7-9 hours"}[age.value]}
function calories(){
let a=+ca.value,w=+cw.value,h=+ch.value;
if(!a||!w||!h)return alert("Fill all fields");
let b=(g.value=="Male")?(10*w+6.25*h-5*a+5):(10*w+6.25*h-5*a-161);
calOut.innerHTML=`Estimated Calories: ${Math.round(b)} kcal/day`;
}

function showDiet(){

const age=document.getElementById("dietAge").value;

const result=document.getElementById("dietResult");

let html="";

switch(age){

case "child":

html=`
<table class="dietTable">

<tr><th>Nutrient</th><th>Requirement</th></tr>

<tr><td>Calories</td><td>1200-1700 kcal</td></tr>

<tr><td>Protein</td><td>60 g</td></tr>

<tr><td>Carbohydrates</td><td>175 g</td></tr>

<tr><td>Fat</td><td>40 g</td></tr>

<tr><td>Fibre</td><td>20 g</td></tr>

<tr><td>Water</td><td>1.5-2 L</td></tr>

</table>`;

break;

case "teen":

html=`
<table class="dietTable">

<tr><th>Nutrient</th><th>Requirement</th></tr>

<tr><td>Calories</td><td>2200-2800 kcal</td></tr>

<tr><td>Protein</td><td>65 g</td></tr>

<tr><td>Carbohydrates</td><td>300 g</td></tr>

<tr><td>Fat</td><td>65 g</td></tr>

<tr><td>Fibre</td><td>25 g</td></tr>

<tr><td>Water</td><td>2.3-3 L</td></tr>

</table>`;

break;

case "adultMale":

html=`
<table class="dietTable">

<tr><th>Nutrient</th><th>Requirement</th></tr>

<tr><td>Calories</td><td>2000-3000 kcal</td></tr>

<tr><td>Protein</td><td>70 g</td></tr>

<tr><td>Carbohydrates</td><td>400 g</td></tr>

<tr><td>Fat</td><td>80 g</td></tr>

<tr><td>Fibre</td><td>30 g</td></tr>

<tr><td>Water</td><td>3.7 L</td></tr>

</table>`;

break;

case "adultFemale":

html=`
<table class="dietTable">

<tr><th>Nutrient</th><th>Requirement</th></tr>

<tr><td>Calories</td><td>1800-2400 kcal</td></tr>

<tr><td>Protein</td><td>58 g</td></tr>

<tr><td>Carbohydrates</td><td>300 g</td></tr>

<tr><td>Fat</td><td>65 g</td></tr>

<tr><td>Fibre</td><td>25 g</td></tr>

<tr><td>Water</td><td>2.7 L</td></tr>

</table>`;

break;

case "oldMale":

html=`
<table class="dietTable">

<tr><th>Nutrient</th><th>Requirement</th></tr>

<tr><td>Calories</td><td>2000-2500 kcal</td></tr>

<tr><td>Protein</td><td>68 g</td></tr>

<tr><td>Carbohydrates</td><td>285 g</td></tr>

<tr><td>Fat</td><td>58 g</td></tr>

<tr><td>Fibre</td><td>20 g</td></tr>

<tr><td>Water</td><td>3 L</td></tr>

</table>`;

break;

case "oldFemale":

html=`
<table class="dietTable">

<tr><th>Nutrient</th><th>Requirement</th></tr>

<tr><td>Calories</td><td>1700-1900 kcal</td></tr>

<tr><td>Protein</td><td>55 g</td></tr>

<tr><td>Carbohydrates</td><td>245 g</td></tr>

<tr><td>Fat</td><td>50 g</td></tr>

<tr><td>Fibre</td><td>17 g</td></tr>

<tr><td>Water</td><td>2.5 L</td></tr>

</table>`;

break;

}

result.innerHTML=html;

    }years--;
months+=12;
}

document.getElementById("ageResult").innerHTML=
`Age : ${years} Years ${months} Months ${days} Days`;

}
function bmi(){
let h=+hEl().value/100,w=+wEl().value;
if(!h||!w)return alert("Enter height & weight");
let b=w/(h*h),txt="";
if(b<18.5){txt="Underweight";set(25,"#ff9800")}
else if(b<25){txt="Normal";set(50,"#4caf50")}
else if(b<30){txt="Overweight";set(75,"#ffc107")}
else{txt="Obese";set(100,"#f44336")}
bmiOut.innerHTML=`BMI: ${b.toFixed(1)} - ${txt}`;
}
function set(v,c){fill.style.width=v+"%";fill.style.background=c}
function hEl(){return document.getElementById("h")}
function wEl(){return document.getElementById("w")}
const bmiOut=document.getElementById("bmiOut"),fill=document.getElementById("fill");
function water(){let w=+ww.value;if(!w)return alert("Enter weight");waterOut.innerHTML=`Drink atleast ${(w*35/1000).toFixed(1)} litres/day`; }
function sleepRec(){

    const ageGroup = document.getElementById("sleepAge").value;
    const sleepOut = document.getElementById("sleepOut");

    if(ageGroup=="child"){
        sleepOut.innerHTML="Recommended Sleep: 9–12 Hours";
    }
    else if(ageGroup=="teen"){
        sleepOut.innerHTML="Recommended Sleep: 8–10 Hours";
    }
    else{
        sleepOut.innerHTML="Recommended Sleep: 7–9 Hours";
    }
}
function calories(){
let a=+ca.value,w=+cw.value,h=+ch.value;
if(!a||!w||!h)return alert("Fill all fields");
let b=(g.value=="Male")?(10*w+6.25*h-5*a+5):(10*w+6.25*h-5*a-161);
calOut.innerHTML=`Estimated Calories: ${Math.round(b)} kcal/day`;
}
