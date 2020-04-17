$(document).ready(function(){

    $(".js-theme-toggle-button").click(function(){
        toggleStylesheet();
    });

    function toggleStylesheet(){
        let sheet = document.getElementById("site-style");
        if (sheet.getAttribute("href") === "summer-styles.css"){
            sheet.setAttribute("href", "winter-styles.css");
        }
        else {
            sheet.setAttribute("href", "summer-styles.css");
        }
    };

    //TODO Collapse navbar when nav-link is clicked
/*     
    $(".nav-link").click(function(){
        //console.log("clicked!");
        //navToggleBtn[0].setAttribute("class", "navbar-toggler collapsed");
        //navToggleBtn[0].setAttribute("aria-expanded", "false");
        $("#navbar").collapse('toggle');

    });
 */ 

    

});