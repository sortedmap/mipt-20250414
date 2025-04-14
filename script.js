document.addEventListener('DOMContentLoaded', () => {
    let button = document.querySelector('button')
    let textarea = document.querySelector('textarea')
    let result = document.querySelector('.result')
    button.addEventListener('click', () => {
        let length = textarea.value.length
        console.log(length)
        result.innerHTML = "Длина: " + length + " символов"
    })
});