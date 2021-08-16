const deposit = document.getElementById('depositbtn');
const withdraw = document.getElementById('withdrawbtn');





deposit.addEventListener('click',function(){
    const upcomingDeposit = document.getElementById('depositinput');
    const upcomingDepositValue = upcomingDeposit.value ; 
    
    const currentDeposit = document.getElementById('depo') ; 
    const currentDepositValue = currentDeposit.innerText ; 
    const totalUpdatedDeposit = parseFloat(upcomingDepositValue) + parseFloat(currentDepositValue) ; 
    
    currentDeposit.innerText = totalUpdatedDeposit ;
    upcomingDeposit.value = '';

    const currentBalance = document.getElementById('bal');
    const currentBalanceVal = currentBalance.innerText ; 

    const totalUpdatedBalance = parseFloat(currentBalanceVal) + parseFloat(upcomingDepositValue) ; 
    currentBalance.innerText = totalUpdatedBalance ; 
})
withdraw.addEventListener('click',function(){
    const upcomingWithdraw = document.getElementById('withdrawinput');
    const upcomingWithdrawValue = upcomingWithdraw.value ; 
    
    const currentWithdraw = document.getElementById('with') ; 
    const currentWithdrawValue = currentWithdraw.innerText ; 
    const totalUpdatedWithdraw = parseFloat(upcomingWithdrawValue) + parseFloat(currentWithdrawValue) ; 
    
    currentWithdraw.innerText = totalUpdatedWithdraw ;
    upcomingWithdraw.value = '';

    const currentBalance = document.getElementById('bal');
    const currentBalanceVal = currentBalance.innerText ; 

    const totalUpdatedBalance = parseFloat(currentBalanceVal) - parseFloat(upcomingWithdrawValue) ; 
    currentBalance.innerText = totalUpdatedBalance ;

})