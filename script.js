const name_field = document.querySelector('#name')
const phn_field = document.querySelector('#phone')
const wedding_date_field = document.querySelectorAll('#weddig_date')
const wedding_date_field_arr = Array.from(wedding_date_field)
const name_err = document.querySelector('#name_err')
const phn_err = document.querySelector('#phn_err')
const source_field = document.querySelectorAll('#source')
const source_field_arr = Array.from(source_field)

const submit_btn = document.querySelector('#submit_btn')

source_field_arr.forEach(function(el){
    el.value = document.URL
})

name_field.addEventListener('input', ()=>{
    name_err.style.display = 'none'
})

phn_field.addEventListener('input', ()=>{
    phn_err.style.display = 'none'
})

submit_btn.addEventListener('click', (e)=>{
    const alphabets = /[a-zA-Z]+$/
    if(!name_field.value){
        e.preventDefault()
        name_err.style.display = 'flex'
    } else if(!phn_field.value){
        e.preventDefault()
        phn_err.style.display = 'flex'
    } else if(phn_field.value.match(alphabets) || phn_field.value.length < 10 || phn_field.value.length > 10 || phn_field.value.startsWith('0') || phn_field.value.startsWith('1') || phn_field.value.startsWith('2') || phn_field.value.startsWith('3') || phn_field.value.startsWith('4') || phn_field.value.startsWith('5')){
        e.preventDefault()
        phn_err.style.display = 'flex'
        phn_err.innerHTML = 'Please enter a valid number'
    }
})

wedding_date_field_arr.forEach(function(el){
    el.addEventListener('focus', ()=>{
        el.type = 'date'
    })
})



const now = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
const hours = new Date(now).getHours();

let online_indicators = document.querySelectorAll('.online_indicator')
let online_indicator_array = Array.from(online_indicators)

let online_texts = document.querySelectorAll('.status_txt')
let online_texts_array = Array.from(online_texts)



if (hours >= 10 && hours < 20) {

  online_texts_array.forEach(function(el){
    el.textContent = 'Online'
  })

} else {

    online_indicator_array.forEach(function(el){
        el.style.display = 'none'
      })

    online_texts_array.forEach(function(el){
        el.textContent = 'Offline'
        el.style.color = '#CFCFCF'
    })

}