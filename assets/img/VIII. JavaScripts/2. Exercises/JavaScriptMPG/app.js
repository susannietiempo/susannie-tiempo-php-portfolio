let error = [];

/*Start of functions declation*/
const isValidNumeric = function(value){
    if (isNaN(value)) {
     return false;   
    } else {
        return true;
    }
}

function calculateMPG(milesTravelled, gallonsConsumed){
    if (isValidNumeric(milesTravelled) == false  || milesTravelled <= 0){
        error.push('Miles travelled is not valid');
    }

    if (isValidNumeric(gallonsConsumed) == false  || gallonsConsumed <= 0){
        error.push('Gallons consumed is not valid');
    }
     let mpg = milesTravelled * gallonsConsumed;
    return mpg;

}

function calculateButtonHandler(){
    let miles = txtMiles.value;
    console.log(miles);
    let gallons = txtGallons.value;
    let answer = calculateMPG(miles, gallons);
    const targetE = document.getElementById('answer');
    console.log(answer);
    if(error.length == 0 ){
        targetE.innerHTML = `<p>Miles travelled: ${miles} Gallons Consumed: ${gallons} MPG: ${answer}</p>`;
    }else{
        targetE.innerHTML = `<ul><li>${error[0]}</li> <li>${error[1]}</li></ul>`;
    }

}
/*end of functions declation*/

const txtMiles = document.getElementById('txtMiles');
const txtGallons = document.getElementById('txtGallons');
const btnCalculate = document.getElementById('btnCalculate');
btnCalculate.addEventListener('click', calculateButtonHandler);






