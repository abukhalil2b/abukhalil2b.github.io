var sadakatButton = document.getElementById('jsSadakatButton');
var acehoomButton = document.getElementById('jsAcehoomButton');

sadakatButton.addEventListener('click',()=>{
    sadakatButton.classList.add('button_chairty_active')
    acehoomButton.classList.remove('button_chairty_active')
})

acehoomButton.addEventListener('click',()=>{
    console.log(acehoomButton)
    acehoomButton.classList.add('button_chairty_active')
    sadakatButton.classList.remove('button_chairty_active')
})