const buttons = document.querySelectorAll('.btn')
const textarea = document.querySelector('textarea')

const delete_btn = document.querySelector('.delete')
const shift_btn = document.querySelector('.shift')
const space_btn = document.querySelector('.space')

let chars = []
var check;
function generateLetter() {
    var possible = "abcdefghijklmnopqrstuvwxyz"; 
       check = possible.charAt(Math.floor(Math.random() * possible.length));
    return check;
  }

function timer(){
    var n = textarea.value.length;
    let blink = textarea.value.en;
    blink.style.opacity=blink.style.opacity == 0?1:0;
    setTimeout(timer,500);
}


    var  temp = generateLetter();
    textarea.value += temp;



    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            var k = btn.innerText;
            if(k===temp){
                temp=generateLetter();
                textarea.value += temp;               
            }
    
            chars = textarea.value.split('')
        })
    })   

delete_btn.addEventListener('click', () => {
    chars.pop()
    textarea.value = chars.join('')
})

space_btn.addEventListener('click', () => {
    chars.push(' ')
    textarea.value = chars.join('')
})

shift_btn.addEventListener('click', () => {
    buttons.forEach(btn => {
        btn.classList.toggle('upper')
    })
})