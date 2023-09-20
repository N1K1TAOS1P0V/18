let caseClick =  document.querySelectorAll('#clickCase')
let caseClickImg = document.querySelectorAll('#clickImg')

caseClick.forEach(function(item){
    item.addEventListener('mouseover', function(){
        this.nextElementSibling.classList.remove('hidden')
        this.lastElementChild.src = 'img/faqs--img--minus.svg'
    })
    item.addEventListener('mouseout', function(){
        this.nextElementSibling.classList.add('hidden')
        this.lastElementChild.src = 'img/faqs--img--plus.svg'
    })
})
// 
function  validation(form){

    function createError(input){
        input.placeholder = "Не корректный Email"
        input.classList.add('error')
    }

    let result = true;

    const allInputs = form.querySelectorAll('input');

    for (const input of allInputs){
        if(input.value == ""){
            result = false 
            createError(input)
        }
    }
    return result
}

let formValid = document.querySelectorAll('#form')

for(form of formValid){
    form.addEventListener('submit', function(event){
        event.preventDefault()
        // проверка на выполнение кода
        if (validation(this) === true){
            console.log('Форма проверена!')
        }
    })
}
// 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        document.getElementById("btn--top").style.display = "block";
    } else {
        document.getElementById("btn--top").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// 
document.querySelector('#btn--media--menu_open').addEventListener('click', function(){
    document.querySelector('.menu--media').style.display = 'block';
    document.querySelector('body').style.overflowY = 'hidden'
});
document.querySelector('#btn--media--menu_close').addEventListener('click', function(){
    document.querySelector('.menu--media').style.display = 'none';
    document.querySelector('body').style.overflowY = 'scroll'
})