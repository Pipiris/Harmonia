const back_button = document.getElementById("back")
back_button.addEventListener("click", change_back)

function change_back() {
    window.location.href = "../index.html"

}


const character = document.getElementById('character');
const roadContainer = document.querySelector('.road-container');
const thoughtsContainer = document.getElementById('thoughts-container');
let scrollPosition = 0;

window.addEventListener('wheel', (e) => {
    e.preventDefault();
    scrollPosition += e.deltaY;
    scrollPosition = Math.max(0, Math.min(scrollPosition, roadContainer.clientHeight - window.innerHeight));
    updateThoughtsPosition();
});

function updateThoughtsPosition() {
    thoughtsContainer.style.transform = `translateY(-${scrollPosition}px)`;
}

const addThoughtBtn = document.getElementById('addThoughtBtn');
const thoughtInputField = document.getElementById('thoughtInputField');
const thoughtText = document.getElementById('thoughtText');
const publishBtn = document.getElementById('publishBtn');

addThoughtBtn.addEventListener('click', () => {
    addThoughtBtn.style.display = 'none';
    thoughtInputField.style.display = 'block';
});

publishBtn.addEventListener('click', () => {
    if (thoughtText.value.trim() !== '') {
        const thought = document.createElement('div');
        thought.className = 'thought';
        thought.textContent = thoughtText.value;
        thought.style.top = `${scrollPosition + window.innerHeight / 2}px`;
        thoughtsContainer.appendChild(thought);

        thoughtText.value = '';
        thoughtInputField.style.display = 'none';
        addThoughtBtn.style.display = 'block';
    }
});

updateThoughtsPosition();