const cardEvent = document.querySelector('.card');


callEventListeners();
function callEventListeners(){

cardEvent.addEventListener('focusin',fieldActive);
cardEvent.addEventListener('focusout',fieldCheck);
cardEvent.addEventListener('keydown',notEmpty);
cardEvent.addEventListener('submit',inputValidation);

}


function fieldActive(e){

    if(e.target.classList.contains('register')){
        e.target.nextElementSibling.classList.add('active-label')
        // e.target.nextElementSibling.className = 'active-label';
        // console.log();
        e.target.classList.add('active-input');
        e.target.classList.remove('inputError');
        e.target.nextElementSibling.classList.remove('errorLabel');
        e.target.nextElementSibling.textContent = 'Enter Your Tag (Without # sign)';
    } 
    
}
function fieldCheck(e){

    if(e.target.classList.contains('register')){
        val = e.target.value;
        if((val === '') || (val === ' ')){
            e.target.value = '';
            e.target.classList.remove('active-input');
            e.target.nextElementSibling.classList.remove('active-label');
         }
        else 
            console.log('Input present');
    }
    
}
function inputValidation(e){
    if(e.target.classList.contains('formhook')){
        val = e.target.children[0].children[0].value;
        if((val === '')){
            // console.log('card',flag);
            e.target.children[0].children[0].classList.add('inputError');
            e.target.children[0].children[1].classList.add('errorLabel');
            e.target.children[0].children[1].textContent = 'Task can\'t be empty';
    }
    }
    
}
function notEmpty(e){
    if(e.target.classList.contains('register')){
        e.target.classList.remove('inputError');
        e.target.nextElementSibling.classList.remove('errorLabel');
        e.target.nextElementSibling.textContent = 'Enter Your Tag (Without # sign)';
    }
   
}