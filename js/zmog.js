const speech = document.getElementById("press")
speech.addEventListener("click", popup)

function popup()
{
    speech.style.pointerEvents = "none";

    const bubble = document.getElementById("speech");
    bubble.style.display = "initial";

    setTimeout(function () 
    {
        bubble.style.display = "none";
        speech.style.pointerEvents = "all"; 
    }, 6000)

}
//moto virsuj, kad keistus parefreshinus NOT IMPORTANT
//depending on mood parekomenduoti filma su bubble.
//SUTVARKYT TA JIBANA BURBULA BLED
//pagal mooda parekomenduot playlista https://www.allmusicplaylists.com