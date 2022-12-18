let currentPage = 1;
function nextPage() {
    if (currentPage === 1){
        document.querySelector(".about-me").style.animation = "hidePage 1s ease-in forwards";
        document.querySelector(".about-me").style.zIndex ="0";
        document.querySelector(".skills").style.animation = "showPage 1s ease-in forwards";
        document.querySelector(".skills").style.zIndex ="1";
        document.querySelector(".left-button").style.opacity = "1";
        currentPage = 2;
    } else if (currentPage === 2) {
        document.querySelector(".skills").style.animation = "hidePage 1s ease-in forwards";
        document.querySelector(".skills").style.zIndex ="0";
        document.querySelector(".experience").style.animation = "showPage 1s ease-in forwards";
        document.querySelector(".experience").style.zIndex ="1";
        currentPage = 3;
    } else if (currentPage === 3) {
        document.querySelector(".experience").style.animation = "hidePage 1s ease-in forwards";
        document.querySelector(".experience").style.zIndex ="0";
        document.querySelector(".education").style.animation = "showPage 1s ease-in forwards";
        document.querySelector(".education").style.zIndex ="1";
        currentPage = 4;
    } else if(currentPage === 4) {
        document.querySelector(".education").style.animation = "hidePage 1s ease-in forwards";
        document.querySelector(".education").style.zIndex ="0";
        document.querySelector(".contact").style.animation = "showPage 1s ease-in forwards";
        document.querySelector(".contact").style.zIndex ="1";
        document.querySelector(".right-button").style.opacity = "0";
        currentPage = 5;  
    }
}

function prevPage() {
    if (currentPage === 2){  
        document.querySelector(".skills").style.animation = "reverseHidePage 1s ease-in forwards";
        document.querySelector(".skills").style.zIndex ="1";
        document.querySelector(".about-me").style.animation = "reverseShowPage 1s ease-in forwards";
        document.querySelector(".about-me").style.zIndex ="1";
        document.querySelector(".left-button").style.opacity = "0";
        currentPage = 1;
    } else if (currentPage === 3) {
        document.querySelector(".skills").style.animation = "reverseShowPage 1s ease-in forwards";
        document.querySelector(".skills").style.zIndex ="0";
        document.querySelector(".experience").style.animation = "reverseHidePage 1s ease-in forwards";
        document.querySelector(".experience").style.zIndex ="1";
        currentPage = 2;
    } else if (currentPage === 4) {
        document.querySelector(".experience").style.animation = "reverseShowPage 1s ease-in forwards";
        document.querySelector(".experience").style.zIndex ="0";
        document.querySelector(".education").style.animation = "reverseHidePage 1s ease-in forwards";
        document.querySelector(".education").style.zIndex ="1";
        currentPage = 3;
    } else if(currentPage === 5) {
        document.querySelector(".education").style.animation = "reverseShowPage 1s ease-in forwards";
        document.querySelector(".education").style.zIndex ="0";
        document.querySelector(".contact").style.animation = "reverseHidePage 1s ease-in forwards";
        document.querySelector(".contact").style.zIndex ="0";
        document.querySelector(".right-button").style.opacity = "1";
        currentPage = 4;  
    }
}
