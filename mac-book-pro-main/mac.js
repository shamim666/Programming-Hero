

function updateMem(price ) {
    
    document.getElementById('memdis').innerText = price ;
    
    

}
function updateSto(price ) {
    
    document.getElementById('stodis').innerText = price ; 
    
    
}
function updateDel(price ) {
    
    document.getElementById('deldis').innerText = price ; 
}

function updateTotal(){
    
    const bestDis =  parseInt(document.getElementById('bestdis').innerText)
    const memDis = parseInt(document.getElementById('memdis').innerText)
    const stoDis = parseInt(document.getElementById('stodis').innerText)
    const delDis = parseInt(document.getElementById('deldis').innerText)
    
    const total = memDis + stoDis + delDis + bestDis ; 
    
    document.getElementById('totaldis').innerText = total ; 
    document.getElementById('grandtotal').innerText = total ; 
    
    return total ; 

 
}



document.getElementById('mem0').addEventListener('click' , function (){

    updateMem(0);
    updateTotal(); 
})

document.getElementById('mem1').addEventListener('click' , function (){

    updateMem(180);
    updateTotal();
})

document.getElementById('sto0').addEventListener('click' , function (){

    updateSto(0);
    updateTotal();
})

document.getElementById('sto1').addEventListener('click' , function (){

    updateSto(100);
    updateTotal();
})

document.getElementById('sto2').addEventListener('click' , function (){

    updateSto(180);
    updateTotal();
})
document.getElementById('del0').addEventListener('click' , function (){

    updateDel(0);
    updateTotal();
})
document.getElementById('del1').addEventListener('click' , function (){

    updateDel(20);
    updateTotal();
})


document.getElementById('apply').addEventListener('click',function(){
debugger
    if (document.getElementById('input').value == 'stevekaku'){

        const total = updateTotal() ; 
        const grandTotal = total - (total*.2) ; 
        const grandTotalDis = document.getElementById('grandtotal')
        const grandTotalDisVal = grandTotalDis.innerText ; 
        grandTotalDis.innerText = grandTotal ; 
        document.getElementById('input').value = '';
    }

else {

    return document.getElementById('input').value = '' ; 
}


})

