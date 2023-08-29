const emoji = document.querySelectorAll('.emoji');
const counter = document.querySelectorAll('.votes');

for (let index = 0; index < emoji.length; index++) {
    emoji[index].addEventListener('click', () => {
        counter[index].textContent = parseInt(counter[index].textContent) + 1;

        const randomColor = randomColors();
        counter[index].style.color = randomColor;
    });
};

function randomColors() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}