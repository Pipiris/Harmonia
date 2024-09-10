const rodomasKlausimas = document.getElementById("klausimai");
const change_button = document.getElementById("gotoMiestelis");
change_button.addEventListener("click", change_to_mood);


function change_to_mood() {
    window.location.href = "html/tracker.html"
}

let i = 0;
// Pridedame naują funkciją mygtukų paspaudimams apdoroti
function spausdintiNuotaika(event) {

    if (event.target.tagName === 'BUTTON') {
        console.log(event.target.id);

        if(i == 4) {
            nuotaikosMygtukai.style.display = "none";
        }

        let klausimai;
        fetch('../json/klausimai.json')
            .then(response => response.json())
            .then(data => {
                klausimai = data;
                rodomasKlausimas.textContent = klausimai.klausimai[i];
                i++;
            });


    }
}

// Randame div'ą, kuriame yra mygtukai
const nuotaikosMygtukai = document.querySelector('.nuotaikos-mygtukai');

// Pridedame event listener'į div'ui
nuotaikosMygtukai.addEventListener('click', spausdintiNuotaika);



