/* ==========================================================
   LI YAN ARCHIVE
   WORLD 002
   Somnia in Cinerem
========================================================== */


document.addEventListener("DOMContentLoaded",()=>{



/* ======================================================
   Lightbox
====================================================== */


const lightbox =
document.getElementById("lightbox");


const lightboxImg =
document.getElementById("lightbox-img");


const closeBtn =
document.querySelector(".lightbox-close");


const recordImages =
document.querySelectorAll(".record-image");



let scale = 1;

let isDragging = false;

let hasMoved = false;

let startX = 0;

let startY = 0;

let translateX = 0;

let translateY = 0;





function resetZoom(){


    if(!lightboxImg)
    return;


    scale = 1;

    translateX = 0;

    translateY = 0;



    lightboxImg.style.transform =

    `
    translate(0px,0px)
    scale(1)
    `;



    lightboxImg.style.cursor =
    "zoom-in";


}





function closeLightbox(){


    if(lightbox){

        lightbox.classList.remove("active");

    }


    resetZoom();


}






if(
    lightbox &&
    lightboxImg &&
    closeBtn &&
    recordImages.length > 0
){



    recordImages.forEach(item=>{


        item.addEventListener(
        "click",
        (e)=>{


            e.preventDefault();



            lightboxImg.src =
            item.href;



            const img =
            item.querySelector("img");


            if(img){

                lightboxImg.alt =
                img.alt;

            }



            resetZoom();



            lightbox.classList.add("active");


        });


    });






    lightboxImg.addEventListener(
    "click",
    ()=>{


        if(hasMoved){

            hasMoved=false;

            return;

        }




        if(scale===1){


            scale=2;


            lightboxImg.style.cursor =
            "grab";


        }
        else{


            resetZoom();


        }





        lightboxImg.style.transform =

        `
        translate(${translateX}px,${translateY}px)
        scale(${scale})
        `;



    });








    lightboxImg.addEventListener(
    "mousedown",
    (e)=>{


        if(scale===1)
        return;



        e.preventDefault();



        isDragging=true;

        hasMoved=false;



        lightboxImg.style.cursor =
        "grabbing";



        startX =
        e.clientX - translateX;



        startY =
        e.clientY - translateY;



    });








    document.addEventListener(
    "mousemove",
    (e)=>{


        if(!isDragging)
        return;



        hasMoved=true;



        translateX =
        e.clientX-startX;



        translateY =
        e.clientY-startY;



        lightboxImg.style.transform =

        `
        translate(${translateX}px,${translateY}px)
        scale(${scale})
        `;



    });








    document.addEventListener(
    "mouseup",
    ()=>{


        if(!isDragging)
        return;



        isDragging=false;



        lightboxImg.style.cursor =
        "grab";


    });








    closeBtn.addEventListener(
    "click",
    closeLightbox
    );








    lightbox.addEventListener(
    "click",
    (e)=>{


        if(e.target===lightbox){

            closeLightbox();

        }


    });








    document.addEventListener(
    "keydown",
    (e)=>{


        if(
            e.key==="Escape" &&
            lightbox.classList.contains("active")
        ){

            closeLightbox();

        }


    });



}








/* ======================================================
   Ritual Burning Effect
   召唤与现身
====================================================== */


const ritualSection =
document.querySelector(".ritual-section");



if(ritualSection){


    const burnTexts =
    ritualSection.querySelectorAll(".burn-text");



    const ending =
    ritualSection.querySelector(".burn-ending");



    let burned=false;



    const ritualObserver =
    new IntersectionObserver(

        entries=>{


            entries.forEach(entry=>{


                if(
                    entry.isIntersecting &&
                    !burned
                ){


                    burned=true;



                    setTimeout(()=>{


                        burnTexts.forEach(
                        (text,index)=>{


                            setTimeout(()=>{


                                text.classList.add(
                                "burning"
                                );


                            },index*800);



                        });



                    },5000);






                    if(ending){


                        setTimeout(()=>{


                            ending.classList.add(
                            "burning"
                            );


                        },9000);


                    }



                }



            });



        },

        {
            threshold:0.45
        }



    );



    ritualObserver.observe(
    ritualSection
    );


}








/* ======================================================
   Confidential File
====================================================== */


const openButton =
document.getElementById("openArchive");


const closeButton =
document.getElementById("closeArchive");


const archive =
document.getElementById("archiveContent");






if(openButton && archive){


    openButton.addEventListener(
    "click",
    ()=>{


        archive.classList.add(
        "active"
        );



        openButton.style.display =
        "none";



        archive.scrollIntoView({

            behavior:"smooth",

            block:"start"

        });


    });



}






if(closeButton && archive){


    closeButton.addEventListener(
    "click",
    ()=>{


        archive.classList.remove(
        "active"
        );



        if(openButton){


            openButton.style.display =
            "block";


        }



        const section =
        document.querySelector(
        ".confidential-section"
        );



        if(section){


            section.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });


        }



    });



}


/* ======================================================
   Ending Sequence
====================================================== */

const endingSection =
document.querySelector(".ending-section");

const endingMessage =
document.getElementById("ending-message");

if(endingSection && endingMessage){

    let played = false;

    const endingObserver =
    new IntersectionObserver(

        entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting && !played){

                    played = true;

                    endingSection.classList.add("active");

                    const messages=[

                        "档案已修订。",

                        "调查记录已结束。",

                        "记录者身份已不可考。",

                        "欢迎成为灰烬。"

                    ];

                    let index=0;

                    endingMessage.classList.add("show");

                    endingMessage.textContent=
                    messages[0];

                    const changeMessage=()=>{

                        index++;

                        if(index>=messages.length){

                            clearInterval(timer);

                            // 最后一条停留
                            endingMessage.textContent=
                            messages[messages.length-1];

                            // 页面整体轻微变暗
                            document.body.classList.add(
                                "archive-finished"
                            );

                            return;

                        }

                        endingMessage.animate(

                            [

                                {
                                    opacity:.45,
                                    transform:"translateY(0)"
                                },

                                {
                                    opacity:0,
                                    transform:"translateY(-8px)"
                                }

                            ],

                            {

                                duration:500

                            }

                        );

                        setTimeout(()=>{

                            endingMessage.textContent=
                            messages[index];

                            endingMessage.animate(

                                [

                                    {
                                        opacity:0,
                                        transform:"translateY(8px)"
                                    },

                                    {
                                        opacity:.45,
                                        transform:"translateY(0)"
                                    }

                                ],

                                {

                                    duration:800,
                                    fill:"forwards"

                                }

                            );

                        },500);

                    };

                    const timer=
                    setInterval(
                        changeMessage,
                        2600
                    );

                    endingObserver.disconnect();

                }

            });

        },

        {

            threshold:.4

        }

    );

    endingObserver.observe(
        endingSection
    );

}


});