
document.onkeypress = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
    return false;
    }
    }
    document.onmousedown = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
    return false;
    }
    }
    document.onkeydown = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
    return false;
    }
    }
    
jQuery(document).ready(function($){
    $(document).keydown(function(event) {
    var pressedKey = String.fromCharCode(event.keyCode).toLowerCase();
    
    if (event.ctrlKey && (pressedKey == "c" || pressedKey == "u")) {
    alert('Sorry, This Functionality Has Been Disabled!');
    //disable key press porcessing
    return false;
    }
    });
    });
