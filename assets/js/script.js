document.querySelector(".menu-opener").addEventListener("click", function(){
    if(document.querySelector(".menu nav").style.width == 'auto') {
        document.querySelector(".menu nav").style.width = '0';
    } else {
        document.querySelector(".menu nav").style.width = 'auto';
    }
});