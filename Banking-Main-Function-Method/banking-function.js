
// *** All functions definitions here ***


function getAmount(inputfieldid) {

    // find the input tag by id 
    const inputTag = document.getElementById(inputfieldid);

    // get the value of input tag 
    const inputTagValue = inputTag.value;

    // converting the input value into float integer because all input value are by default in string format 
    const convertinputTagValue = parseFloat(inputTagValue);

    // to evaquate the input field after a amount has been inserted 
    inputTag.value = '';

    return convertinputTagValue;

}

function getUpdateBalance(tagid, enteredAmount) {

    const textTag = document.getElementById(tagid);

    const textTagValue = textTag.innerText;

    const converttextTagValue = parseFloat(textTagValue);

    const totalBalance = converttextTagValue + enteredAmount;

    textTag.innerText = totalBalance;
}

function getUpdateFinalBalance(enteredAmount, isAdd) {

    const textTag = document.getElementById('bal');

    const textTagValue = textTag.innerText;

    const converttextTagValue = parseFloat(textTagValue);

    if (isAdd == true) { 
        const finalBalance = converttextTagValue + enteredAmount; 
        textTag.innerText = finalBalance;
    }
    else { 
        const finalBalance = converttextTagValue - enteredAmount;
        textTag.innerText = finalBalance;
    }
  

    
}



// *** Program Starts Here ***

// Adding addEventListener to deposit button

document.getElementById('depositbtn').addEventListener('click', function () {


    const enteredAmount = getAmount('depositinput');
    const updateBalance = getUpdateBalance('depo', enteredAmount);
    const updatefinalBalance = getUpdateFinalBalance(enteredAmount, true);

});

// Adding addEventListener to withdraw button

document.getElementById('withdrawbtn').addEventListener('click', function () {


    const enteredAmount = getAmount('withdrawinput');
    const updateBalance = getUpdateBalance('with', enteredAmount);
    const updatefinalBalance = getUpdateFinalBalance(enteredAmount, false);

});






