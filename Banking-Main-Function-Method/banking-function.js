
// *** All functions definitions here ***


function getAmount(inputfieldid) {
    debugger;

    // find the input tag by id 
    const inputTag = document.getElementById(inputfieldid);

    // get the value of input tag 
    const inputTagValue = inputTag.value;

    // converting the input value into float integer because all input value are by default in string format 
    const convertinputTagValue = parseFloat(inputTagValue);

    // to evaquate the input field after a amount has been inserted 
    inputTag.value = '';

    // return the value to the caller function
    return convertinputTagValue;






}

function getUpdateBalance(tagid, enteredAmount) {

    // find the  Text tag by id 
    const textTag = document.getElementById(tagid);

    // get the value of Text tag 
    const textTagValue = textTag.innerText;

    // converting the innerText value into float integer because the value are by default in string format 
    const converttextTagValue = parseFloat(textTagValue);

    // add the entered amount with existing amount
    const totalBalance = converttextTagValue + enteredAmount;

    // publish the final amount in the TextField
    textTag.innerText = totalBalance;
}


function balance() {

    const textTag = document.getElementById('bal');

    const textTagValue = textTag.innerText;

    const converttextTagValue = parseFloat(textTagValue);

    return converttextTagValue
}


function getUpdateFinalBalance(enteredAmount, isAdd) {

    const getBalance = balance();
    const textTag = document.getElementById('bal');

    // deposit amount added to total balance based on true condition 
    if (isAdd == true) {
        const finalBalance = getBalance + enteredAmount;
        textTag.innerText = finalBalance;
    }
    // withdraw amount reduced from total balance on false condition
    else {
        const finalBalance = getBalance - enteredAmount;
        textTag.innerText = finalBalance;
    }



}



// *** Program Starts Here ***

// Adding addEventListener to deposit button

document.getElementById('depositbtn').addEventListener('click', function () {

    // call a function to get the input amount
    const enteredAmount = getAmount('depositinput');

    // checking the amount greater than 0 then 
    if (enteredAmount > 0) {
        // update the deposit amount by calling this function
        getUpdateBalance('depo', enteredAmount);

        // and update the total balance by calling function
        getUpdateFinalBalance(enteredAmount, true);

    }
});

// Adding addEventListener to withdraw button

document.getElementById('withdrawbtn').addEventListener('click', function () {


    const enteredAmount = getAmount('withdrawinput');

    const getBalance = balance();
   // checking the entered amount greater than 0 and less than the existing total balance
    if (enteredAmount > 0 && enteredAmount < getBalance) {
        // update the withdraw amount by calling this function
        getUpdateBalance('with', enteredAmount);
        // update the total balance by calling function
        getUpdateFinalBalance(enteredAmount, false);
    }


});






