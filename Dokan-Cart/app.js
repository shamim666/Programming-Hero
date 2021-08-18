

function getProductAmount(product){
    
const abc= document.getElementById( product +'-input').value 
const abcVal = parseInt(abc);
return abcVal ; 
}




function updateSubTotal(){

    const phoneAmount = getProductAmount('phone') * 1219 ; 
    const caseAmount =  getProductAmount('case') * 59 ; 
    const totalAmount = phoneAmount + caseAmount ; 
    return  totalAmount ; 

}



function updateProduct(product , price ,  isIncreasing){

    const productInput = document.getElementById(product + '-input') ;
    let productInputVal = productInput.value ;
    const productInputValInt = parseInt(productInputVal);
    
    if (isIncreasing){
        productInputVal = productInputValInt + 1 ; 
        productInput.value = productInputVal ; 
    }
    else if ( productInputValInt > 0 ){
        productInputVal = productInputValInt - 1 ; 
        productInput.value = productInputVal ; 
    }


const productTotal = document.getElementById(product + '-total') ; 
productTotal.innerText = productInputVal * price ; 

const subTotal = updateSubTotal() ; 
const tax =  subTotal / 10 ; 
const total = subTotal + tax ;
document.getElementById('subtotal').innerText = subTotal ; 
document.getElementById('tax').innerText = tax ;
document.getElementById('total').innerText = total ;

}


document.getElementById('case-plus').addEventListener('click', function(){
    updateProduct('case' , 59 , true);
})


document.getElementById('case-minus').addEventListener('click', function(){
    updateProduct('case' , 59 , false);
})

document.getElementById('phone-plus').addEventListener('click', function(){
    updateProduct('phone' , 1219, true);
})


document.getElementById('phone-minus').addEventListener('click', function(){
    updateProduct('phone' , 1219 , false);
})

