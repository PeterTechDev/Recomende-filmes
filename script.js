const posterArea = document.querySelector('.poster-container');
const addBtn = document.querySelector('button')
const entry = document.querySelector('input')

addBtn.addEventListener('click', ()=>{
    if(entry.value == '' || entry.value.includes('https') != true ){
        alert('Favor inserir uma URL válida')
    } else {
        posterArea.innerHTML += (`<img src=${entry.value} class='poster'>`)
        entry.value = ''    
    }
})