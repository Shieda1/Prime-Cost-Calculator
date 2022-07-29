// https://calculator.swiftutors.com/prime-cost-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const primeCostRadio = document.getElementById('primeCostRadio');
const directLaborCostRadio = document.getElementById('directLaborCostRadio');
const directMaterialCostRadio = document.getElementById('directMaterialCostRadio');

let primeCost;
let directLaborCost = v1;
let directMaterialCost = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

primeCostRadio.addEventListener('click', function() {
  variable1.textContent = 'Direct Labor Cost';
  variable2.textContent = 'Direct Material Cost';
  directLaborCost = v1;
  directMaterialCost = v2;
  result.textContent = '';
});

directLaborCostRadio.addEventListener('click', function() {
  variable1.textContent = 'Prime Cost';
  variable2.textContent = 'Direct Material Cost';
  primeCost = v1;
  directMaterialCost = v2;
  result.textContent = '';
});

directMaterialCostRadio.addEventListener('click', function() {
  variable1.textContent = 'Prime Cost';
  variable2.textContent = 'Direct Labor Cost';
  primeCost = v1;
  directLaborCost = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(primeCostRadio.checked)
    result.textContent = `Prime Cost = ${computePrimeCost().toFixed(2)}`;

  else if(directLaborCostRadio.checked)
    result.textContent = `Direct Labor Cost = ${computeDirectLaborCost().toFixed(2)}`;

  else if(directMaterialCostRadio.checked)
    result.textContent = `Direct Material Cost = ${computeDirectMaterialCost().toFixed(2)}`;
})

// calculation

function computePrimeCost() {
  return Number(directMaterialCost.value) + Number(directLaborCost.value);
}

function computeDirectMaterialCost() {
  return Number(primeCost.value) - Number(directLaborCost.value);
}

function computeDirectLaborCost() {
  return Number(primeCost.value) - Number(directMaterialCost.value);
}