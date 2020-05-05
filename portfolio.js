$(document).ready(function(){

    $(".js-theme-toggle-button").click(function(event){
        event.preventDefault();
        toggleStylesheet();
    });

    function toggleStylesheet(){
        let summerSheet = document.getElementById("summer-style");
        let winterSheet = document.getElementById("winter-style");
        let themeButton = document.getElementById("theme-button");
        let summerIcon = themeButton.querySelector(".summer-icon");
        let winterIcon = themeButton.querySelector(".winter-icon");

        if (summerSheet.disabled == true){
            summerSheet.removeAttribute('disabled');
            winterSheet.disabled = true;
            summerIcon.style.display = "inline-block"
            winterIcon.style.display = "none"
        }
        else {
            summerSheet.disabled = true;
            winterSheet.removeAttribute('disabled');
            summerIcon.style.display = "none"
            winterIcon.style.display = "inline-block"
        }
    };
});