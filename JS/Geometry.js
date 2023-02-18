
// Area for Triangle,Rhombus,Pentagon

function AreaCalculation(){
   
    let number_oneField=parseFloat(document.getElementById('number_one').value);
    let number_twoField=parseFloat(document.getElementById('number_two').value);
   
    
    let Calculation=0.5*number_oneField*number_twoField;
    Calculation=Calculation.toFixed(2);
   
    document.getElementById("Calculation").textContent =Calculation;
}


// Area for Rectangle,Parallelogram
function AreaCalculationTwo(){
   
    let number_threeField=parseFloat(document.getElementById('number_three').value);
    let number_fourField=parseFloat(document.getElementById('number_four').value);
   
    
    let Calculate=number_threeField*number_fourField;
    Calculate=Calculate.toFixed(2);
    document.getElementById("Calculate").textContent =Calculate;
}


// Background Color in card
const card = document.querySelector('.card');

card.addEventListener('mouseenter', function() {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  card.style.backgroundColor = '#' + randomColor;
});






