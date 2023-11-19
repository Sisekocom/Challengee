let heading = document.getElementById('heading')
heading.textContent='Java script'

let paragraph = document.querySelector('.paragraph')
paragraph.textContent='This is a language I have mastered and I am proud of myself. I complished this because I believed in myself'

let headiing = document.getElementsByTagName('h3')[0]
headiing.textContent='have accomplished so far'


let pa = document.getElementsByTagName('p')[1]
pa.textContent='I have discovered that I can accomplish anything I put my mind to'

let input =document.querySelector('Multiply')

document.querySelector('h3').textContent = "Things I've accomplished so far";


document.querySelectorAll('p')[0].textContent = "I have discovered that I can accomplish anything I put my mind to";


let firstMultiplyInput = document.querySelector('[data-firstMultiply]');


let calculateButton1 = document.querySelector('[data-calculate1]');
calculateButton1.addEventListener('click', function() {
    console.log('Button 1 clicked!')});

let firstSpanElement = document.querySelector('[data-first]');
console.log('Content of the first span:', firstSpanElement.textContent);
    

function multiplyAndDisplayResult() {
    let firstInput = document.querySelector('[data-firstMultiply]');
    let secondInput = document.querySelector('[data-secondMultiply]');
    let firstSpanElement = document.querySelector('[data-first]');
    let firstValue = parseFloat(firstInput.value); 
    let secondValue = parseFloat(secondInput.value);
    if (!isNaN(firstValue) && !isNaN(secondValue)) {
        var result = firstValue * secondValue;
        firstSpanElement.textContent = result;
        console.log('Result of multiplication:', result);
    } else {
        console.error('Invalid input values');
    }
}

calculateButton1.addEventListener('click', multiplyAndDisplayResult);

function multiplyAndDisplayResult() {
    var firstInput = document.querySelector('[data-firstMultiply]');
    var secondInput = document.querySelector('[data-secondMultiply]');
    var firstSpanElement = document.querySelector('[data-first]');
    var firstValue = parseFloat(firstInput.value); // Convert to float for numerical operation
    var secondValue = parseFloat(secondInput.value);
    if (!isNaN(firstValue) && !isNaN(secondValue)) {
        var result = firstValue * secondValue;
        firstSpanElement.innerText = result;
        console.log('Result of multiplication:', result);
    } else {
        console.error('Invalid input values');
    }
}

calculateButton1.addEventListener('click', multiplyAndDisplayResult);

