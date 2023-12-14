let valueDisplay = document.querySelectorAll(".number-numero");
let interval = 6000 ;

valueDisplay.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute
    ("data-val"));
    let duration = Math.floor (interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    },duration);
});    

window.revelar = ScrollReveal({reset:true}) ;

revelar.reveal ('#number-container' , {

    duration: 1000,
    delay: 500,

}); 