const back_button = document.getElementById("back")
back_button.addEventListener("click", change_back)

function change_back() {
    window.location.href = "../index.html"

}


const character = document.getElementById('character');
const roadContainer = document.querySelector('.road-container');
const thoughtsContainer = document.getElementById('thoughts-container');
let scrollPosition = 0;
let targetScrollPosition = 0;

window.addEventListener('wheel', (e) => {
    e.preventDefault();
    targetScrollPosition += e.deltaY * 0.5; // Reduce the scroll amount
    targetScrollPosition = Math.max(0, Math.min(targetScrollPosition, roadContainer.clientHeight - window.innerHeight));
    if (!isScrolling) {
        requestAnimationFrame(smoothScroll);
    }
});

let isScrolling = false;

function smoothScroll() {
    isScrolling = true;
    const difference = targetScrollPosition*0.6 - scrollPosition;
    const speed = 0.02; // Reduced from 0.1 to 0.02 for slower scrolling
    
    if (Math.abs(difference) > 0.1) {
        scrollPosition += difference * speed;
        updateThoughtsPosition();
        requestAnimationFrame(smoothScroll);
    } else {
        scrollPosition = targetScrollPosition;
        updateThoughtsPosition();
        isScrolling = false;
    }
}

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