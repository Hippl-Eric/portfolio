$(document).ready(function(){

    $("#js-theme-toggle-button").click(function(){
        let sheet = document.getElementById("site-style");
        if (sheet.getAttribute("href") == "summer-styles.css"){
            sheet.setAttribute("href", "winter-styles.css");
        }
        else {
            sheet.setAttribute("href", "summer-styles.css");
        }
    });

});