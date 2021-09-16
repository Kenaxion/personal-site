let nameTitle = document.getElementById("name-title").style.opacity = "0";
window.addEventListener("load",
bannerFunc = function() {
    document.getElementById("name-title").style.transition = "opacity 2s 0.7s";
    document.getElementById("name-title").style.opacity = "1";
}, false);

let jobTitle = document.getElementById("job-title").style.opacity = "0";
window.addEventListener("load",
bannerFunc = function() {
    document.getElementById("job-title").style.transition = "opacity 2s 1.2s";
    document.getElementById("job-title").style.opacity = "1";
}, false);

let borderWrap = document.getElementById("border-wrap").style.opacity = "0";
window.addEventListener("load",
borderWrapFunc = function() {
    document.getElementById("border-wrap").style.transition = "opacity 2s 1.7s";
    // document.getElementById("border-line").style.transform = "scale(1, 1)";
    document.getElementById("border-wrap").style.opacity = "1";
}, false)

let borderLine = document.getElementById("border-line").style.transform = "scale(0, 1)";
window.addEventListener("load",
borderLineFunc = function() {
    document.getElementById("border-line").style.transition = "transform ease-out 250ms";
    document.getElementById("border-line").style.transform = "scale(1, 1)";
}, false)

let infoDropdownChoices = document.getElementsByClassName("info-dropdown-choices").style.opacity = "0";
document.addEventListener("click",
infoDropDownfunc = function () {
    document.getElementsByClassName("info-dropdown-choices").style.transition = "opacity .5s 0s";
    document.getElementsByClassName("info-dropdown-choices").style.opacity = "1";
    
},)