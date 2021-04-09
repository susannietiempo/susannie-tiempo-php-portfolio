import { $ } from '/dom.js';
import { isValidNumeric } from '/validators.js';

//DOM elements for results
let abs = $('#abs');
let round = $('#round');
let ceiling = $('#ceiling');
let floor = $('#floor');
let square = $('#square');
let squareRoot = $('#squareRoot');
let power = $('#power');
let root = $('#root');
let sine = $('#sine');
let cos = $('#cos');
let tan = $('#tan');

let maxNumber = $('#maxNumber');
let minNumber = $('#minNumber');
let randomNumber = $('#randNumber');

//DOM Query for Form

const mathForm = $('#myMathForm');
mathForm.addEventListener('submit', function(e){
    let rand = Math.floor(Math.random() * 100) + 1;
    randomNumber.innerHTML = rand;

    if(isValidNumeric(this.elements.txtAbs.value)){
        let absValue = Math.abs(this.elements.txtAbs.value);
        abs.innerHTML = absValue;
    }

    if(isValidNumeric(this.elements.txtRound.value)){
        let roundValue = Math.round(this.elements.txtRound.value);
        round.innerHTML = roundValue;
    }

    if(isValidNumeric(this.elements.txtCeil.value)){
        let ceilingInput = Math.ceil(this.elements.txtCeil.value);
        ceiling.innerHTML = ceilingInput;
    }

    if(isValidNumeric(this.elements.txtFloor.value)){
        let floorInput = Math.ceil(this.elements.txtFloor.value);
        floor.innerHTML = floorInput;
    }
    
    if(isValidNumeric(this.elements.txtSquare.value)){
        let squareInput = Math.pow(this.elements.txtSquare.value,2);
        square.innerHTML = squareInput;
    }
    
    if(isValidNumeric(this.elements.txtSquareRoot.value)){
        let sqrtInput = Math.sqrt(this.elements.txtSquareRoot.value);
        squareRoot.innerHTML = sqrtInput;
    }

    if(isValidNumeric(this.elements.txtValueToPower.value) && isValidNumeric(this.elements.txtPower.value)){
        let powerInput = Math.pow(this.elements.txtValueToPower.value, this.elements.txtPower.value);
        power.innerHTML = powerInput;
    }

    if(isValidNumeric(this.elements.txtValueToRoot.value) && isValidNumeric(this.elements.txtRoot.value)){
        let rootInput = Math.pow(this.elements.txtValueToRoot.value, 1/this.elements.txtRoot.value);
        root.innerHTML = rootInput;
    }

    if(isValidNumeric(this.elements.txtSine.value)){
        let sineInput = Math.sin(this.elements.txtSine.value);
        sine.innerHTML = sineInput;
    }
    
    if(isValidNumeric(this.elements.txtCos.value)){
        let cosInput = Math.cos(this.elements.txtCos.value);
        cos.innerHTML = cosInput;
    }

    if(isValidNumeric(this.elements.txtTan.value)){
        let tanInput = Math.tan(this.elements.txtTan.value);
        tan.innerHTML = tanInput;
    }

    if(isValidNumeric(this.elements.txtValue1.value) && isValidNumeric(this.elements.txtValue2.value)){
        if ( this.elements.txtValue1.value >= this.elements.txtValue2.value ){
            maxNumber.innerHTML = this.elements.txtValue1.value;
            minNumber.innerHTML = this.elements.txtValue2.value;
        } else{
            maxNumber.innerHTML = this.elements.txtValue2.value;
            minNumber.innerHTML = this.elements.txtValue1.value;
        }
    }
    e.preventDefault();
});
