const searchBtn = document.getElementById('search-btn')
const searchBox = document.getElementById('search-box')
const inputBox = document.getElementById('input-box')

searchBtn.addEventListener('click',() =>{
    searchBox.classList.toggle('hidden')
    setTimeout(()=> {
        inputBox.classList.toggle('opacity-0')
        inputBox.classList.toggle('translate-y-10')
    },0)
})