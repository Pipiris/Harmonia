// Pagrindinis JS file'as, no clue kam darysiu, nes atskirom funkcijom vistiek atskirus scriptus naudosim :)


const change_button = document.getElementById("change")
change_button.addEventListener("click", change_to_mood)

function change_to_mood()
{
    window.location.href = "html/tracker.html"

}


