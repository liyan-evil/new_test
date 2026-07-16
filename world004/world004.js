/* ==========================================================
   WORLD 004
   Red Line AU

   Interactive Script

   Features:
   - Card Expand / Collapse
   - Smooth Animation
========================================================== */


document.addEventListener(
"DOMContentLoaded",
()=>{


const cards =
document.querySelectorAll(
".collapsible-card"
);



cards.forEach(card=>{


    const button =
    card.querySelector(
    ".toggle-button"
    );


    const content =
    card.querySelector(
    ".card-content"
    );


    if(!button || !content){

        return;

    }



    let animating=false;



    content.style.height="0px";

    content.style.opacity="0";




    button.addEventListener(
    "click",
    ()=>{


        if(animating){

            return;

        }


        animating=true;



        const active =
        card.classList.contains(
        "active"
        );



        /* =====================
           Collapse
        ===================== */


        if(active){


            content.style.height =
            content.scrollHeight
            +"px";



            requestAnimationFrame(()=>{


                content.style.height =
                "0px";


                content.style.opacity =
                "0";


                content.style.transform =
                "translateY(-15px)";


            });



            card.classList.remove(
            "active"
            );


            button.textContent =
            "展开";



        }



        /* =====================
           Expand
        ===================== */


        else{


            card.classList.add(
            "active"
            );



            const height =
            content.scrollHeight;



            content.style.height =
            height+"px";


            content.style.opacity =
            "1";


            content.style.transform =
            "translateY(0)";



            button.textContent =
            "收起";



        }



        const end =
        ()=>{


            if(
            card.classList.contains(
            "active"
            )
            ){

                content.style.height=
                "auto";

            }



            animating=false;


            content.removeEventListener(
            "transitionend",
            end
            );


        };



        content.addEventListener(
        "transitionend",
        end
        );



    });


});



});