document.addEventListener(
"DOMContentLoaded",
()=>{


const buttons =
document.querySelectorAll(
".timeline-toggle"
);



buttons.forEach(button=>{


const defaultText =
button.innerText;



button.addEventListener(
"click",
()=>{


const card =
button.closest(
".timeline-card"
);



const active =
card.classList.toggle(
"active"
);



if(active){

button.innerText="收起";

}

else{

button.innerText=defaultText;

}



});


});


});