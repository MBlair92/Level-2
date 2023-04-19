const formPlus = document["formPlus"]
const result = document.getElementById("result")

formPlus.addEventListener("submit", function(e){
  e.preventDefault();
  const additionNum1 = formPlus.num1Add.value
  const additionNum2 = formPlus.num2Add.value
  calculateAddition(additionNum1, additionNum2).value;
})

const additionResult = document.createElement("div");

function calculateAddition(additionNum1, additionNum2) {
  formPlus.num1Add.value = "";
  formPlus.num2Add.value = "";
  console.log(document.getElementsByTagName("h1"), "testing tags")
  result.append(additionResult)
  
  additionResult.textContent = "Result: " + (parseInt(additionNum1) + parseInt(additionNum2))
  return additionResult;
}

const formMinus = document["formMinus"]

formMinus.addEventListener("submit", function(e){
  e.preventDefault();
  const subtractionNum1 = formMinus.num1Minus.value
  const subtractionNum2 = formMinus.num2Minus.value
  calculateSubtraction(subtractionNum1, subtractionNum2).value;
})

const subtractionResult = document.createElement("div");

function calculateSubtraction(subtractionNum1, subtractionNum2) {
  formMinus.num1Minus.value = "";
  formMinus.num2Minus.value = "";
  console.log(document.getElementsByTagName("h1"))
  result.append(subtractionResult)

  subtractionResult.textContent = "Result: " + (parseInt(subtractionNum1) - parseInt(subtractionNum2))
  return subtractionResult;
}

const formTimes = document["formTimes"]

formTimes.addEventListener("submit", function(e){
  e.preventDefault();
  const multiplicationNum1 = formTimes.num1Times.value
  const multiplicationNum2 = formTimes.num2Times.value
  calculateMultiplication(multiplicationNum1, multiplicationNum2).value;
})

const multiplicationResult = document.createElement("div") ;

function calculateMultiplication(multiplicationNum1, multiplicationNum2) {
  formTimes.num1Times.value = "";
  formTimes.num2Times.value = "";
  console.log(document.getElementsByTagName("h1"))
  result.append(multiplicationResult)
  
  
  multiplicationResult.textContent = "Result: " + (parseInt(multiplicationNum1) * parseInt(multiplicationNum2))
  return multiplicationResult;
}