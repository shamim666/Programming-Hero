const sub = document.getElementById('subbtn');
sub.addEventListener('click',function(){
    
    const email = document.getElementById('emailinput');
    const pass =  document.getElementById('passinput');
    if (email.value == 'abc@baap.com' && pass.value == 'secret' ){

        window.location.href = 'banking.html'
    }

})