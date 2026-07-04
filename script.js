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
