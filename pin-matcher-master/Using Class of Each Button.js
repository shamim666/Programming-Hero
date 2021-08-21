

function generatePin() {

    const pin = Math.round(Math.random() * 10000);

    const pinString = pin + '';

    if (pinString.length == 4) {

        document.getElementById('pin-input').value = pin;
    }

    else {
        generatePin();
    }
}


// to get button value using each button's class Id
const numbers = document.getElementsByClassName('button')
const number = document.getElementById('pin-input2') ; 
for( const num of numbers){
    num.addEventListener('click',function(event){ 
    const Currentnum = event.target.innerText ;
    
if ( isNaN(Currentnum)  ){

    if ( Currentnum == 'C'){
        number.value = '';
    }
}
else {

const previousNum = number.value ; 
const num =  previousNum + Currentnum ; 
number.value = num ; 
}
    })

}






function pincheck() {

    const pinNUmber = document.getElementById('pin-input').value ; 
    const pinNUmber2 = document.getElementById('pin-input2').value ;  

if ( pinNUmber == pinNUmber2) {

    document.getElementById('match').style.display = 'block' ;
    document.getElementById('nonmatch').style.display = 'none' ;
}

else {

    document.getElementById('match').style.display = 'none' ;
    document.getElementById('nonmatch').style.display = 'block' ; 
}



}