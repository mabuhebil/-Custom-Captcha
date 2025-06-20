const spanText = document.querySelector('.imgbox span')
const reloadBtn = document.querySelector('.mainBox button')
const checkBtn = document.querySelector('.inputBox  button')
const input = document.querySelector('input')
const p = document.querySelector('p')

let allCaracters = ['A', 'B', 'C', 'F', 'H', 'M', 'L', 'K',
    'R', 'Y', 'O', 'P', 'I', 'U', 'T', 'R', 'E', 'Q', 'W',
    'i', 's', 'x', 'z', 'j', 'v', 'c', 'n', 'd', 'p', 'a', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
]

const create = () => {

    for (let i = 0; i < 6; i++) {
        let randomChar = allCaracters[Math.floor(Math.random() * allCaracters.length)]
        spanText.innerHTML += ` ${randomChar}`
    }
}

reloadBtn.addEventListener('click', () => {

    spanText.innerHTML = ''
    create()
})

create();

checkBtn.addEventListener('click', e => {

    let inputValue = input.value.split('').join(' ')

    if (spanText.innerHTML.trim() == inputValue) {
        p.style.display = 'block';
        p.innerHTML = `Nice! You dont appear to be robot`
        p.style.color = 'aqua';
        setTimeout(() => {
            input.value = ''
            spanText.innerHTML = ''
            p.innerHTML = ``
            create();
        }, 4000);
    } else {
        p.innerHTML = `Captcha not matched. Please try again!`
        p.style.color = 'red'
    }

})

