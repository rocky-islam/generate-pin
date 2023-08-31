let getPin = () =>{
    let pin = generatePin();
    let pinString = pin + '';

    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

let generatePin = () => {
    const random = Math.round(Math.random()*10000);
    return random
}

document.getElementById('generate-pin').addEventListener('click', () =>{
    const pin = getPin();
    const pinFailed = document.getElementById('pin-failed');
    pinFailed.value = pin;
})

document.getElementById('calculator').addEventListener('click', (event) =>{
    const number = event.target.innerText;
    const inputType = document.getElementById('input-type');
    const previousTypeNumber = inputType.value;

    if(isNaN(number)){
        if(number === 'c' || number === 'C'){
            inputType.value = '';
        }
        else if(number === '<'){
            const digits = previousTypeNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            inputType.value = remainingDigits;
        }
    }
    else{
        
        const newTypeNumber = previousTypeNumber + number;
        inputType.value = newTypeNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click', () =>{
    const displayPinFailed = document.getElementById('pin-failed');
    const currentPin = displayPinFailed.value;
    
    const typeNumber = document.getElementById('input-type');
    const currentTypeNumber = typeNumber.value;

    const success = document.getElementById('success');
    const failure = document.getElementById('failure');

    if( currentTypeNumber === currentPin){
        success.style.display = 'block';
        failure.style.display = 'none';
    }
    else{
        success.style.display = 'none';
        failure.style.display = 'block';
    }
})