$(document).ready(function(){

    $(".js-theme-toggle-button").click(function(event){
        event.preventDefault();
        toggleStylesheet();
    });

    function toggleStylesheet(){
        let sheet = document.getElementById("site-style");
        let themeButton = document.getElementById("theme-button");
        let summerIcon = themeButton.querySelector(".summer-icon");
        let winterIcon = themeButton.querySelector(".winter-icon");
        
        // Switch to winter mode
        if (sheet.getAttribute("href") == "summer-styles.css"){
            sheet.setAttribute("href", "winter-styles.css");
            summerIcon.style.display = "none";
            winterIcon.style.display = "inline-block"
        }
        // Switch back to summer mode
        else {
            sheet.setAttribute("href", "summer-styles.css");
            summerIcon.style.display = "inline-block";
            winterIcon.style.display = "none";
        }
    };
});